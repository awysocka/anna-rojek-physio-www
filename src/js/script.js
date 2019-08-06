// ---ABOUT POPUP---

const popupAbout = document.getElementById('popup-about');
const logo = document.getElementById('logo');
const btnMore = document.getElementById('btn-about-more');
const popupAboutContent = document.getElementById('popup-about-content');

// opens about popup
btnMore.onclick = function(e) {
    e.preventDefault();
    popupAbout.classList.add('popup--visible');
};

// closes about popup
popupAbout.onclick = function(e) {
  e.preventDefault();
  popupAbout.classList.remove("popup--visible");
};

// prevent closing popup while clicking on content
popupAboutContent.onclick = function(e) {
  e.stopPropagation();
};


// ---HAMBURGER MENU---

const hamburgerIcon = document.getElementById("hamburger");
const navList = document.getElementById('nav__list');
const navLinks = document.getElementsByClassName("nav__link");

// open and close menu after 'click' on hamburger
hamburgerIcon.onclick = function() {
  hamburgerIcon.classList.toggle("hamburger--active");
  navList.classList.toggle("nav__list--open");
};

// close rwd menu after 'click' link
const closeMenu = function() {
  hamburgerIcon.classList.remove("hamburger--active");
  navList.classList.remove("nav__list--open");
};

for(let navLink of navLinks) {
    navLink.onclick = closeMenu;
}
logo.onclick = closeMenu;


// ---HIGHLIGHT MENU ITEM ON SCROLL---

const mainNavLinks = document.getElementsByClassName("nav__link");
const windowHeight = window.innerHeight;

window.onscroll = function() {
  const fromTop = window.scrollY + windowHeight / 2;

  for(let link of mainNavLinks) {
    const section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("nav__link--current");
    } else {
      link.classList.remove("nav__link--current");
    }
  };
};


// --- MENU CONTACT---

const cityButtons = document.getElementsByClassName("city__header");
const cities = document.getElementsByClassName("city");

// open and close contact section
for(let cityButton of cityButtons) {
  cityButton.onclick = function() {
    const city = cityButton.parentElement;
    const opened = city.classList.contains('city--open');
    for(let city of cities) {
      city.classList.remove('city--open')
    }
    if (!opened) {
      city.classList.add("city--open");
    }
  };
}
