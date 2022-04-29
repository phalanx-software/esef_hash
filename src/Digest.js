async function digest(data) {
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);           // hash the message
    const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
    // convert bytes to hex string
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export default digest;