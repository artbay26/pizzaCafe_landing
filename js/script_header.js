/*----for Burger----*/
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');

/*---toggle mobile-menu, mobile-menu's items, overflow: hidden---*/
iconMenu.addEventListener('click', function(e) {
    menuBody.classList.toggle("_active");
    iconMenu.classList.toggle("icon-menu_active");
    iconMenu.classList.toggle("_active");
    document.body.classList.toggle("body_lock");
});

/*----for scroll to page----*/
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
});

function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoPage = document.querySelector(menuLink.dataset.goto);
        const gotoPageValue = gotoPage.getBoundingClientRect().top + scrollY -
            document.querySelector('header').offsetHeight
        window.scrollTo({
            top: gotoPageValue,
            behavior: 'smooth'
        });

        e.preventDefault();
        if (iconMenu.classList.contains('_active')) {
            menuBody.classList.remove("_active");
            iconMenu.classList.remove("_active");
            iconMenu.classList.remove("icon-menu_active");
            document.body.classList.remove("body_lock");
        }
    }
}