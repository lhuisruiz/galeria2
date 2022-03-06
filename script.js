const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});


/* Lightbox */
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

  
let franmas = document.getElementById("franmas");
franmas.addEventListener("click",()=>{
    location.href="fran.html";
})

let instfran = document.getElementById("instfran");
instfran.addEventListener("click",()=>{
    location.href="https://www.instagram.com/franco.rios13";
})

let insta = document.getElementById("insta");
insta.addEventListener("click",()=>{
    location.href="https://www.instagram.com/luisiana.dark";
})



let lhu = document.getElementById("lhu");

lhu.addEventListener("click",()=>{
    location.href="luiciana.html";
})
