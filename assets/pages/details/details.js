import { products } from "../../Data/data.js";
let imgOff = document.querySelector("#imgOff");
let imgSec1 = document.querySelector("#imgSec1");
let imgSec2 = document.querySelector("#imgSec2");
let imgSec3 = document.querySelector("#imgSec3");
let textTitle = document.querySelector("#textTitle");
let textPrice = document.querySelector("#textPrice");
let textColor = document.querySelector("#textColor");
let textDesc = document.querySelector("#textDesc");
document.addEventListener("DOMContentLoaded", () => {
  products.forEach((product) => {
    textTitle.textContent = `${product.name}`;
    textPrice.textContent = `$${product.price}`;
    textColor.classList.replace("bg-colgre", `${product.colors}`);
    textDesc.textContent = `${product.description}`;
  });
});
