
// function myFunction(x) {
//   x.classList.toggle("change");
//  }


const navBtn = document.querySelector('.container-burger');
const navIcon = document.querySelector('.bar1');
const navIcon2 = document.querySelector('.bar2');
const navIcon3 = document.querySelector('.bar3');
const nav = document.querySelector('.header-menu');
const menuNav = document.querySelector('.menu');
const menuList = document.querySelector('.menu-list')
const menuTitle = document.querySelector('.menu-title')
const navRemove = document.getElementById('#body')

navBtn.onclick = function () {
  navIcon.classList.toggle("change")
  navIcon2.classList.toggle("change")
  navIcon3.classList.toggle("change")
  nav.classList.toggle("click")
  menuNav.classList.toggle("click")
  menuList.classList.toggle("click")
  menuTitle.classList.toggle("click")
  navRemove.classList.remove("click")

}
//  Карусель в виде слайдера в блоке About с фиксированным началом и концом:
const btnLeft = document.querySelector('.vectorLeft');
const btnNext = document.querySelector('.vectorNext');
const img = document.querySelectorAll('.fotoBooks');

// btnNext.onclick = function () {
//   let i = 0;
//   img[i].style.display = 'none';

//   i = i - 1;
//   console.log(img)
//   if (i < 0) {
//     i = img.length - 1;
//   }
//   img[i].style.display = 'block'
// }
