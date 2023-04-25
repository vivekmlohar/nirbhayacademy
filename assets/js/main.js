// Javascript for background change when scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
});

// Javascript for faq toggle btns
const faqs = document.querySelectorAll('.faq');


faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');
    
    //faq lightbulb toggle
    
    const icon = faq.querySelector('.faq_icon i');
    if (icon.className === 'fa-regular fa-question') {
      icon.className = 'fa-regular fa-lightbulb'
    }else {
      icon.className = 'fa-regular fa-question'
    }
  });
})

//>>>>> Menu Button Event Listener

const Menu = document.querySelector(".nav_menu");
const Nav = document.querySelector("nav");

const menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle("menu-active");
  Menu.classList.toggle("nav--active");
  Nav.classList.toggle("NavBgColor")
})

// var loader = document.querySelector(".loader");

window.addEventListener('load', () =>{
  document.querySelector(".loader").classList.add("loader-hide");
});
