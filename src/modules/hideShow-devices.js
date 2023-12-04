const toggleButtonTwo = document.querySelector('.toggle-button-two');
const devices = document.querySelectorAll('.devices-item');

let isDevicesHidden;

toggleButtonTwo.addEventListener('click', function () {
    for (let i = 0; i < devices.length; i++) {
        if (isDevicesHidden) {
            devices[i].style.display = (i < 8) ? 'inline-flex' : 'none';
            toggleButtonTwo.innerHTML = 'Показать все';
        } else {
            devices[i].style.display = 'inline-flex';
            toggleButtonTwo.innerHTML = 'Скрыть'; 
        }
    }
    isDevicesHidden = !isDevicesHidden;
});

