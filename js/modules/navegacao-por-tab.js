export default function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');

    function activeTab(index) {
        removeActiveTab(tabContent);
        tabContent[index].classList.add('ativo');
    }

    function removeActiveTab(element) {
        element.forEach(element => element.classList.remove('ativo'));
    }

    // só será executado se os elementos existirem na pagina
    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
        // OBS: Do jeito abaixo não iria funcionar, não podemos passar no addEventListener a função sendo executada, colocando os parentesis, dessa forma -> activeTab(index)
        // tabMenu.forEach((itemMenu, index) => {
        //     itemMenu.addEventListener('click', activeTab(index))
        // });
    }
}