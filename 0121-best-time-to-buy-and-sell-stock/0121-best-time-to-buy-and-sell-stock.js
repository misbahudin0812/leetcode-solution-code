/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity; // Menyimpan harga minimum yang ditemukan sejauh ini
    let maxProfit = 0; // Menyimpan keuntungan maksimum

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price; // Perbarui harga minimum jika ditemukan harga yang lebih kecil
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice; // Perbarui keuntungan maksimum jika ada keuntungan yang lebih besar
        }
    }

    return maxProfit;
};
