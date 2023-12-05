import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', function() {
    const devicesItem = document.querySelectorAll('.content-devices__items .devices-item img');
    const devicesSwiperWrapper = document.querySelector('.devices__swiper-wrapper');
   

    devicesItem.forEach(function(img) {
        const newDeviceSlide = document.createElement('div');
        newDeviceSlide.classList.add('swiper-slide', 'device-slide');

        const newDevicesImage = document.createElement('div');
        newDevicesImage.classList.add('slider-devices');

        const imgDevicesSrc = img.cloneNode(true);
        newDevicesImage.appendChild(imgDevicesSrc);
        newDeviceSlide.appendChild(newDevicesImage);
        devicesSwiperWrapper.appendChild(newDeviceSlide);

    });
});

    new Swiper('.swiper', {
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

