const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/*===== MENU SHOW ON SMALLER DEVICES =====*/
/* See if constant exists*/
if (navToggle) {
   navToggle.addEventListener('click', () =>{
     navMenu.classList.add('show_menu')
   }) 
}

/*===== MENU HIDDEN ON SMALLER DEVICES =====*/
/* See if constant exists */
if (navClose) {
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show_menu')
    })
}


/*========= Remove navigation bar on smaller devices ========*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('.nav_menu')
    navMenu.classList.remove(show_menu)
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=======Skills Toggle BTN ============*/
const skillsContent = document.getElementsByClassName('skills_content')
const skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
  let itemClass = this.parentNode.className

  for(i = 0; i < skillsContent.length; i++){
    skillsContent[i].className = 'skills_content skills_close'
  }
  if (itemClass === 'skills_content skills_close') {
    this.parentNode.className = 'skills_content skills_open'
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills)
})

/*======== Dinamic Type========*/

const text = 'Front-End Web Developer'
let textCount = 0;
function dinamicType(){
  if(textCount < text.length){
    document.getElementById("dinamic-text").innerHTML += text.charAt(textCount);
    textCount++;
    setTimeout(dinamicType, 100)
  }
}
dinamicType()



/*=========== SHOW BACK TO TOP BUTTON  ============*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up')
  if (this.scrollY >= 560) {
    scrollUp.classList.add('show_scroll')
  } else {
    scrollUp.classList.remove('show_scroll')
  }
}
window.addEventListener('scroll', scrollUp) 
/*=============== DARK LIGHT THEME ================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//Previously selected topic(if was selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})


