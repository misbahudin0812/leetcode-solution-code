/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Langkah 1: Preprocessing - Ubah semua huruf menjadi huruf kecil dan hapus karakter non-alfanumerik
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Penjelasan:
    // - `toLowerCase()` mengubah string menjadi huruf kecil agar perbandingan tidak case-sensitive.
    // - `replace(/[^a-z0-9]/g, '')` menghapus semua karakter yang bukan huruf (a-z) atau angka (0-9).
    //   Karakter seperti spasi, tanda baca, dan simbol akan diabaikan.

    // Langkah 2: Gunakan dua pointer untuk memeriksa apakah string adalah palindrome
    let left = 0; // Pointer kiri
    let right = s.length - 1; // Pointer kanan

    // Periksa apakah karakter pada posisi `left` dan `right` sama
    while (left < right) {
        if (s[left] !== s[right]) {
            return false; // Jika ada ketidaksamaan, string bukan palindrome
        }
        left++; // Geser pointer kiri ke kanan
        right--; // Geser pointer kanan ke kiri
    }

    // Langkah 3: Jika semua pasangan karakter cocok, string adalah palindrome
    return true;
};
