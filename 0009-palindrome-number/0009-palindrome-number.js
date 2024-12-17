/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Angka negatif atau angka berakhiran 0 (kecuali 0 sendiri) bukan palindrome
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    
    let reversedHalf = 0;
    let originalX = x;

    // Balikkan separuh angka
    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    // Cek apakah angka asli sama dengan bagian yang dibalik
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};
