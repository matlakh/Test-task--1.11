document.addEventListener('DOMContentLoaded', function(event) {
    const menuBtn = document.querySelector('.menu__btn');
    const blurBlock = document.querySelector('.blur_block');
    const mobileMenuBox = document.querySelector('.menu__box');


    menuBtn.onclick = function() {
        mobileMenuBox.classList.add('menu__box-block');
        blurBlock.classList.add('block');

    };
    blurBlock.onclick = function() {
        blurBlock.classList.remove('block');
        mobileMenuBox.classList.remove('menu__box-block');
    };
})