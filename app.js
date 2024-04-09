// app.ts
document.addEventListener("DOMContentLoaded", function () {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        data.forEach(function (coin) {
            var cryptoList = document.getElementById('crypto-list');
            if (cryptoList) {
                var formattedPrice = coin.current_price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                });
                cryptoList.innerHTML += "\n            <tr>\n              <td><img src=\"".concat(coin.image, "\" alt=\"").concat(coin.name, "\" style=\"width: 50px; height: auto;\"></td>\n              <td>").concat(coin.name, "</td>\n              <td>").concat(coin.symbol.toUpperCase(), "</td>\n              <td>").concat(formattedPrice, "</td>\n              <td>").concat(coin.price_change_percentage_24h.toFixed(2), "%</td>\n            </tr>\n          ");
            }
        });
    })
        .catch(function (error) { return console.error('Error fetching data:', error); });
});
