/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    // Inisialisasi hasil sebagai string kosong untuk menyimpan judul kolom
    let result = "";

    // Loop berlanjut sampai columnNumber menjadi 0
    while (columnNumber > 0) {
        // Kurangi 1 dari columnNumber untuk menyesuaikan indeks ke basis 0
        columnNumber--;

        // Hitung nilai karakter saat ini dengan modulus 26
        // 0 -> A, 1 -> B, ..., 25 -> Z
        let currentChar = String.fromCharCode((columnNumber % 26) + 65);

        // Tambahkan karakter ini ke depan string hasil
        result = currentChar + result;

        // Bagi columnNumber dengan 26 untuk menangani bagian berikutnya
        columnNumber = Math.floor(columnNumber / 26);
    }

    // Kembalikan hasil akhir berupa judul kolom
    return result;
};
