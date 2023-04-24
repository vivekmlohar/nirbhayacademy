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


/// javascript for open and close menu

const menu = document.querySelector(".nav_menu");
const openBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
const Nav = document.querySelector("nav");

openBtn.addEventListener('click', () => {
  menu.style.top = "4rem";
  closeBtn.style.display = "inline-block";
  openBtn.style.display = "none";
  Nav.style.background = "#005BCE";
})

// declared function of close nav
const closeNav = () => {
  menu.style.top = "-100vh";
  closeBtn.style.display = "none";
  openBtn.style.display = "inline-block";
  
}

// event listener for close btn
closeBtn.addEventListener('click', closeNav);



var loader = document.querySelector(".loader");

window.addEventListener('load', () =>{
  loader.classList.add("loader-hide");
});

//function loaderHids() {
//  loader.classList.add("loader-hide");}