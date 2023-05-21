"use strict";
/*----burger-----*/

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const header = document.querySelector('.header');
const body = document.body;

function burgerMenu (event) {
    if (event.target.closest('.header__burger')) {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        body.classList.toggle('_active');
        header.classList.toggle('_active');

    };
}

document.addEventListener('click', burgerMenu);




//об'єктам які будуть мати класс _anim-items буде додаватись класс _active

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animFromPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight) {
                animFromPoint = window.innerHeight - window.innerHeight / animStart;
            };

            if ((scrollY > animItemOffset - animFromPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active-anim');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active-anim');
                };
            };
            
        };
    };
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    };
    animOnScroll()
}












/*----slider-----*/

const swiper = new Swiper('.slider-image', {
    /*  ------стрілки---------
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    */



    /*--------булети------*/

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets', 
        clickable : true,

        /*-----динамічні булети---*/
        dynamicBullets: false,
    },


    /*-----можливість перетягувати на ПК---*/
    simulateTouch: true,

    /*-----курсор перетягування------*/
    grabCursor: false,




    /* -----управління колесом миші----
        mousewheel: {
            /--в яку сторону--/
            invert: true,
        },
    */


    
    /*--кількість слайдів для показу---*/
    slidesPerView: 1,
    
    /*--кількість пролистуємих слайдів слайдів---*/
    slidesPerGroup: 1,



    /*-----відступ між слайдами-----*/
    spaceBetween: 0,




    /*-----безкінечний слайер-----*/
    loop: true,

    /*------вільний режим--------*/
    freeMode: false,




    /*--------брекпоінти---------*/
    /*
    breakpoints: {
        450: {
            slidesPerView: 2,
        },

        767: {
            slidesPerView: 3,
        },

        992: {
            slidesPerView: 4,
        },

        1100: {
            slidesPerView: 5,
        },
    },  
    */
   autoHeight: true,
})

/*------------валадація форми------------*/

const mainForm = document.forms.mainForm;
const mainInput =  mainForm.mainInput;

mainForm.addEventListener('submit', function (event) {
    if (emailTest(mainInput)) {
        mainInput.classList.add('_error')
        event.preventDefault();
    };
});

function emailTest(input) { 
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}; 

 mainForm.addEventListener('focusout', function (event) {
    mainInput.classList.remove('_error')
});



/*------------placeholder-----------*/

mainInput.addEventListener('focus', event => {
    mainInput.placeholder = '';
});

mainInput.addEventListener('blur', event => {
    mainInput.placeholder = 'enter your email...';
});






