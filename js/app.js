var burgerButton = document.querySelector(".burgerButton");
var actMainMenu = document.querySelector(".actMainMenu");
var header = document.querySelector('header');
var menueItem = document.querySelectorAll('.actMainMenu li');
var pageScroll = 0;
burgerButton.style.transition = ".6s ease";

burgerButton.addEventListener('click', function () {
    burgerButton.classList.toggle('activeButton');
    actMainMenu.classList.toggle('translateToShow');
    menueItem.forEach(function (name, id) {
        name.style.transition = `${(id * 0.25) + .1}s all ease`;
        name.classList.toggle('translateToShow')
        console.log(name);
    });
});

document.addEventListener('scroll', function () {

    header.style.transition = '.3s ease';

    if (pageScroll < pageYOffset) {
        pageScroll = pageYOffset;
        header.style.boxShadow = '0 0 1rem #b7b7b7';
    } else if (pageScroll > pageYOffset) {
        header.style.backgroundColor = 'white';
        header.style.boxShadow = '0 0 1rem #b7b7b7';
        pageScroll = pageYOffset;
    }

    if (pageYOffset == 0) {
        header.style.backgroundColor = '#f1f1f1';
        header.style.boxShadow = '0 0 0 #b7b7b7';
    }
});