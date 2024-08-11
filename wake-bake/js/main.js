(function () {

    // бургер меню
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
    // модалка
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


    // таб
    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {
        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return

        const tapContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tapContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')

    }

    // Аккордион
    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpendItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpendContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')


            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return

            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;


            if (accordionOpendItem && accordionItem != accordionOpendItem) {
                accordionOpendContent.style.maxHeight = null;
                accordionOpendItem.classList.remove('accordion-list__item--opened');
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';

            } else {
                accordionContent.style.maxHeight = null;
            }



        });
    });


    // Слайды галереи

    new Swiper('.gallery__swiper', {

        slidesPerView: 1.5,
        spaceBetween: 15,

        pagination: {
            type: 'fraction',
            el: '.gallery__pagination',
        },
        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {

            601: {
                slidesPerView: 3,
            },

            801: {
                spaceBetween: 32,
            },

            1101: {
                slidesPerView: 4,
            },
        }
    })


    // Слайды орзывы
    new Swiper('.testimonials__swiper', {
        // Optional parameters
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        breakpoints: {

            // 601: {
            //     slidesPerView: 3,
            // },

            901: {
                slidesPerView: 1.5,
            },

            1201: {
                slidesPerView: 2.1,
            },
        }
    });


})()


