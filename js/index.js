const navbar = document.querySelector('.navbar');
const paragraph = document.querySelector('.paragraph');
const imageContainer = document.querySelector('.image-container');
const images = imageContainer.querySelectorAll('.card');
const emptyDiv = document.querySelector('.empty-div');
const scrollBtn = document.querySelector('.scroll-btn');
const projectsHeadline = document.querySelector('.projects-headline');
const projectsSection = document.querySelector('#projects-section');

// eventlisteners
window.addEventListener('scroll', parallaxScroll);
scrollBtn.addEventListener('click', scrollToProjects);
window.SmoothScrollOptions = { animationTime: 1000 };

function scrollToProjects() {
  window.scroll({
    top: window.innerHeight * 0.3,
  });
}

function parallaxScroll(e) {
  if (window.innerWidth >= 1200) {
    const scroll = window.pageYOffset * 2;
    emptyDiv.style.height = `${scroll}px`;
    scrollBtn.style.transform = `translate3d(0px, -${scroll}px, 0px)`;
    projectsHeadline.style.transform = `translate3d(0px, -${scroll}px, 0px)`;
    projectsSection.style.transform = `translate3d(0px, -${scroll}px, 0px)`;
    images.forEach((image, index) => {
      const position = window.pageYOffset * image.dataset.rate;
      //   const yPosition = index * 100;
      image.style.transform = `translate3d(0px, ${position}px, 0px`;
    });
  } else if (window.innerWidth < 1200) {
    emptyDiv.style.height = `0px`;
    scrollBtn.style.transform = `translate3d(0px, 0px, 0px)`;
    projectsHeadline.style.transform = `translate3d(0px, 0px, 0px)`;
    projectsSection.style.transform = `translate3d(0px, 0px, 0px)`;
    images.forEach((image) => {
      image.style.transform = `translate3d(0px, 0px, 0px)`;
    });
  }
}

//**************** */
//
//
// *mobile menu variables and functionality
//
//
const mobileMenu = document.querySelector('.mobile-menu');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('show-menu');
  menuBtn.classList.toggle('menu-is-open');
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && mobileMenu.className.includes('show-menu')) {
    mobileMenu.classList.remove('show-menu');
    menuBtn.classList.remove('menu-is-open');
  }
});
