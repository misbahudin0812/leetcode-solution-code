/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

// // cara manual
// const strStr = function(haystack, needle) {
//     // Jika needle adalah string kosong, kembalikan 0
//     if (needle === "") return 0;

//     // Panjang haystack dan needle
//     const haystackLength = haystack.length;
//     const needleLength = needle.length;

//     // Iterasi melalui haystack untuk mencari kecocokan
//     for (let i = 0; i <= haystackLength - needleLength; i++) {
//         let isMatch = true;

//         // Cek setiap karakter di dalam needle
//         for (let j = 0; j < needleLength; j++) {
//             if (haystack[i + j] !== needle[j]) {
//                 isMatch = false;
//                 break;
//             }
//         }

//         if (isMatch) return i; // Jika cocok, kembalikan indeks
//     }

//     return -1; // Jika tidak ditemukan
// };

