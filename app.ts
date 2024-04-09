// script.ts

$(document).ready(() => {
    $.ajax({
      url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd',
      method: 'GET',
      success: (data: any[]) => {
        data.forEach((coin) => {
          $('#crypto-list').append(`
            <div class="col-md-4">
              <div class="card">
                <img src="${coin.image}" class="card-img-top" alt="${coin.name}">
                <div class="card-body">
                  <h5 class="card-title">${coin.name}</h5>
                  <p class="card-text">Price: $${coin.current_price}</p>
                </div>
              </div>
            </div>
          `);
        });
      }
    });
  });
  