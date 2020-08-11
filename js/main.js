initTabNav();
initAccordion();
initScrollSuave();



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

// accordion para section faq
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

// navegacao do menu
function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    linksInternos.forEach(link => link.addEventListener('click', scrollToSection));

    function scrollToSection(event) {
        event.preventDefault();
        // se colocarmos event.currentTarget.href vai vir a url completa, já com getAttribute vai vir só o #...
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        // o scrollIntoView já traz a posicao do elemento
        // o scrollIntoView so funciona no chrome e no firefox
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start' /* alinhe o bloco ao inicio */
        });

        // forma alternativa  - para pegarmos onde começa cada sessao usamos o offsetTop
        // const sectionTop = section.offsetTop;
        // o window.scrollTo recebendo dois params, o quanto queremos mover para o eixo e para o eixo y.
        // window.scrollTo({
        //     top: sectionTop,
        //     behavior: 'smooth'
        // });

    }
}


