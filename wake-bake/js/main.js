(function() {
    
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.header__nav-link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opend-menu')) {
            document.body.classList.add('body--opend-menu')
        } else {
            document.body.classList.remove('body--opend-menu')
        }

    }

})()




// (function () {

//     const burgerIcon = document.querySelector('.header__top-inner');
//     const bodyMenu = document.body;
//     const menuToggle = () => {
//         bodyMenu.classList.toggle('body--opend-menu');
//     }

//     burgerIcon.addEventListener('click', event => {
//         if (document.documentElement.clientWidth > 900) return
//         const target = event.target
//         if (target && target.classList.contains('header__nav-link') || target.classList.contains('burger-icon')) {
//             menuToggle()
//         }
//     })

// })()