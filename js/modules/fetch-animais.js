import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
    const secao = document.querySelector('.numeros-grid');

    // OBS: qd usamos async await para tratar erros temos que usar try e catch
    fetchAnimais('./animais-api.json');

    async function fetchAnimais(url) {
        try {
            const animaisResponse = await fetch(url);
            const animaisJson = await animaisResponse.json();
            animaisJson.forEach(animal => createAnimal(animal));
            initAnimaNumeros();
        } catch (erro) {
            console.log(erro);
        }
    }

    function createAnimal(animal) {
        secao.insertAdjacentHTML('beforeend', `
                <div class="numero-animal">
                            <h3>${animal.especie}</h3>
                    <span data-numero>${animal.total}</span>
                </div>
        `);
    }

}



