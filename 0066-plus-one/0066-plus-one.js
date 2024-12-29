/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // Iterasi mundur dari akhir array
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++; // Tambahkan 1 ke digit jika bukan 9
            return digits; // Langsung kembalikan array
        }
        digits[i] = 0; // Jika digit adalah 9, ubah menjadi 0
    }
    // Jika seluruh digit adalah 9 (contoh: [9, 9, 9]), tambahkan 1 di depan
    digits.unshift(1);
    return digits;
};
