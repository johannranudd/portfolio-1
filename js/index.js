const navbar = document.querySelector('.navbar');
const paragraph = document.querySelector('.paragraph');
const imageContainer = document.querySelector('.image-container');
const images = imageContainer.querySelectorAll('.card');
const emptyDiv = document.querySelector('.empty-div');
const scrollBtn = document.querySelector('.scroll-btn');
// const projectsHeadline = document.querySelector('.projects-headline');
// const projectsSection = document.querySelector('#projects-section');
const main = document.querySelector('main');
const aboutImage = document.querySelector('.about-info img');
const aboutHeader = document.querySelector('#about-section h2');
const aboutParagraph = document.querySelector('#about-section p');

// eventlisteners
window.addEventListener('scroll', parallaxScroll);
scrollBtn.addEventListener('click', scrollToProjects);

function scrollToProjects() {
  window.scroll({
    top: window.innerHeight * 0.3,
  });
}

function parallaxScroll(e) {
  const scroll = window.pageYOffset;
  //   console.log(scroll);

  if (window.innerWidth >= 1200) {
    emptyDiv.style.height = `${scroll}px`;
    main.style.transform = `translate3d(0px, -${scroll}px, 0px)`;
    images.forEach((image) => {
      const position = (window.pageYOffset * image.dataset.rate) / 3;
      //   const yPosition = index * 100;
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

  if (scroll > 550) {
    aboutImage.classList.add('fade-in');
    aboutHeader.classList.add('fade-in');
    aboutParagraph.classList.add('fade-in');
    console.log('540+');
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
