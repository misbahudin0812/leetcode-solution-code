/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
    const n = nums.length;
    const marked = new Array(n).fill(false); // Array untuk menandai elemen yang sudah diproses
    let score = 0;

    // Buat array dari indeks dan nilai untuk diurutkan berdasarkan nilai
    const indexedNums = nums.map((value, index) => ({ value, index }));
    indexedNums.sort((a, b) => a.value - b.value || a.index - b.index);

    for (const { value, index } of indexedNums) {
        // Jika elemen belum ditandai, tambahkan nilainya ke skor dan tandai elemen terkait
        if (!marked[index]) {
            score += value;
            marked[index] = true;
            if (index > 0) marked[index - 1] = true; // Tandai elemen kiri jika ada
            if (index < n - 1) marked[index + 1] = true; // Tandai elemen kanan jika ada
        }
    }

    return score;
};

// Contoh penggunaan
const nums1 = [2, 1, 3, 4, 5, 2];
console.log(findScore(nums1)); // Output: 7

const nums2 = [2, 3, 5, 1, 3, 2];
console.log(findScore(nums2)); // Output: 5
