/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
    let k = 0; // Pointer untuk elemen yang tidak sama dengan val

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Pindahkan elemen ke posisi k
            k++;
        }
    }

    return k; // Jumlah elemen yang tidak sama dengan val
};
