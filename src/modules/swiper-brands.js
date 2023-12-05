import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', function() {
    const brandsItem = document.querySelectorAll('.content-brands__items .brands-item img');
    const swiperWrapper = document.querySelector('.brands__swiper-wrapper');
   

    brandsItem.forEach(function(img) {
        const newSlide = document.createElement('div');
        newSlide.classList.add('swiper-slide', 'brand-slide');

        const newImage = document.createElement('div');
        newImage.classList.add('slider-image');

        const imgSrc = img.cloneNode(true);
        newImage.appendChild(imgSrc);
        newSlide.appendChild(newImage);
        swiperWrapper.appendChild(newSlide);

    });
});

    new Swiper('.brands__swiper', {
    direction: 'horizontal',
    loop: 'true',
    scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
},
    breakpoints: {
        320: {
            slidesPerView: 3,
            centeredSlides: true,
            loop: true,
            spaceBetween: 5,  
        },
        480: {
            slidesPerView: 2,
            centeredSlides: true,
            loop: true,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 3,
            centeredSlides: false,
            loop: true,
            spaceBetween: 20,
        },
    }
});
