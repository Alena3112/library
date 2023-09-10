
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


const repeat = false;
const noArrows = false;
const noBullets = false;


const container = document.querySelector('.slider-container');
var slide = document.querySelectorAll('.slider-single');
var slideTotal = slide.length - 1;
var slideCurrent = -1;

function initBullets() {
    if (noBullets) {
        return;
    }
    const bulletContainer = document.createElement('div');
    bulletContainer.classList.add('bullet-container')
    slide.forEach((elem, i) => {
        const bullet = document.createElement('div');
        bullet.classList.add('bullet')
        bullet.id = `bullet-index-${i}`
        bullet.addEventListener('click', () => {
            goToIndexSlide(i);
        })
        bulletContainer.appendChild(bullet);
        elem.classList.add('proactivede');
    })
    container.appendChild(bulletContainer);
}

function initArrows() {
    if (noArrows) {
        return;
    }
    const leftArrow = document.createElement('a')
 
    leftArrow.classList.add('slider-left')
   
    leftArrow.addEventListener('click', () => {
        slideLeft();
    })
    const rightArrow = document.createElement('a')

    rightArrow.classList.add('slider-right')

    rightArrow.addEventListener('click', () => {
        slideRight();
    })
    container.appendChild(leftArrow);
    container.appendChild(rightArrow);
}

function slideInitial() {
    initBullets();
    initArrows();
    setTimeout(function () {
        slideRight();
    }, 500);
}

function updateBullet() {
    if (!noBullets) {
        document.querySelector('.bullet-container').querySelectorAll('.bullet').forEach((elem, i) => {
            elem.classList.remove('active');
            if (i === slideCurrent) {
                elem.classList.add('active');
            }
        })
    }
    checkRepeat();
}

function checkRepeat() {
    if (!repeat) {
        if (slideCurrent === slide.length - 1) {
            slide[0].classList.add('not-visible');
            slide[slide.length - 1].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-right').classList.add('not-visible')
                document.querySelector('.slider-left').classList.remove('not-visible')
            }
        }
        else if (slideCurrent === 0) {
            slide[slide.length - 1].classList.add('not-visible');
            slide[0].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-left').classList.add('not-visible')
                document.querySelector('.slider-right').classList.remove('not-visible')
            }
        } else {
            slide[slide.length - 1].classList.remove('not-visible');
            slide[0].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-left').classList.remove('not-visible')
                document.querySelector('.slider-right').classList.remove('not-visible')
            }
        }
    }
}

function slideRight() {
    if (slideCurrent < slideTotal) {
        slideCurrent++;
    } else {
        slideCurrent = 0;
    }

    if (slideCurrent > 0) {
        var preactiveSlide = slide[slideCurrent - 1];
    } else {
        var preactiveSlide = slide[slideTotal];
    }
    var activeSlide = slide[slideCurrent];
    if (slideCurrent < slideTotal) {
        var proactiveSlide = slide[slideCurrent + 1];
    } else {
        var proactiveSlide = slide[0];

    }

    slide.forEach((elem) => {
        var thisSlide = elem;
        if (thisSlide.classList.contains('preactivede')) {
            thisSlide.classList.remove('preactivede');
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.add('proactivede');
        }
        if (thisSlide.classList.contains('preactive')) {
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.remove('proactivede');
            thisSlide.classList.add('preactivede');
        }
    });
    preactiveSlide.classList.remove('preactivede');
    preactiveSlide.classList.remove('active');
    preactiveSlide.classList.remove('proactive');
    preactiveSlide.classList.remove('proactivede');
    preactiveSlide.classList.add('preactive');

    activeSlide.classList.remove('preactivede');
    activeSlide.classList.remove('preactive');
    activeSlide.classList.remove('proactive');
    activeSlide.classList.remove('proactivede');
    activeSlide.classList.add('active');

    proactiveSlide.classList.remove('preactivede');
    proactiveSlide.classList.remove('preactive');
    proactiveSlide.classList.remove('active');
    proactiveSlide.classList.remove('proactivede');
    proactiveSlide.classList.add('proactive');

    updateBullet();
}

function slideLeft() {
    if (slideCurrent > 0) {
        slideCurrent--;
    } else {
        slideCurrent = slideTotal;
    }

    if (slideCurrent < slideTotal) {
        var proactiveSlide = slide[slideCurrent + 1];
    } else {
        var proactiveSlide = slide[0];
    }
    var activeSlide = slide[slideCurrent];
    if (slideCurrent > 0) {
        var preactiveSlide = slide[slideCurrent - 1];
    } else {
        var preactiveSlide = slide[slideTotal];
    }
    slide.forEach((elem) => {
        var thisSlide = elem;
        if (thisSlide.classList.contains('proactive')) {
            thisSlide.classList.remove('preactivede');
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.add('proactivede');
        }
        if (thisSlide.classList.contains('proactivede')) {
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.remove('proactivede');
            thisSlide.classList.add('preactivede');
        }
    });

    preactiveSlide.classList.remove('preactivede');
    preactiveSlide.classList.remove('active');
    preactiveSlide.classList.remove('proactive');
    preactiveSlide.classList.remove('proactivede');
    preactiveSlide.classList.add('preactive');

    activeSlide.classList.remove('preactivede');
    activeSlide.classList.remove('preactive');
    activeSlide.classList.remove('proactive');
    activeSlide.classList.remove('proactivede');
    activeSlide.classList.add('active');

    proactiveSlide.classList.remove('preactivede');
    proactiveSlide.classList.remove('preactive');
    proactiveSlide.classList.remove('active');
    proactiveSlide.classList.remove('proactivede');
    proactiveSlide.classList.add('proactive');

    updateBullet();
}

function goToIndexSlide(index) {
    const sliding = (slideCurrent > index) ? () => slideRight() : () => slideLeft();
    while (slideCurrent !== index) {
        sliding();
    }
}

slideInitial();



// ///////////////////////////////////favorites

// const winter = document.querySelector('#radio-1');
// const spring = document.querySelector('#radio-2');
// const summer = document.querySelector('#radio-3');
// const autumn = document.querySelector('#radio-4');
// const radio = document.querySelectorAll('.form_radio');
// const bookContainer=document.querySelector('.book-item');
// const books=document.querySelector('.book-list');
// const bookSummer=document.querySelector('#summerBook');
// //const bookSummer=document.querySelector('#summerBook');

// summer.onclick =function(){   
   
//     bookContainer.classList.remove("fade_out");
//     bookSummer.classList.add("fade_in"); 
// }

// spring.onclick =function(){
// //bookContainer.classList.remove("fade_out");
// bookSummer.classList.add("fade_in"); 
//     console.log(bookSummer) ; 

// }
// autumn.onclick =function(){   
   
//     bookContainer.classList.toggle("fade_out");
  
// }
// winter.onclick =function(){   
   
//     bookContainer.classList.toggle("fade_out");
  
// }



// function fadeInOut(){
// books.forEach((elem)=>{
//     var thisBooks = elem;
//     if(thisBooks.classList.contains('fade_out')){
//         thisBooks.classList.remove('fade_out');
//         thisBooks.classList.add('fade_in');
//     }
//     if(thisBooks.classList.contains('fade_in')){
//         thisBooks.classList.remove('fade_in');
//         thisBooks.classList.add('fade_out');
//     }
// })
// }

const fadeIn = (el, timeout, display)=> {
    el.style.opacity = 0;
    el.style.display = display || 'block';
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(()=> {el.style.opacity =1;
    }, 10);
};

const fadeOut = (el, timeout) => {
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;
  
    setTimeout(() => {
      el.style.display = 'none';
    }, timeout);
  };

  const block = document.querySelector('.book-item');
const summer = document.querySelector('.form_radio.summer');
const winter = document.querySelector('.form_radio.winter');
const autumn = document.querySelector('.form_radio.autumn');
const spring = document.querySelector('.form_radio.spring');
//const summer = document.getElementById('#radio-3');
let flag = false;
// const winter = document.querySelector('#radio-1');
// const spring = document.querySelector('#radio-2');

// const autumn = document.querySelector('#radio-4');

summer.addEventListener('click', (e) => {
    console.log(block)
  if (!flag) {
    fadeIn(block, 10000, 'grid');
    flag = true;
  } else {
    fadeOut(block, 10000);
    flag = false;
  }
});

winter.addEventListener('click', (e) => {
    if (!flag) {
      fadeIn(block, 10000, 'grid');
      flag = true;
    } else {
      fadeOut(block, 1000);
      flag = false;
    }
  });

 
  autumn.addEventListener('click', (e) => {
    if (!flag) {
      fadeIn(block, 10000, 'grid');
      flag = true;
    } else {
      fadeOut(block, 10000);
      flag = false;
    }
  });

  spring.addEventListener('click', (e) => {
    if (!flag) {
      fadeIn(block, 10000, 'grid');
      flag = true;
    } else {
      fadeOut(block,10000);
      flag = false;
    }
  });

//////////////////register
const btnIcon = document.querySelector('.header-icon');
const register = document.querySelector('.register');
const myProfile =document.querySelector('.myProfile')

btnIcon.onclick = function (){
    register.classList.toggle("activ");
}