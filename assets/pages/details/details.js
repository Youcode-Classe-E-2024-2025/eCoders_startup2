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




if (productObject) {
  imgOff.src = "../../images/" + productObject.img;
  imgSec1.src = "../../images/" + productObject.gallerie[0];
  imgSec2.src = "../../images/" + productObject.gallerie[1];
  imgSec3.src = "../../images/" + productObject.gallerie[2];
  textTitle.textContent = productObject.name;
  textPrice.textContent = '$' + productObject.price;
  textDesc.textContent = productObject.description;
  textDetails.textContent = productObject.details;

  productObject.colors.forEach(c => {
    textColor.insertAdjacentHTML('beforeend', `
      <div class="w-7 h-7 bg-colgre border rounded-sm border-gray-300 shadow-md cursor-pointer" style="background-color:${c};"></div>
    `);
  });
} else {
  // Si aucun produit n'est trouvé avec cet ID
  console.error("Produit non trouvé");
  // Affiche un message ou redirige si nécessaire
}

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


document.querySelector('#add-to-cart').addEventListener("click", function(e) {
  // const productId = e.target.getAttribute('data-id');
  addToCart(productObject.id);
});

// let cart = [];

function addToCart(productId) {
  const product = productsData.find(item => item.id === productId);
    if (!product) return;
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    alert("Product added to cart successfully");
    
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

