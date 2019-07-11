// ---ABOUT POPUP---

const popupAbout = document.getElementById('popup-about');
const logo = document.getElementById('logo');

// add class 
document.getElementById('btn-about-more').onclick = function(e) {
    e.preventDefault();
    popupAbout.classList.add('popup--visible');
};

// remove class
popupAbout.onclick = function(e) {
  e.preventDefault();
  popupAbout.classList.remove("popup--visible");
};

document.getElementById('popup-about-content').onclick = function(e) {
  // e.preventDefault();
  e.stopPropagation();
};


// ---HAMBURGER MENU---

//hamburger
const hamburgerIcon = document.getElementById("hamburger");
const navList = document.getElementById('nav__list');
const navLinks = document.getElementsByClassName("nav__link");

// open and close menu after 'click' on hamburger
    hamburgerIcon.addEventListener("click", function() {
    hamburgerIcon.classList.toggle("hamburger--active");
    navList.classList.toggle("nav__list--open");
  }
);

// close rwd menu after 'click' link
const closeMenu = function() {
  hamburgerIcon.classList.remove("hamburger--active");
  navList.classList.remove("nav__list--open");
};

for(let navLink of navLinks) {
    navLink.addEventListener("click", closeMenu);
}
logo.onclick = closeMenu;


// ---HIGHLIGHT MENU ITEM ON SCROLL---

const mainNavLinks = document.getElementsByClassName("nav__link");
const windowHeight = window.innerHeight;

window.addEventListener("scroll", event => {
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
});

// MENU CONTACT
const cityButtons = document.getElementsByClassName("city");
const contactList = document.getElementsByClassName('city__containert');

// open and close contact section
  for(let cityButton of cityButtons) {
    cityButton.addEventListener("click", function() {
      const opened = cityButton.classList.contains('city--open');
      for(let cityButton of cityButtons) {
        cityButton.classList.remove('city--open')
      }
      if (!opened) {
        cityButton.classList.add("city--open");
      }
    }
  );
}

