import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const mySwiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: 'true',
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            centeredSlides: true,
            loop: true,
            spaceBetween: 0,  
        },
        480: {
            slidesPerView: 2,
            centeredSlides: true,
            loop: true,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 3,
            centeredSlides: true,
            loop: true,
            spaceBetween: 20,
        },
    }
});