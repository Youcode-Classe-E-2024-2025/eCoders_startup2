// localStorage.clear();
// import { document } from "postcss";
import { productsData } from "../../Data/data.js";

const filteredProducts = JSON.parse(localStorage.getItem('products')) || productsData;


const products = filteredProducts.filter(product => product.quantity > 0);

// console.log(products);





let theOne = products;
let count = 0;
const n = 12;

function cardDisplay(product) {
  const parentContainer = document.getElementById("productDisplay");

  const card = document.createElement("div");
  card.classList.add("w-[23%]", "h-fit", "mb-8", "max-950:w-[32%]", "max-450:w-[40%]");

  card.innerHTML = `
    <div class="productCard group bg-[#F6F6F8] w-full h-fit relative overflow-hidden">
        <div class="circle absolute w-12 h-12 bg-[#2EC1AC] rounded-full text-white font-medium flex items-center justify-center left-3/4 top-6 max-800:left-2/3">New</div>
        <img src="../../images/${product.img}" alt="${product.name}" class="w-full object-cover transition duration-300 group-hover:opacity-50">
        <div class="cardData flex flex-col gap-4 p-4 transition duration-300 group-hover:opacity-50 max-450:gap-0">
            <h4 class="prodctName font-medium text-2xl max-800:text-xl max-450:text-lg">${product.name}</h4>
               <h6 class="productDescription font-medium text-[#898989] text-base max-1230:text-xs h-24 overflow-auto">${product.description}</h6>
            <h2 class="productPrice font-semibold text-3xl max-450:text-2xl">$${product.price}</h2>
        </div>
        <div class="absolute inset-0 bg-[#000000] opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        <div class="cardButtons absolute inset-0 flex pt-7 flex-col justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <a href="../details/details.html?id=${product.id}" class="w-full flex justify-center mb-3">
                <button class="cardButtons bg-white text-[#E89F71] w-[70%] py-2 m-2 border font-medium" aria-label="Add to Cart">Add to Cart</button>
            </a>
        </div>
    </div>
  `;
  parentContainer.appendChild(card);
}

function display() {
  document.getElementById("productDisplay").innerHTML = "";
  const start = count*n;
  let end = start + n;

  let paginatedProducts;
  if (count == Math.floor(theOne.length / n) && theOne.length % n !== 0) {
    paginatedProducts = theOne.slice(-(theOne.length % n));
  } else {
    paginatedProducts = theOne.slice(start, end);
  }

  paginatedProducts.forEach((product) => {
    cardDisplay(product);
  });
}

function dissableTheButtons() {
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("previous");


  if (count === Math.floor(theOne.length / n) - 1 && theOne.length % n !== 0) {
    nextBtn.disabled = false;
  } else if (count >= Math.floor(theOne.length / n) - 1) {
    nextBtn.disabled = true;
  } else if (count < Math.floor(theOne.length / n) - 1) {
    nextBtn.disabled = false;
  }

  prevBtn.disabled = count <= 0;
}

document.getElementById("next").addEventListener("click", function () {
  count++;
  display();
  dissableTheButtons();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("previous").addEventListener("click", function () {
  count--;
  display();
  dissableTheButtons();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("fiterByCategorie").addEventListener("change", function () {
  const selectedCategory = this.value;
  count = 0;
  
  if (selectedCategory === "All") {
    theOne = products;
  } else {
    theOne = products.filter((item) => item.category === selectedCategory);
  }

  display();
  dissableTheButtons();
});

document.getElementById('ProductInput').addEventListener('input' , ()=>{
  
   let Pvalue  = document.getElementById('ProductInput').value.toLowerCase(); ; 
   console.log(Pvalue);
   
   let res = products.filter((item) => item.name.toLowerCase().includes(Pvalue));
   document.getElementById("productDisplay").innerHTML = "";
   if (res.length > 0) {
    res.forEach((product) => {
        cardDisplay(product);
    });
  }
  else{
      document.getElementById("productDisplay").innerHTML = "<p class='my-4 mx-auto'>No Product Found</p>";
    }
});

document.getElementById("SortByOrder").addEventListener("change", function () {
  const selectedValue = this.value;
  count = 0;
  
  if (selectedValue === "A") {
    theOne.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedValue === "Z") {
    theOne.sort((a, b) => b.name.localeCompare(a.name));
  } else if (selectedValue === "-") {
    theOne.sort((a, b) => b.price - a.price);
  } else {
    theOne.sort((a, b) => a.price - b.price);
  }

  display();
  dissableTheButtons();
});

display();
dissableTheButtons();
