const hideShowButoon = document.querySelector('.read-more');
const hideShowText = document.querySelectorAll('.content-text-hidden');

let isTextHidden = true;

hideShowButoon.addEventListener('click', function () {
    isTextHidden = !isTextHidden;
    hideShowText.forEach(text => {
        if (isTextHidden) {
            text.style.opacity = '0';
        } else {
            text.style.opacity = '1';
        }
    });
    hideShowButoon.textContent = isTextHidden ? 'Читать дальше' :  'Скрыть';
   
 });

 