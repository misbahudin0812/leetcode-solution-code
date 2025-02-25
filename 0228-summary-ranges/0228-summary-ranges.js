/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let result = [];
    let i = 0;

    while (i < nums.length) {
        let start = nums[i];

        // Loop hingga menemukan angka yang tidak berurutan
        while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
            i++;
        }

        let end = nums[i];

        // Menambahkan range ke hasil
        if (start === end) {
            result.push(start.toString());
        } else {
            result.push(start + "->" + end);
        }

        i++;
    }

    return result;
};

// Contoh Pengujian
console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // Output: ["0->2","4->5","7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])); // Output: ["0","2->4","6","8->9"]
