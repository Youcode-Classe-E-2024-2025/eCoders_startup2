import { productsData } from "../../Data/data.js";

const productsArray = JSON.parse(localStorage.getItem('products')) || productsData;

const cart = JSON.parse(localStorage.getItem("cart")) || [];


let imgOff = document.querySelector("#imgOff");
let imgSec1 = document.querySelector("#imgSec1");
let imgSec2 = document.querySelector("#imgSec2");
let imgSec3 = document.querySelector("#imgSec3");
let textTitle = document.querySelector("#textTitle");
let textPrice = document.querySelector("#textPrice");
let textColor = document.querySelector("#textColor");
const sizeElementsContainer = document.querySelector('.sizes');
let textDesc = document.querySelector("#textDesc");
let textDetails = document.querySelector("#textDetails");
const overlay = document.querySelector('.overlay');
const btnAddToCart = document.querySelector('.btn-addtocart')

const images = [imgOff,imgSec1,imgSec2,imgSec3];

const searchParams = new URLSearchParams(location.search);
const productId = +searchParams.get('id');

const productObject = productsArray.find(p=>p.id === productId);




imgOff.src = "../../images/"+productObject.img;
imgSec1.src = "../../images/"+productObject.gallerie[0];
imgSec2.src = "../../images/"+productObject.gallerie[1];
imgSec3.src = "../../images/"+productObject.gallerie[2];
textTitle.textContent = productObject.name;



textPrice.textContent = '$'+productObject.price;
console.log(productObject.price);

textDesc.textContent = productObject.description;
textDetails.textContent = productObject.details;

console.log(productObject.colors);

productObject.colors.forEach(c=>{
  textColor.insertAdjacentHTML('beforeend',`
    <div class="color w-7 h-7 bg-colgre border rounded-sm border-gray-300 shadow-md cursor-pointer " style="background-color:${c};"></div>
    `)
})


images.forEach(img=>{
  img.addEventListener('click',e=>{
    e.stopPropagation();
    showOverlay(img);
  }
  )
})
overlay.querySelector('button').addEventListener('click',hideOverlay);



function hideOverlay(){
  overlay.classList.add('hidden');
}



function showOverlay(img){
  overlay.classList.remove("hidden");
  overlay.querySelector('img').src = img.src;
}

const colorElements = textColor.querySelectorAll(".color");

const addedProduct={...productObject,color:"",size:0,quantity : 1};
//add to cart
textColor.addEventListener('click',e=>{
  if(!e.target.matches('.color')) return;
    addedProduct.color = getComputedStyle(e.target).backgroundColor;
    colorElements.forEach(ce=>ce.classList.remove('chosen-color'))
    e.target.classList.add('chosen-color')
    console.log(addedProduct.color);   
})

sizeElementsContainer.addEventListener('click',e=>{
  if(!e.target.matches('.size')) return;
  addedProduct.size = +e.target.dataset.size;
  sizeElementsContainer.querySelectorAll('.size')
  .forEach(s=>{
    s.classList.remove('chosen-size');
  })
  e.target.classList.add('chosen-size');
})

btnAddToCart.addEventListener('click',()=>{
  textColor.querySelector('.star')?.remove();
  sizeElementsContainer.querySelector('.star')?.remove();
  if(!addedProduct.color || !addedProduct.size){
    if(!addedProduct.color) {
      textColor.querySelector('.star')?.remove();
      textColor.insertAdjacentHTML('beforeend',"<span class='star text-red-500'>*</span>")
    }
    if(!addedProduct.size) {
      sizeElementsContainer.querySelector('.star')?.remove();
      sizeElementsContainer.insertAdjacentHTML('beforeend',"<span class='star text-red-500'>*</span>")
    }
    return;  
  }
  const exist = cart.find(p=>p.id === addedProduct.id && p.size === addedProduct.size && p.color === addedProduct.color);
  
  if(!exist){
    cart.push(addedProduct);
  }else exist.quantity+=1;
  localStorage.setItem('cart',JSON.stringify(cart));
  location.href = "../../pages/cart/cart.html";
})
console.log(cart);
