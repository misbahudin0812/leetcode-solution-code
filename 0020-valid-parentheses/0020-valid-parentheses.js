/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    // Stack untuk melacak tanda kurung yang belum ditutup
    const stack = [];
    // Objek untuk mencocokkan pasangan tanda kurung
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Iterasi melalui setiap karakter dalam string
    for (const char of s) {
        // Jika karakter adalah tanda kurung penutup
        if (char in brackets) {
            // Periksa apakah tanda kurung penutup memiliki pasangan yang sesuai di atas stack
            if (stack.length > 0 && stack[stack.length - 1] === brackets[char]) {
                stack.pop(); // Pasangan ditemukan, hapus dari stack
            } else {
                return false; // Tidak valid jika pasangan tidak ditemukan
            }
        } else {
            // Jika karakter adalah tanda kurung pembuka, tambahkan ke stack
            stack.push(char);
        }
    }

    // String valid jika stack kosong setelah semua iterasi
    return stack.length === 0;
};
