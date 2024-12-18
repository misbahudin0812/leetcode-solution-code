/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Simpan nilai simbol Romawi
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0; // Variabel untuk menyimpan hasil
    for (let i = 0; i < s.length; i++) {
        const currentVal = romanMap[s[i]]; // Nilai simbol saat ini
        const nextVal = romanMap[s[i + 1]]; // Nilai simbol berikutnya

        if (nextVal > currentVal) {
            // Kasus pengurangan (contoh: IV = 5 - 1)
            total -= currentVal;
        } else {
            // Kasus penjumlahan normal
            total += currentVal;
        }
    }

    return total; // Kembalikan hasil konversi
};
