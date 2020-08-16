export default function initFetchBitcoin() {
    fetch('https://blockchain.info/ticker')
        .then(response => response.json())
        .then(json => {
            const btcPreco = document.querySelector('.btc-preco');
            btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4); /* aqui estamos pegando 1000 reais equivalente ao bitcoin*/
        })
        .catch(erro => console.log(Error(erro)));
}

