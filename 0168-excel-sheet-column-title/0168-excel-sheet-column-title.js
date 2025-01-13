/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = '';
    while (columnNumber > 0) {
        columnNumber--; // Shift index to 0-based
        const char = String.fromCharCode((columnNumber % 26) + 'A'.charCodeAt(0));
        result = char + result; // Tambahkan di depan
        columnNumber = Math.floor(columnNumber / 26);
    }
    return result;
};
