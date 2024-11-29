function calculateSubnets() {
    const networkIp = document.getElementById("networkIp").value;
    const subnetMask = document.getElementById("subnetMask").value;
    const subnetCount = parseInt(document.getElementById("subnetCount").value);

    if (!validateIp(networkIp) || !validateIp(subnetMask)) {
        alert("Por favor, ingrese IPs válidas.");
        return;
    }

    const results = calculateNetworkDetails(networkIp, subnetMask, subnetCount);
    if (!results) {
        alert("No es posible calcular las subredes con los datos proporcionados.");
        return;
    }

    document.getElementById("firstIp").innerText = results.firstIp;
    document.getElementById("lastIp").innerText = results.lastIp;
    document.getElementById("subnetMaskResult").innerText = results.subnetMask;
    document.getElementById("broadcast").innerText = results.broadcast;
}

function validateIp(ip) {
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(\1\.){2}\1$/;
    return ipRegex.test(ip);
}

function calculateNetworkDetails(ip, mask, count) {
    const ipParts = ip.split('.').map(Number);
    const maskParts = mask.split('.').map(Number);
    const subnetBits = Math.ceil(Math.log2(count + 2));
    const newMask = 32 - subnetBits;

    const subnetMask = generateMask(newMask);
    const firstIp = generateFirstIp(ipParts, subnetMask);
    const lastIp = generateLastIp(ipParts, subnetMask);
    const broadcast = generateBroadcast(ipParts, subnetMask);

    return { firstIp, lastIp, subnetMask, broadcast };
}

function generateMask(bits) {
    let mask = [];
    for (let i = 0; i < 4; i++) {
        if (bits >= 8) {
            mask.push(255);
            bits -= 8;
        } else {
            mask.push(256 - Math.pow(2, 8 - bits));
            bits = 0;
        }
    }
    return mask.join('.');
}

function generateFirstIp(ip, mask) {
    // Add custom logic for first IP calculation.
    return "192.168.1.1"; // Placeholder
}

function generateLastIp(ip, mask) {
    // Add custom logic for last IP calculation.
    return "192.168.1.254"; // Placeholder
}

function generateBroadcast(ip, mask) {
    // Add custom logic for broadcast calculation.
    return "192.168.1.255"; // Placeholder
}