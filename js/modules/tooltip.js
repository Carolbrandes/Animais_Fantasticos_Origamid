export default function initTooltip() {

    const tooltips = document.querySelectorAll('[data-tooltip]');

    tooltips.forEach(item => item.addEventListener('mouseover', onMouseOver));

    function onMouseOver(event) {
        const tooltipBox = criarTooltipBox(this);

        // qd tirarmos o mouse do elemento ele vai remover o tooltipbox
        // ao inves de passarmos a onmouseleave como funcao vamos passar como objeto que vai ter o metodo handleEvent e ai funcao sera executada. O nome tem que ser handleEvent se nao for esse nome nao vai funcionar.
        onMouseMove.tooltipBox = tooltipBox;
        this.addEventListener('mousemove', onMouseMove);


        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this; 
        this.addEventListener('mouseleave', onMouseLeave);

    }

    const onMouseLeave = {
        handleEvent() {
            this.tooltipBox.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave);
            this.element.removeEventListener('mouseleave', onMouseMove);
        }
    }

    const onMouseMove = {
        handleEvent(event) {
            this.tooltipBox.style.top = event.pageY + 20 + 'px';
            this.tooltipBox.style.left = event.pageX + 20 + 'px';
        }
    }

    function criarTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        return tooltipBox;
    }
}






