/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Jika panjang kedua string tidak sama, langsung kembalikan false
    if (s.length !== t.length) {
        return false;
    }

    // Buat objek untuk menghitung frekuensi karakter dalam string s
    let charCount = {};

    // Iterasi setiap karakter dalam s dan tambahkan ke dalam objek charCount
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Iterasi setiap karakter dalam t dan kurangi dari objek charCount
    for (let char of t) {
        if (!charCount[char]) {
            return false; // Jika karakter tidak ditemukan atau jumlahnya kurang, bukan anagram
        }
        charCount[char]--;
    }

    return true; // Jika semua karakter cocok, berarti s dan t adalah anagram
};
