/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    // Inisialisasi hasil sebagai 0
    let result = 0;

    // Iterasi setiap karakter dalam string
    for (let i = 0; i < columnTitle.length; i++) {
        // Hitung nilai angka dari karakter saat ini
        // 'A' dimulai dari 1, jadi kita kurangi dengan kode ASCII 'A' dan tambahkan 1
        const charValue = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;

        // Perbarui hasil dengan cara menggandakan hasil sebelumnya (basis 26)
        // Lalu tambahkan nilai angka dari karakter saat ini
        result = result * 26 + charValue;
    }

    // Kembalikan hasil akhir
    return result;
};
