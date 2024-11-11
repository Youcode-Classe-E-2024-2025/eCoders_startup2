//Mobile Menu--------------------------------------------
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelector('.mobile-menu--links');
function showMobileMenu(e){
    e.stopPropagation();
    mobileLinks.classList.toggle('invisible');
    mobileLinks.classList.toggle('left-[-100px]')
    mobileLinks.classList.toggle('opacity-0')
}
mobileMenu.addEventListener('click',showMobileMenu);
document.addEventListener('click',e=>{
    mobileLinks.classList.add('invisible');
    mobileLinks.classList.add('left-[-100px]')
    mobileLinks.classList.add('opacity-0') 
})
//Mobile Menu--------------------------------------------
//landing carrousel--------------------------------------
const landingSlides = document.querySelectorAll('.landing-slide');
const landingSlidesContainer = document.querySelector('.landing-slides');
const landingCarrouselDots = document.querySelector('.landing-carrousel-dots');
const landingCarrouselArrows = document.querySelector('.landing-carrousel-arrows');
landingSlides.forEach((slide,i,arr)=>{
    if(i!==0 && i !== arr.length-1) {
        landingCarrouselDots.insertAdjacentHTML('beforeend',`<button class ='dot rounded-full bg-orange-200 hover:bg-orange-400 transition-colors h-1 w-1 md:h-2 md:w-2' data-num=${i}></button>`)
    }
})
landingSlidesContainer.style.height= getComputedStyle(landingSlides[0]).height;
window.addEventListener('resize', ()=>{
    landingSlidesContainer.style.height= getComputedStyle(landingSlides[0]).height;
});

landingSlides.forEach((slide,i)=>{
    slide.style.transform = `translateX(${-50+(i)*100}%)`
})
let currSlide = 1;
changeSlide(0);
function changeSlide(dir) {
    currSlide = currSlide + dir > 3 ? 1 : currSlide + dir<1 ? 3 : currSlide + dir;
    landingSlides.forEach((slide,i)=>{
        slide.style.transform = `translateX(${-50+(i-currSlide)*100}%)`
    })  
    landingCarrouselDots.querySelectorAll('.dot').forEach(el=>el.classList.remove('dot-active'))
    landingCarrouselDots.querySelectorAll('.dot')[currSlide-1].classList.add('dot-active');
}
landingCarrouselArrows.addEventListener('click',e=>{
 if(!e.target.matches('.arrow')) return;
 if(e.target.matches('.arrow-left')) changeSlide(-1);
 if(e.target.matches('.arrow-right')) changeSlide(1);
})


landingCarrouselDots.addEventListener('click',e=>{
    if(!e.target.matches('.dot')) return;
    changeSlide(+e.target.dataset.num-currSlide);
    landingCarrouselDots.querySelectorAll('.dot').forEach(el=>el.classList.remove('dot-active'))
    e.target.classList.add('dot-active');
})
setInterval(()=>changeSlide(1),7000)



