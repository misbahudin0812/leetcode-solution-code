/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // Carry menyimpan sisa penjumlahan yang harus diteruskan ke bit berikutnya
    let carry = 0;

    // Array untuk menyimpan hasil akhir sebagai string binary
    let result = [];

    // Mulai dari bit paling kanan (akhir string)
    let i = a.length - 1;
    let j = b.length - 1;

    // Loop selama ada bit yang tersisa di a, b, atau masih ada carry
    while (i >= 0 || j >= 0 || carry > 0) {
        // Ambil nilai bit dari string a dan b (atau 0 jika sudah habis)
        const bitA = i >= 0 ? parseInt(a[i]) : 0;
        const bitB = j >= 0 ? parseInt(b[j]) : 0;

        // Hitung penjumlahan bit-bit ini ditambah carry
        const sum = bitA + bitB + carry;

        // Simpan bit terakhir dari hasil penjumlahan (0 atau 1)
        result.unshift(sum % 2); // Tambahkan ke depan hasil

        // Update carry untuk bit berikutnya (0 jika sum < 2, 1 jika sum >= 2)
        carry = Math.floor(sum / 2);

        // Pindah ke bit berikutnya (ke kiri)
        i--;
        j--;
    }

    // Gabungkan array hasil menjadi string dan kembalikan
    return result.join('');
};

