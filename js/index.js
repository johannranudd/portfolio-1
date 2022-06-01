// navbar
const navbar = document.querySelector('.navbar');
// hero section
const emptyDiv = document.querySelector('.empty-div');
const scrollBtn = document.querySelector('.scroll-btn');
const heroTextContainer = document.querySelector('.hero-text');
// projects section
const paragraph = document.querySelector('.paragraph');
const imageContainer = document.querySelector('.image-container');
const images = imageContainer.querySelectorAll('.card');
const projectsHeadline = document.querySelector('.projects-headline');
// about section
const aboutImage = document.querySelector('.about-info img');
const aboutHeader = document.querySelector('#about-section h2');
const aboutParagraph = document.querySelector('#about-section p');
// tech section

// const projectsSection = document.querySelector('#projects-section');
const main = document.querySelector('main');

// eventlisteners
window.addEventListener('scroll', parallaxScroll);
scrollBtn.addEventListener('click', scrollToProjects);

function scrollToProjects() {
  if (window.innerWidth >= 768) {
    window.scroll({
      top: window.innerHeight,
    });
  }
  if (window.innerWidth >= 1200) {
    window.scroll({
      top: window.innerHeight / 2,
    });
  }
}

function parallaxScroll(e) {
  const scroll = window.pageYOffset;

  if (window.innerWidth >= 1200) {
    emptyDiv.style.height = `${scroll}px`;
    main.style.transform = `translate3d(0px, -${scroll}px, 0px)`;
    heroTextContainer.style.marginTop = `${scroll / 120}rem`;
    images.forEach((image) => {
      const position = (window.pageYOffset * image.dataset.rate) / 3;
      image.style.transform = `translate3d(0px, ${position}px, 0px`;
    });
  }
  if (window.innerWidth < 1200) {
    emptyDiv.style.height = `0px`;
    main.style.transform = `translate3d(0px, 0px, 0px)`;
    images.forEach((image) => {
      image.style.transform = `translate3d(0px, 0px, 0px)`;
    });
  }

  if (scroll > 200) {
    projectsHeadline.classList.add('fade-in');
    paragraph.classList.add('fade-in');
    imageContainer.classList.add('fade-in');
  }

  if (scroll > 530) {
    aboutImage.classList.add('fade-in');
    aboutHeader.classList.add('fade-in');
    aboutParagraph.classList.add('fade-in');
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
