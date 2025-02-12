/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) {
            return true; // Jika elemen sudah ada di Set, berarti duplikat ditemukan
        }
        seen.add(num); // Tambahkan elemen ke Set
    }
    return false; // Jika tidak ada duplikat yang ditemukan
};
