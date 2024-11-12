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
});

let currLandingSlide = 1;
changeLandingSlide(0);
function changeLandingSlide(dir) {
    currLandingSlide = currLandingSlide + dir > 3 ? 1 : currLandingSlide + dir<1 ? 3 : currLandingSlide + dir;
    landingSlides.forEach((slide,i)=>{
        slide.style.transform = `translateX(${-50+(i-currLandingSlide)*100}%)`
    })  
    landingCarrouselDots.querySelectorAll('.dot').forEach(el=>el.classList.remove('dot-active'))
    landingCarrouselDots.querySelectorAll('.dot')[currLandingSlide-1].classList.add('dot-active');
}

let csId = setInterval(()=>changeLandingSlide(1),7000);

landingCarrouselArrows.addEventListener('click',e=>{
    if(!e.target.matches('.arrow')) return;
    if(e.target.matches('.arrow-left')) changeLandingSlide(-1);
    if(e.target.matches('.arrow-right')) changeLandingSlide(1);
    clearInterval(csId);
    csId = setInterval(()=>changeLandingSlide(1),7000);
})


landingCarrouselDots.addEventListener('click',e=>{
    if(!e.target.matches('.dot')) return;
    changeLandingSlide(+e.target.dataset.num-currLandingSlide);
    landingCarrouselDots.querySelectorAll('.dot').forEach(el=>el.classList.remove('dot-active'))
    e.target.classList.add('dot-active');
    clearInterval(csId);
    csId = setInterval(()=>changeLandingSlide(1),7000);
})
//landing carrousel--------------------------------------

//product carrousel--------------------------------------
const products = document.querySelectorAll('.product');
const productCarrousel = document.querySelector('.product-carrousel');
const productsArrowLeft = productCarrousel.querySelector('.arrow-left');
const productsArrowRight = productCarrousel.querySelector('.arrow-right');


let translationsNum = 0;

function changeProductSlide(dir) {
    const translate = Number.parseFloat(getComputedStyle(productCarrousel.querySelector('.slides-container')).width) * 0.35;
    if (dir > 0 && translationsNum < products.length - 3) {
        translationsNum++;
    } else if (dir < 0 && translationsNum > 0) {
        translationsNum--;
    }
    const offset = -translationsNum * translate;
    products.forEach(p => p.style.transform = `translateX(${offset}px)`);
}

window.addEventListener('resize' ,()=>changeProductSlide(0))

productsArrowLeft.addEventListener('click',()=>changeProductSlide(-1))
productsArrowRight.addEventListener('click',()=>changeProductSlide(1))




