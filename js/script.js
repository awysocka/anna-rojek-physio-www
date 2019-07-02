const popupAbout = document.getElementById('popup-about');

// dodawanie klasy 
document.getElementById('btn-about-more').onclick = function(e) {
    e.preventDefault();
    popupAbout.classList.add('popup--visible');
};

// usuwanie klasy
popupAbout.onclick = function(e) {
  e.preventDefault();
  popupAbout.classList.remove("popup--visible");
};

document.getElementById('popup-about-content').onclick = function(e) {
  e.preventDefault();
  e.stopPropagation();
};

//hamburger
const hamburgerIcon = document.getElementById("hamburger");
const navList = document.getElementById('nav__list');
const navLinks = document.getElementsByClassName("nav__link");

// otwarcie i zamknięcie menu po kliknięciu w ikonkę hamburgera
hamburgerIcon.addEventListener("click", function() {
    hamburgerIcon.classList.toggle("hamburger--active");
    navList.classList.toggle("nav__list--open");
  }
);

// zamknięcie responsive menu po kliknięciu w link
for(let navLink of navLinks) {
    navLink.addEventListener("click", function() {
        hamburgerIcon.classList.remove("hamburger--active");
        navList.classList.remove("nav__list--open");
      }
    );
}
