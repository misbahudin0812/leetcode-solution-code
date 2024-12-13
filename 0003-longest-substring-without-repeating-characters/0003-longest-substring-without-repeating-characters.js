/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charSet = new Set(); // Set untuk melacak karakter unik
    let start = 0; // Pointer awal window
    let maxLength = 0; // Panjang substring terpanjang

    for (let end = 0; end < s.length; end++) {
        // Jika karakter sudah ada di Set, geser pointer `start`
        while (charSet.has(s[end])) {
            charSet.delete(s[start]);
            start++;
        }

        // Tambahkan karakter baru ke Set
        charSet.add(s[end]);

        // Perbarui panjang substring terpanjang
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength; // Kembalikan panjang maksimumnya
};
