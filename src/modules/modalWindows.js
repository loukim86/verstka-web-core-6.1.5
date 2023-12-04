document.addEventListener('DOMContentLoaded', function() {
    const modalCallButton = document.querySelectorAll('#call');
    const modalCallWindow = document.querySelector('.modal-window-cover');
    const modalCloseButton = document.querySelectorAll('#close');
    const modalBackground = document.querySelector('.modal-window__background');
    const modalFeedbackButton = document.querySelectorAll('#feedback');
    const modalFeedbackWindow = document.querySelector('.feedback-cover');
    const feedbackBackground = document.querySelector('.feedback__background');

    modalCallButton.forEach(callButton => {
        callButton.addEventListener('click', function() {
            modalCallWindow.style.display = 'block';
        });
    });

    modalCloseButton.forEach(closeButton => {
    closeButton.addEventListener('click', function() {
        modalCallWindow.style.display = 'none';

    });
});

modalBackground.addEventListener('click', function(event) {
    if (event.target === modalBackground) {
        modalCallWindow.style.display = 'none';
    }
});

modalFeedbackButton.forEach(chatButton => {
    chatButton.addEventListener('click', function() {
        modalFeedbackWindow.style.display = 'block';
    });
   });

   modalCloseButton.forEach(closeButton => {
    closeButton.addEventListener('click', function() {
        modalFeedbackWindow.style.display = 'none';
    });
   });

   feedbackBackground.addEventListener('click', function(event) {
    if (event.target === feedbackBackground) {
        modalFeedbackWindow.style.display = 'none';
    }
   });
});

document.addEventListener('DOMContentLoaded', function() {
   const buttonBurger= document.getElementById('burger');
   const menu = document.querySelector('.nav-menu');
   const closeMenuButton = document.querySelector('.nav-menu-button');
   const menuBackground = document.querySelector('.nav-menu__background');
   
   buttonBurger.addEventListener('click', function() {
    menu.style.top = '0';
    menuBackground.style.opacity = '1';
    menuBackground.style.zIndex = '100';
});

closeMenuButton.addEventListener('click', function() {
    menu.style.top = '-100%';
    menuBackground.style.opacity = '0';
    menuBackground.style.zIndex = '0';
});

function toggleMenu() {
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        menuBackground.style.opacity = '1';
        menuBackground.style.zIndex = '100';
    }
}
 
function closeMenu() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
          menuBackground.style.opacity = '0';
          menuBackground.style.zIndex = '0';
    }
}
if (window.matchMedia('(min-width:768px)').matches) { 
    buttonBurger.addEventListener('click', toggleMenu); 
     closeMenuButton.addEventListener('click', closeMenu);
}

});


