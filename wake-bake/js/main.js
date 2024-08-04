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

const btnOpen = document.querySelector('.about__img-button')
const modal = document.querySelector('.modal')
const bodyFixed = document.body


const modalClose = () => {
    modal.classList.remove('modal--opend')
    bodyFixed.classList.remove('body--opend-modal')
}

const modalOpen = () => {
    modal.classList.add('modal--opend')
    bodyFixed.classList.add('body--opend-modal')
} 


btnOpen.addEventListener('click', modalOpen)

modal.addEventListener('click', event => {
    event.preventDefault()
    const target = event.target
    if (target.closest('.modal__close') || target.classList.contains('modal--opend')) {
        modalClose()      
    } else {
        return
    }
})
document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal.classList.contains('modal--opend')) {
        modalClose()
    }
})

})()


