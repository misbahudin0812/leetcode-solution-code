/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid; // Target ditemukan
        } else if (nums[mid] < target) {
            left = mid + 1; // Target ada di kanan
        } else {
            right = mid - 1; // Target ada di kiri
        }
    }

    return left; // Posisi untuk menyisipkan target
};
