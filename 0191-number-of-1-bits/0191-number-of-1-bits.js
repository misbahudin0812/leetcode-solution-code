/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n !== 0) {
        n = n & (n - 1); // Menghapus satu bit '1'
        count++;
    }
    return count;
};
