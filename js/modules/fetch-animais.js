import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
    const secao = document.querySelector('.numeros-grid');

    fetchAnimais('./animais-api.json');

    async function fetchAnimais(url) {
        const animaisResponse = await fetch(url);
        const animaisJson = await animaisResponse.json();

        animaisJson.forEach(animal => createAnimal(animal));

        initAnimaNumeros();
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



