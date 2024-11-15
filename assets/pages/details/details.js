import { productsData } from "../../Data/data.js";
let imgOff = document.querySelector("#imgOff");
let imgSec1 = document.querySelector("#imgSec1");
let imgSec2 = document.querySelector("#imgSec2");
let imgSec3 = document.querySelector("#imgSec3");
let textTitle = document.querySelector("#textTitle");
let textPrice = document.querySelector("#textPrice");
let textColor = document.querySelector("#textColor");
let textDesc = document.querySelector("#textDesc");
let textDetails = document.querySelector("#textDetails");
const overlay = document.querySelector('.overlay');

const images = [imgOff,imgSec1,imgSec2,imgSec3];

const searchParams = new URLSearchParams(location.search);
const productId = searchParams.get('id');

const productObject = productsData.find(p=>p.id === +productId);




imgOff.src = "../../images/"+productObject.img;
imgSec1.src = "../../images/"+productObject.gallerie[0];
imgSec2.src = "../../images/"+productObject.gallerie[1];
imgSec3.src = "../../images/"+productObject.gallerie[2];
textTitle.src = productObject.name;



textPrice.textContent = '$'+productObject.price;
console.log(productObject.price);

textDesc.textContent = productObject.description;
textDetails.textContent = productObject.details;

console.log(productObject.colors);

productObject.colors.forEach(c=>{
  textColor.insertAdjacentHTML('beforeend',`
    <div class="w-7 h-7 bg-colgre border rounded-sm border-gray-300 shadow-md cursor-pointer " style="background-color:${c};"></div>
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
