/*=============== SHOW MENU ===============*/

// Selecionar elementos do DOM
const navMenu = document.getElementById('nav__menu'); // Menu de navegação
const navToggle = document.getElementById('nav__toggle'); // Ícone de toggle para abrir o menu em dispositivos móveis
const navClose = document.getElementById('nav__close'); // Ícone de fechar o menu em dispositivos móveis

// Adicionar evento de clique para mostrar o menu ao clicar no ícone de toggle
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Adicionar evento de clique para fechar o menu ao clicar no ícone de fechar
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

// Selecionar todos os links de navegação
const navLinks = document.querySelectorAll('.nav__link'); // NodeList de todos os links de navegação

// Função para fechar o menu móvel ao clicar em um link
const linkAction = () => {
  const navMenu = document.getElementById('nav__menu'); // Menu de navegação
  navMenu.classList.remove('show-menu'); // Remover a classe 'show-menu' para esconder o menu
};

// Iterar sobre todos os links de navegação e adicionar um evento de clique para fechar o menu ao clicar em um link
navLinks.forEach(element => {
  element.addEventListener('click', linkAction);
});


/*=============== ADD BLUR TO HEADER ===============*/

// Função para alterar o estilo do cabeçalho conforme o scroll da página
const addblurHeader = () => {
  const header = document.getElementById("header"); // Cabeçalho

  // Adicionar classe 'scroll-header' ao cabeçalho quando a posição de scroll vertical da página for maior ou igual a 50 pixels
  this.scrollY >= 50 ? header.classList.add('blur-header') 
  : header.classList.remove('blur-header');
}

// Adicionar evento de scroll à janela para acionar a função scrollHeader
window.addEventListener('scroll', addblurHeader);

/*=============== SHOW SCROLL UP ===============*/ 

const scrollup = () => {
  const scrollUp = document.getElementById('scroll-up');

  if (window.scrollY >= 350) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
};

window.addEventListener('scroll', scrollup);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    reset: true,
})

sr.reveal(`.home__data, .explore__data, explore__user, .footer__container`)
sr.reveal(`.home__card`, {delay: 600, distance: '100px', interval: 100})
sr.reveal(`.about__data, .join__image`, {origin: 'right'})
sr.reveal(`.about__image, .join__data`, {origin: 'left'})
sr.reveal(`.popular__card`, {interval: 200})