/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
    // Jika needle adalah string kosong, kembalikan 0
    if (needle === "") return 0;

    // Panjang haystack dan needle
    const haystackLength = haystack.length;
    const needleLength = needle.length;

    // Iterasi melalui haystack untuk mencari needle
    for (let i = 0; i <= haystackLength - needleLength; i++) {
        // Periksa substring dari haystack
        if (haystack.substring(i, i + needleLength) === needle) {
            return i; // Kembalikan indeks pertama
        }
    }

    return -1; // Jika tidak ditemukan
};
