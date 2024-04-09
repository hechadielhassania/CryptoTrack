// script.ts
$(document).ready(function () {
    $.ajax({
        url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd',
        method: 'GET',
        success: function (data) {
            data.forEach(function (coin) {
                $('#crypto-list').append("\n            <div class=\"col-md-4\">\n              <div class=\"card\">\n                <img src=\"".concat(coin.image, "\" class=\"card-img-top\" alt=\"").concat(coin.name, "\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">").concat(coin.name, "</h5>\n                  <p class=\"card-text\">Price: $").concat(coin.current_price, "</p>\n                </div>\n              </div>\n            </div>\n          "));
            });
        }
    });
});
