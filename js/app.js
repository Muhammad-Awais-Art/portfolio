// var header = document.querySelector('header .main');
// var pageScroll = 0
(function() {
    var burgerButton = document.querySelector(".burgerButton");
    var fakeMainMenu = document.querySelector(".fakeMainMenu");
    var bodyClone = document.querySelector(".bodyClone");
    fakeMainMenu.style.transition = '.5s ease';
    
    burgerButton.addEventListener('click', function () {
        burgerButton.classList.toggle('activeButton');
        fakeMainMenu.classList.toggle('translateToShow');
        // bodyClone.style.overflow = "hidden";
        if (bodyClone.style.overflow == "hidden") {
            bodyClone.style.overflow = "visible";
            bodyClone.style.overflowX = "hidden";
        } else if (bodyClone.style.overflowX == "hidden") {
            bodyClone.style.overflowX = "visible";
            bodyClone.style.overflow = "hidden";
        }
    });
})();


// document.addEventListener('scroll', function(){
//     // pageScroll = pageYOffset;

//     header.style.transition = '.3s ease';

//     if(pageScroll<pageYOffset) {
//         header.style.transform = 'translateY(-100%)';
//         pageScroll = pageYOffset;
//     } else if (pageScroll>pageYOffset) {
//         header.style.transform = 'translateY(0)';
//         header.style.backgroundColor = 'white';
//         header.style.boxShadow = '0 0 1rem #b7b7b7';
//         pageScroll = pageYOffset;
//     }
    
//     if (pageYOffset == 0) {
//         header.style.backgroundColor = '#f1f1f1';
//         header.style.boxShadow = '0 0 0 #b7b7b7';
//     }
// });