//-------------------------------------------------------
//-------------------------------------------------------
//------------------- nav section start-----------------

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
//-------------------------------------------------------
//-------------------------------------------------------
//------------- nav section end--------------------------


// -- ---------------------------------------------------
//  ---------------------------------------------------
//  -----------------------Scroll Top START------------ --


var scroll = document.querySelector('.scrollTop');
window.addEventListener('scroll', function () {
    scroll.classList.toggle("active", window.scrollY > 100)
})

scroll.addEventListener('click', backToTop);

function backToTop() {
    window.scrollTo(0, 0);
}


// -- -----------------------Scroll Top END------------
// ---------------------------------------------------
// -----------------------------------------------------


/* ------------------------------------------------------------------- */
/* ------------------------loading js start-------------------------- */
/* -------------------------------------------------------------------- */



let loader = document.getElementById('preloader');
  window.addEventListener('load',function(){
    loader.style.display = "none";
  })




/* ------------------------------------------------------------------- */
/* ------------------------loading js End-------------------------- */
/* -------------------------------------------------------------------- */
