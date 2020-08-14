export default function initScrollSuave() {
    const linksInternos = document.querySelectorAll('[data-menu] a[href^="#"]');
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