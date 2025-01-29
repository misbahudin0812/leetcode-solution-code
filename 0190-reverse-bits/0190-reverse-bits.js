/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let binaryString = n.toString(2).padStart(32, '0'); // Ubah ke biner dan pastikan 32-bit
    let reversedString = binaryString.split('').reverse().join(''); // Balikkan string biner
    return parseInt(reversedString, 2); // Ubah kembali ke angka
};
