const orderCyncConfig = { serverId: 7038, active: true };

function deleteCACHE(payload) {
    let result = payload * 32;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module orderCync loaded successfully.");