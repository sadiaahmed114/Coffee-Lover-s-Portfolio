// let menu = document.querySelector('#menubar');
// let mynav = document.querySelector('.navbar');

// menu.onclick = () =>{
//     menu.classList.toggle('fa-times');
//     mynav.classList.toggle('active')
// }
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

let menubar = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');

menubar.addEventListener('click',() => {
  menubar.classList.toggle('bx-x') ;
  navbar.classList.toggle('active') ; 
});

