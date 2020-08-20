import outsideClick from './outside-click.js';

export default function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const eventos = ['click', 'touchstart'];
    function openMenu(event) {
        menuList.classList.add('active');
        menuButton.classList.add('active');
        // qd clicar fora da menuList o menu vai ser fechado
        outsideClick(menuList, eventos, () => {
            menuList.classList.remove('active');
            menuButton.classList.remove('active');
        })
    }

    if (menuButton) {
        eventos.forEach(userEvent => menuButton.addEventListener(userEvent, openMenu));
    }
}



