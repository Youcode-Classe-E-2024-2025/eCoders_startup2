import {productsData} from "../Data/data.js"


const productsArray = JSON.parse(localStorage.getItem('products')) || productsData;

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

let csId = setInterval(()=>changeLandingSlide(1),4000);

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
//getting 9 most rated products
const bestSelling = productsArray.sort((a,b)=>b.rating-a.rating).slice(0,9);
//getting 9 newest products
const newestProducts = productsArray.sort((a,b)=>new Date(b.dateOfAdd)-new Date(a.dateOfAdd)).slice(0,9);

const productsElements = document.querySelectorAll('.product-box');
const bestProductsImages = document.querySelectorAll('#best-selling img');
const newProductsImages = document.querySelectorAll('#new-products img');

bestSelling.forEach((p,i)=>bestProductsImages[i].src = `assets/images/${p.img}`);
newestProducts.forEach((p,i)=>newProductsImages[i].src = `assets/images/${p.img}`);


const productsObjects = [...bestSelling,...newestProducts];
const url = window.location.origin + '/eCoders_startup2';
productsElements.forEach((pe,i)=>{
    pe.querySelector('h3').textContent = productsObjects[i].name;
    pe.querySelector('p').textContent = productsObjects[i].description;
    pe.querySelector('span').textContent = '$'+productsObjects[i].price;
    pe.addEventListener('click',()=>{
        location.href = `${url}/assets/pages/details/details.html?id=${productsObjects[i].id}`;
    })
})

function initializeCarousel(carouselContainer,delay) {
    const products = carouselContainer.querySelectorAll('.product');
    const slidesContainer = carouselContainer.querySelector('.slides-container');
    const productsArrowLeft = carouselContainer.querySelector('.arrow-left');
    const productsArrowRight = carouselContainer.querySelector('.arrow-right');
    
    let translationsNum = 0;
    
    function changeProductSlide(dir) {
        const translate = Number.parseFloat(getComputedStyle(slidesContainer).width) * 0.335;
        if (dir > 0 && translationsNum < products.length - 3) {
            translationsNum++;
        } else if (dir < 0 && translationsNum > 0) {
            translationsNum--;
        }
        else translationsNum = translationsNum >= products.length-3 ? 0 : products.length -2;
        const offset = -translationsNum * translate;
        products.forEach(p => p.style.transform = `translateX(${offset}px)`);
    }
    let csId = null;
    setTimeout(()=>{
        csId = setInterval(()=>changeProductSlide(1),3000)
    },delay)
    //stop when hovered
    slidesContainer.addEventListener('mouseenter',()=>{
        clearInterval(csId);
    })
    slidesContainer.addEventListener('mouseleave',()=>{
        csId = setInterval(()=>changeProductSlide(1),3000);
    })
    // Set up event listeners for arrows
    productsArrowLeft.addEventListener('click', () => {
        changeProductSlide(-1);
        clearInterval(csId);
        csId = setInterval(()=>changeProductSlide(1),3000)
});
    productsArrowRight.addEventListener('click', () => {
        changeProductSlide(1)
        clearInterval(csId);
        csId = setInterval(()=>changeProductSlide(1),3000);
    });
    
    // Handle window resizing to recalculate position
    window.addEventListener('resize', () => changeProductSlide(0));
}

// Initialize the first carousel
const bestSellingCarousel = document.querySelector('#best-selling .product-carrousel');
initializeCarousel(bestSellingCarousel,0);

// Initialize the second carousel
const newProductsCarousel = document.querySelector('#new-products .product-carrousel');
initializeCarousel(newProductsCarousel,1000);

//product carrousel--------------------------------------

//routing------------------------------------------------
// const productsElements = document.querySelectorAll('.product-box');

// productsElements.forEach(pe=>{
//     pe.addEventListener('click',e=>{
        
//     })
// })
