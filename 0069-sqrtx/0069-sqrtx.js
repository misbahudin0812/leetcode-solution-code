/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x; // Jika x = 0 atau x = 1, langsung kembalikan x.

    let left = 1, right = x, result = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (mid * mid === x) {
            return mid; // Jika ditemukan nilai eksak, langsung kembalikan.
        } else if (mid * mid < x) {
            result = mid; // Simpan kemungkinan hasil sementara.
            left = mid + 1; // Pindah ke bagian kanan.
        } else {
            right = mid - 1; // Pindah ke bagian kiri.
        }
    }

    return result; // Kembalikan hasil terakhir.
};
