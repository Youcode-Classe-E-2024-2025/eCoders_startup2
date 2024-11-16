let products = JSON.parse(localStorage.getItem("products"));
console.log(products);

let theOne = products; // Active list for filtering, sorting, and pagination
let count = 0; // Tracks the current page
const n = 12; // Number of products per page

// Display a single product card
function cardDisplay(product) {
  const parentContainer = document.getElementById("productDisplay");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("w-[23%]", "h-fit", "mb-8", "max-950:w-[32%]", "max-450:w-[40%]");

  cardContainer.innerHTML = `
    <div class="productCard group bg-[#F6F6F8] w-full h-fit relative overflow-hidden">
        <div class="circle absolute w-12 h-12 bg-[#2EC1AC] rounded-full text-white font-medium flex items-center justify-center left-3/4 top-6 max-800:left-2/3">New</div>
        <img src="../../images/${product.img}" alt="${product.name}" class="w-full object-cover transition duration-300 group-hover:opacity-50">
        <div class="cardData flex flex-col gap-4 p-4 transition duration-300 group-hover:opacity-50 max-450:gap-0">
            <h4 class="prodctName font-medium text-2xl max-800:text-xl max-450:text-lg">${product.name}</h4>
            <h6 class="productDescription font-medium text-[#898989] text-base max-1230:text-xs">${product.description}</h6>
            <h2 class="productPrice font-semibold text-3xl max-450:text-2xl">$${product.price}</h2>
        </div>
        <div class="absolute inset-0 bg-[#000000] opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        <div class="cardButtons absolute inset-0 flex pt-7 flex-col justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <a href="../details/details.html?Id=${product.id}" class="w-full flex justify-center mb-3">
                <button class="cardButtons bg-white text-[#E89F71] w-[70%] py-2 m-2 border font-medium" aria-label="Add to Cart">Add to Cart</button>
            </a>
        </div>
    </div>
  `;
  parentContainer.appendChild(cardContainer);
}

// // Display products based on the current page
// function displayPaginatedProducts() {
//   document.getElementById("productDisplay").innerHTML = "";
//   const start = count * n;
//   const end = start + n;
//   const paginatedProducts = theOne.slice(start, end);

//   console.log(paginatedProducts);
  
//   paginatedProducts.forEach((product) => {
//     cardDisplay(product);
//   });
// }
// Display products based on the current page
// Display products based on the current page


// function displayPaginatedProducts() {
//     document.getElementById("productDisplay").innerHTML = "";
  
//     const start = count * n;
//     let end = start + n;
  
//     let paginatedProducts ;
//     // Check if we're on the last page with fewer products than the page size
//     if (count == Math.floor(theOne.length / n) && theOne.length % n !== 0) {
//         console.log( 'rest' ,  -(theOne.length % n));
        
//          paginatedProducts = theOne.slice( -(theOne.length % n));// Adjust the end to show the remaining products
//     }else{  paginatedProducts = theOne.slice(start, end);}
  
   
  
//     console.log(paginatedProducts);
    
//     paginatedProducts.forEach((product) => {
//       cardDisplay(product);
//     });
//   }
  
function displayPaginatedProducts() {
    document.getElementById("productDisplay").innerHTML = "";
  
    const start = count * n;
    let end = start + n;
  
    let paginatedProducts;
    // Check if we're on the last page with fewer products than the page size
    if (count == Math.floor(theOne.length / n) && theOne.length % n !== 0) {
        console.log('rest', -(theOne.length % n));
        // Adjust the end to show the remaining products
        paginatedProducts = theOne.slice(-(theOne.length % n)); 
    } else {
        paginatedProducts = theOne.slice(start, end);
    }

    console.log(paginatedProducts);
    
    paginatedProducts.forEach((product) => {
        cardDisplay(product);
    });

  
}

  
// Update pagination button states
// function updatePaginationControls() {
//   const nextButton = document.getElementById("next");
//   const previousButton = document.getElementById("previous");

//   const totalPages = Math.ceil(theOne.length / n);

//   // If there are still products on the last page, allow "Next" to be enabled.
//   if (count >= totalPages - 1) {
//     nextButton.disabled = (theOne.length - count * n) <= 0; // Disable next if no more products
//   } else {
//     nextButton.disabled = false; // Enable next if there's more to display
//   }

//   // Disable the "Previous" button if we're on the first page
//   previousButton.disabled = count <= 0;
// }
// function updatePaginationControls() {
//     const nextButton = document.getElementById("next");
//     const previousButton = document.getElementById("previous");
//     const totalPages = Math.floor(theOne.length / n);
  
//     // Disable the 'Next' button if there are no more pages or if we're on the last page
//     if (count > totalPages - 1 && theOne.length % n !== 0) {
//         nextButton.disabled = true;
//     } else {
//         nextButton.disabled = false;
//     }

//     // Disable the 'Previous' button if we're on the first page
//     if (count <= 0) {
//         previousButton.disabled = true;
//     } else {
//         previousButton.disabled = false;
//     }
// }
function updatePaginationControls() {
    const nextButton = document.getElementById("next");
    const previousButton = document.getElementById("previous");
    const totalPages = Math.ceil(theOne.length / n);

    // If count is the second-to-last page and there's not an exact multiple of n products, don't disable the Next button
    if (count === Math.floor(theOne.length / n) - 1 && theOne.length % n !== 0) {
        nextButton.disabled = false; // Enable Next if there's more to show
    }
    // If we're on the last page and there's no partial page left, disable Next
    else if (count >= Math.floor(theOne.length / n) - 1 ) {
        nextButton.disabled = true; // Disable Next if it's the last page with no remaining items
    }
    // Otherwise, enable Next if we're not on the last or second-last page
    else if (count < Math.floor(theOne.length / n) - 1) {
        nextButton.disabled = false;
    }
  
    // Disable the 'Previous' button if we're on the first page
    if (count <= 0) {
        previousButton.disabled = true;
    } else {
        previousButton.disabled = false;
    }
}

// Next page button click
document.getElementById("next").addEventListener("click", function () {
  count++;
  displayPaginatedProducts();
  updatePaginationControls();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Previous page button click
document.getElementById("previous").addEventListener("click", function () {
  count--;
  displayPaginatedProducts();
  updatePaginationControls();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Filter by category
document.getElementById("fiterByCategorie").addEventListener("change", function () {
  const selectedCategory = this.value;
  count = 0; // Reset to the first page
  
  if (selectedCategory === "All") {
    theOne = products;
  } else {
    theOne = products.filter((item) => item.category === selectedCategory);
  }

  displayPaginatedProducts();
  updatePaginationControls();
});

// Sort products by selected order
document.getElementById("SortByOrder").addEventListener("change", function () {
  const selectedValue = this.value;
  count = 0; // Reset to the first page
  
  if (selectedValue === "A") {
    theOne.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedValue === "Z") {
    theOne.sort((a, b) => b.name.localeCompare(a.name));
  } else if (selectedValue === "-") {
    theOne.sort((a, b) => a.price - b.price);
  } else {
    theOne.sort((a, b) => b.price - a.price);
  }

  displayPaginatedProducts();
  updatePaginationControls();
});

// Initial setup (when page loads)
displayPaginatedProducts();
updatePaginationControls();
