export const menu = () => {
    const buttonMenu = document.querySelector('.button_menu'),
        listMenu = document.querySelector('.list_menu'),
        closeMenu = document.querySelector('.list__cross');

    buttonMenu.addEventListener('click', () => {
        let expanded = buttonMenu.getAttribute('aria-expanded') === 'true' || false;
        buttonMenu.setAttribute('aria-expanded', !expanded);
        buttonMenu.classList.toggle('button_menu--open');
        listMenu.classList.add('list_menu--open');
        closeMenu.classList.toggle('list__cross--open');
    });

    closeMenu.addEventListener('click', () => {
        listMenu.classList.remove('list_menu--open');
        buttonMenu.setAttribute('aria-expanded', !expanded);
    });
}
