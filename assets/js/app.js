
// ===========================SCROLL SECTION JS START===========================
let btnScroll = document.querySelector('.scroll_btn');
window.addEventListener('scroll', function (){
    if(window.scrollY >250){
        btnScroll.classList.add('open');
    }
    else{
        btnScroll.classList.remove('open');
    }
})
// ===========================SCROLL SECTION JS END=============================

// window.onscroll= function(){sticy_fun()};
// var stickyTop =document.querySelector(".img_contact")
// // var spach = stickyTop.offsetTop;
// // alert(window.pageYOffset)
// function sticy_fun (){
//     if(window.pageYOffset > 150){
//         stickyTop.classList.add('sticky')
//     }
//     // else if(window.pageYOffset < 390){
//     //     stickyTop.classList.remove('sticky')

//     // }
//     else{
//         stickyTop.classList.remove('sticky')
        
//     }

// }




// _________________________==========FAQ SECTION JS START_________________________==========
var plusBtn = document.querySelector('.plus_btn');
var minusBtn = document.querySelector('.minus_btn');
var ansBtn = document.querySelector('.ans_btn')
var ansBtn2 = document.querySelector('.ans_btn2')
var plusBtn2 = document.querySelector('.plus_btn2');
var minusBtn2 = document.querySelector('.minus_btn2');
var ansBtn3 = document.querySelector('.ans_btn3')
var plusBtn3 = document.querySelector('.plus_btn3');
var minusBtn3 = document.querySelector('.minus_btn3');
var ansBtn4 = document.querySelector('.ans_btn4')
var plusBtn4 = document.querySelector('.plus_btn4');
var minusBtn4 = document.querySelector('.minus_btn4');


plusBtn.addEventListener('click', function(){
    ansBtn.classList.add('show');
    minusBtn.classList.add('show');
    plusBtn.classList.add('hide');

    ansBtn2.classList.remove('show');
    minusBtn2.classList.remove('show');
    plusBtn2.classList.remove('hide');

    ansBtn3.classList.remove('show');
    minusBtn3.classList.remove('show');
    plusBtn3.classList.remove('hide');

    ansBtn4.classList.remove('show');
    minusBtn4.classList.remove('show');
    plusBtn4.classList.remove('hide');
})

minusBtn.addEventListener('click', function(){
    ansBtn.classList.remove('show');
    minusBtn.classList.remove('show');
    plusBtn.classList.remove('hide');
})
plusBtn2 .addEventListener('click', function(){
    ansBtn2.classList.add('show');
    plusBtn2.classList.add('hide');
    minusBtn2.classList.add('show');

    ansBtn.classList.remove('show');
    minusBtn.classList.remove('show');
    plusBtn.classList.remove('hide');

    ansBtn3.classList.remove('show');
    minusBtn3.classList.remove('show');
    plusBtn3.classList.remove('hide');

    ansBtn4.classList.remove('show');
    minusBtn4.classList.remove('show');
    plusBtn4.classList.remove('hide');
})
minusBtn2 .addEventListener('click', function(){
    ansBtn2.classList.remove('show');
    plusBtn2.classList.remove('hide');
    minusBtn2.classList.remove('show');
})
plusBtn3 .addEventListener('click', function(){
    ansBtn3.classList.add('show');
    plusBtn3.classList.add('hide');
    minusBtn3.classList.add('show');

    ansBtn.classList.remove('show');
    minusBtn.classList.remove('show');
    plusBtn.classList.remove('hide');

    ansBtn2.classList.remove('show');
    minusBtn2.classList.remove('show');
    plusBtn2.classList.remove('hide');

    ansBtn4.classList.remove('show');
    minusBtn4.classList.remove('show');
    plusBtn4.classList.remove('hide');
})
minusBtn3 .addEventListener('click', function(){
    ansBtn3.classList.remove('show');
    plusBtn3.classList.remove('hide');
    minusBtn3.classList.remove('show');
})


plusBtn4 .addEventListener('click', function(){
    ansBtn4.classList.add('show');
    plusBtn4.classList.add('hide');
    minusBtn4.classList.add('show');

    ansBtn.classList.remove('show');
    minusBtn.classList.remove('show');
    plusBtn.classList.remove('hide');

    ansBtn3.classList.remove('show');
    minusBtn3.classList.remove('show');
    plusBtn3.classList.remove('hide');

    ansBtn2.classList.remove('show');
    minusBtn2.classList.remove('show');
    plusBtn2.classList.remove('hide');
})
minusBtn4 .addEventListener('click', function(){
    ansBtn4.classList.remove('show');
    plusBtn4.classList.remove('hide');
    minusBtn4.classList.remove('show');
})
// _________________________==========FAQ SECTION JS END_________________________==========

