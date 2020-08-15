export default function initAnimacaoScroll() {
    const sections = document.querySelectorAll('[data-tab="scroll"]');

    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animarScroll() {
            sections.forEach(section => {
                // o getBoundingClientRect() retorna o top, bottom, right, left e outras propriedades do elemento em relação ao window
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;

                if (isSectionVisible) {
                    section.classList.add('ativo');
                }else if(section.classList.contains('ativo')){
                    section.classList.remove('ativo');
                }

            })
        }

         // é bom já inicializar animacao antes de esperar o usuario dar o scroll na pagina.
         animarScroll();
         window.addEventListener('scroll', animarScroll);
 
    }

}