export const menu = () => {
    const buttonMenu = document.querySelector('.button_menu'),
        listMenu = document.querySelector('.list_menu'),
        closeMenu = document.querySelector('.list__cross');

    buttonMenu.addEventListener('click', () => {
        let expanded = buttonMenu.getAttribute('aria-expanded') === 'true' || false;
        buttonMenu.setAttribute('aria-expanded', !expanded);
        buttonMenu.classList.add('button_menu--open');
        listMenu.classList.add('list_menu--open');
        closeMenu.classList.add('list__cross--open');
    });

    closeMenu.addEventListener('click', () => {
        let expanded = buttonMenu.getAttribute('aria-expanded') === 'true' || false;
        buttonMenu.setAttribute('aria-expanded', !expanded);
        buttonMenu.classList.remove('button_menu--open');
        listMenu.classList.remove('list_menu--open');
        closeMenu.classList.remove('list__cross--open');
    });
}
