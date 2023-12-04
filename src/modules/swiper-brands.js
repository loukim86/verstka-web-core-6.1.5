import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', function() {
    const brandsItems = document.querySelectorAll('.content-brands__items .brands-item');
    const swiperWrapper = document.querySelector('.brands__swiper-wrapper');

    brandsItems.forEach((item) => {
        const clonedItem = document.createElement('div');
        clonedItem.classList.add('swiper-slide');
        clonedItem.innerHTML = item.innerHTML;
        swiperWrapper.appendChild(clonedItem);
    });
});

const mySwiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: 'true',
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            centeredSlides: true,
            loop: true,
            spaceBetween: 10,  
        },
        480: {
            slidesPerView: 2,
            centeredSlides: true,
            loop: true,
            spaceBetween: 16,
        },
        640: {
            slidesPerView: 3,
            centeredSlides: true,
            loop: true,
            spaceBetween: 20,
        },
    }
});
/*let swiper = null;

function checkScreenWidth() {
    if (window.innerWidth <= 767 && swiper === null) {
    swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
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
                spaceBetween: 0,
            },
            640: {
                slidesPerView: 2,
                centeredSlides: true,
                loop: true,
                spaceBetween: 20,
            },
        }
    });

} else if (window.innerWidth > 767 && swiper !== null) {
    swiper.destroy();
    swiper = null;
}
}

checkScreenWidth();
window.addEventListener('resize',checkScreenWidth);
*/
