initTabNav();
initAccordion();



// para fazer a navegacao entre a img dos animais e o texto referente a cada animal
function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    // só será executado se os elementos existirem na pagina
    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            removeActiveTab(tabContent);
            tabContent[index].classList.add('ativo');
        }

        function removeActiveTab(element) {
            element.forEach(element => element.classList.remove('ativo'));
        }

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


function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const ativo = 'ativo';

    if (accordionList.length) {
        accordionList[0].classList.toggle(ativo);
        accordionList[0].nextElementSibling.classList.toggle(ativo);
        accordionList.forEach(item => {
            item.addEventListener('click', activeAccordion);
        });

        function activeAccordion() {
            this.classList.toggle(ativo);
            this.nextElementSibling.classList.toggle(ativo);
        }
    }
}