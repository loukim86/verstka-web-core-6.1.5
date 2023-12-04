const toggleButton = document.querySelector('.toggle-button');
const brands = document.querySelectorAll('.brands-item');

let isHidden;

toggleButton.addEventListener('click', function () {
    for (let i = 0; i < brands.length; i++) {
        if (isHidden) {
            brands[i].style.display = (i < 8) ? 'inline-flex' : 'none';
            toggleButton.innerHTML = 'Показать все';
        } else {
            brands[i].style.display = 'inline-flex';
            toggleButton.innerHTML = 'Скрыть'; 
        }
    }
    isHidden = !isHidden;
});

