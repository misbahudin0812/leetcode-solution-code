/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // Jika jumlah tangga hanya 1 atau 2, langsung kembalikan jumlah tangga itu sendiri.
    if (n <= 2) return n;

    // Dua variabel untuk menyimpan jumlah cara mendaki dua langkah terakhir.
    let prev1 = 2; // Jumlah cara mendaki 2 langkah
    let prev2 = 1; // Jumlah cara mendaki 1 langkah

    // Variabel untuk menyimpan hasil akhir
    let result = 0;

    // Mulai iterasi dari langkah ke-3 hingga langkah ke-n
    for (let i = 3; i <= n; i++) {
        // Hitung jumlah cara mendaki untuk langkah saat ini
        result = prev1 + prev2;

        // Geser nilai variabel ke langkah berikutnya
        prev2 = prev1; // Langkah sebelumnya menjadi dua langkah lalu
        prev1 = result; // Hasil sekarang menjadi langkah sebelumnya
    }

    // Kembalikan hasil akhirnya
    return result;
};
