const headerDiv = document.querySelector('.header');
const logo = document.querySelector('.logo_img');

const showHeaderAnimation = (isVisible) => {
    gsap.to(headerDiv, {
        duration: 0.2,
        height: isVisible ? '100px' : '70px'
    });
    gsap.to(logo, {
        width:isVisible?'70px':'55px',
        duration: 1
    });
}
window.addEventListener('scroll', () => {
    if (scrollY > 0 && window.innerWidth > 555) {
        showHeaderAnimation(false);
    } else if (scrollY === 0 && window.innerWidth > 555) {
        showHeaderAnimation(true);
    }
});

headerDiv.onmouseover = () => {
    if(window.innerWidth > 555){
        showHeaderAnimation(true);
    }
}
headerDiv.onmouseleave = () => {
    if (scrollY > 0 && window.innerWidth > 555) {
        showHeaderAnimation(false);
    }
}

