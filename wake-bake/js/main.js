


(function () {

    const burgerIcon = document.querySelector('.header__top-inner');
    const bodyMenu = document.body;
    const menuToggle = () => {
        bodyMenu.classList.toggle('body--opend-menu');
    }

    burgerIcon.addEventListener('click', event => {
        const target = event.target
        if (target && target.classList.contains('header__nav-link') || target.classList.contains('burger-icon')) {
            menuToggle()
        }
    })
})()