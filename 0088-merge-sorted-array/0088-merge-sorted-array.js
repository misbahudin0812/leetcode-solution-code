/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Pointer untuk posisi akhir elemen di nums1 dan nums2
    let p1 = m - 1; // Posisi elemen terakhir di nums1 yang relevan
    let p2 = n - 1; // Posisi elemen terakhir di nums2
    
    // Pointer untuk posisi akhir di nums1 (gabungan semua elemen)
    let p = m + n - 1;
    
    // Selama masih ada elemen di nums2
    while (p2 >= 0) {
        // Jika nums1 masih memiliki elemen dan elemen di nums1 lebih besar
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1]; // Letakkan elemen nums1 di posisi p
            p1--; // Geser pointer nums1 ke kiri
        } else {
            nums1[p] = nums2[p2]; // Letakkan elemen nums2 di posisi p
            p2--; // Geser pointer nums2 ke kiri
        }
        p--; // Geser pointer gabungan ke kiri
    }
};
