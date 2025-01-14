/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // Inisialisasi variabel kandidat mayoritas dan hitungan
    let candidate = null; // Elemen yang akan diuji sebagai mayoritas
    let count = 0; // Hitungan untuk kandidat saat ini

    // Iterasi melalui semua elemen dalam array
    for (let num of nums) {
        // Jika hitungan 0, tetapkan kandidat baru
        if (count === 0) {
            candidate = num; // Kandidat adalah elemen saat ini
        }
        // Jika elemen sama dengan kandidat, tambahkan hitungan
        // Jika berbeda, kurangi hitungan
        count += (num === candidate) ? 1 : -1;
    }

    // Pada akhir iterasi, 'candidate' akan menjadi elemen mayoritas
    return candidate;
};
