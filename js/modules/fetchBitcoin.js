export default function initFetchBitcoin() {
   async function fetchBitcoin(url) {
      try {
         const response = await fetch(url)
         const bitcoin = await response.json()
         const btcPrice = document.querySelector(".bitcoin")
         btcPrice.innerText = (100 / bitcoin.BRL.buy).toFixed(6)
      } catch (error) {
         console.log(error);
      }
   }

   fetchBitcoin("https://blockchain.info/ticker")
}