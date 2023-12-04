import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', function() {
    const devicesItems = document.querySelectorAll('.content-devices__items .devices-item');
    const swiperWrapperDevices = document.querySelector('.devices__swiper-wrapper');

    devicesItems.forEach((item) => {
        const clonedItemDevices = document.createElement('div');
        clonedItemDevices.classList.add('swiper-slide');
        clonedItemDevices.innerHTML = item.innerHTML;
        swiperWrapperDevices.appendChild(clonedItemDevices);
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
        clickable: true,
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

/*let swiperTwo = null;

function checkScreenWidthTwo() {
    if (window.innerWidth <= 767 && swiperTwo === null) {
    swiperTwo = new Swiper('#swiper-two', {
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
                centeredSlides: false,
                loop: true,
                spaceBetween: 20,
            },
        }
    });

} else if (window.innerWidth > 767 && swiperTwo !== null) {
    swiperTwo.destroy();
    swiperTwo = null;
}
}

checkScreenWidthTwo();
window.addEventListener('resize',checkScreenWidthTwo);

*/