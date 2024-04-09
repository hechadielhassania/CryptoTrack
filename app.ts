// app.ts

document.addEventListener("DOMContentLoaded", () => {
  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
    .then(response => response.json())
    .then(data => {
      data.forEach((coin: any) => {
        const cryptoList = document.getElementById('crypto-list');
        if (cryptoList) {
          const formattedPrice = coin.current_price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          });
          cryptoList.innerHTML += `
            <tr>
              <td><img src="${coin.image}" alt="${coin.name}" style="width: 50px; height: auto;"></td>
              <td>${coin.name}</td>
              <td>${coin.symbol.toUpperCase()}</td>
              <td>${formattedPrice}</td>
              <td>${coin.price_change_percentage_24h.toFixed(2)}%</td>
            </tr>
          `;
        }
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});
