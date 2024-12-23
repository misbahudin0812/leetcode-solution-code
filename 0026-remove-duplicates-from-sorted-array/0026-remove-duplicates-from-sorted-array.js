/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    let k = 0; // Pointer untuk menghitung jumlah elemen unik
    for (let i = 0; i < nums.length; i++) {
        // Jika elemen saat ini berbeda dari elemen terakhir yang ditambahkan
        if (i === 0 || nums[i] !== nums[k - 1]) {
            nums[k] = nums[i]; // Salin elemen unik ke posisi berikutnya
            k++; // Tambahkan panjang array unik
        }
    }
    return k; // Kembalikan jumlah elemen unik
};
