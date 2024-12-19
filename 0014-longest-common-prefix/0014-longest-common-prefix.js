/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""; // Jika array kosong
    
    let prefix = strs[0]; // Ambil string pertama sebagai prefix awal
    
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) { 
            // Kurangi panjang prefix hingga cocok
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return ""; // Jika kosong, tidak ada prefix
        }
    }
    
    return prefix;
};
