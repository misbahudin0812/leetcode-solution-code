/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let count = {}; // HashMap untuk menyimpan frekuensi elemen
    
    // Hitung frekuensi setiap angka
    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
    }
    
    // Cari angka yang hanya muncul sekali
    for (let num in count) {
        if (count[num] === 1) {
            return parseInt(num);
        }
    }
};
