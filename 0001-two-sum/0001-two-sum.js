/**
 * Temukan dua angka yang jumlahnya sama dengan target
 * @param {number[]} nums - Array angka
 * @param {number} target - Nilai target
 * @return {number[]} - Indeks dua angka yang jumlahnya sama dengan target
 */
var twoSum = function(nums, target) {
    // Buat hash map kosong untuk menyimpan angka yang sudah dilihat
    const seenNumbers = new Map();
    
    // Lakukan loop pada setiap angka dalam array
    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i]; // Angka saat ini
        const neededNumber = target - currentNumber; // Angka yang kita butuhkan untuk mencapai target
        
        // Cek apakah angka yang kita butuhkan sudah ada di hash map
        if (seenNumbers.has(neededNumber)) {
            // Jika ditemukan, kembalikan indeks pasangan angka
            return [seenNumbers.get(neededNumber), i];
        }
        
        // Jika tidak ditemukan, simpan angka saat ini ke hash map
        seenNumbers.set(currentNumber, i); // Key: angka, Value: indeks
    }
    
    // Tidak perlu return lain, karena soal menjamin selalu ada solusi
};
