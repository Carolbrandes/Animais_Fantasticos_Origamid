export default class Accordion {
    constructor(list){
        this.accordionList =  document.querySelectorAll(list);
        this.activeClass = 'ativo';
    }

    toggleAccordion(item) {
        item.classList.toggle(this.activeClass);
        item.nextElementSibling.classList.toggle(this.activeClass);
    }

    // add os eventis ao accordion
    addAcordionEvent(){
        this.accordionList.forEach(item => {
            item.addEventListener('click', () => this.toggleAccordion(item));
        });
    }

    // iniciar funcao
    init(){
        if (accordionList.length) {
            this.toggleAccordion(this.accordionList[0]); /* ativar primeiro item*/
            this.addAcordionEvent(); 
        }
    }
}