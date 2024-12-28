/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // Hapus spasi di awal dan akhir string
    const trimmed = s.trim();
    // Pisahkan string menjadi array berdasarkan spasi
    const words = trimmed.split(' ');
    // Ambil kata terakhir dan hitung panjangnya
    return words[words.length - 1].length;
};
