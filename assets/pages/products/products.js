import { productsData } from '../../Data/data.js';



let products = productsData;
console.log(products);


// Display a single product card
function cardDisplay(product) {
    const parentContainer = document.getElementById('productDisplay');

    // Create a div for the card container
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('w-[23%]', 'h-fit', 'mb-8', 'max-950:w-[32%]', 'max-450:w-[40%]');
    
    // Set inner HTML for product details
    cardContainer.innerHTML = `
        <div class="productCard group bg-[#F6F6F8] w-full h-fit relative overflow-hidden">
            <div class="circle absolute w-12 h-12 bg-[#2EC1AC] rounded-full text-white font-medium flex items-center justify-center left-3/4 top-6 max-800:left-2/3">New</div>
            <img src="../../images/${product.img}" alt="${product.name}" class="w-full object-cover transition duration-300 group-hover:opacity-50">
            <div class="cardData flex flex-col gap-4 p-4 transition duration-300 group-hover:opacity-50 max-450:gap-0">
                <h4 class="prodctName font-medium text-2xl max-800:text-xl max-450:text-lg  ">${product.name}</h4>
                <h6 class="productDescription font-medium text-[#898989] text-base  max-1230:text-xs">${product.description}</h6>
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

// Initialize filtering and sorting

// filtring and sorting 

let filterByCategorie=document.getElementById("fiterByCategorie");
let SortByOrder=document.getElementById("SortByOrder");




filterByCategorie.addEventListener("change", function() {
    let liste=productsData;
    const selectedCategory = this.value;
   liste=liste.filter(item => item.category==selectedCategory);

   console.log(liste);
   displayAll(liste);
   
});

SortByOrder.addEventListener("change", function() {
    let liste=productsData;
    const selectedCategory = this.value;
    console.log(selectedCategory);
    
  

   if (selectedCategory=='A') {
    liste=liste.sort((a ,b)=> a.name.localeCompare(b.name));
   } else if (selectedCategory=='Z') {
    liste=liste.sort((a ,b)=> b.name.localeCompare(a.name));
   } else if(selectedCategory=='-') {
    liste=liste.sort((a ,b)=> a.price-b.price);
    
   }else{
    liste=liste.sort((a ,b)=> b.price-a.price);

   }






   console.log(liste);
   displayAll(liste);
   
});

// let counter=1;
// function pagine(y){
//     console.log('test' , y);
    
       
//     if (y=='-') {
     
//     counter--;
        
//     } else {
//          counter++;
//     }

//     if (Math.ceil(products.length/12)< counter || counter < 1) {
//         return;
//     }

      

//     const start = (currentPage - 1) * 12;
//     const end = start + 12;
//     const paginatedProducts = productsP.slice(start, end);
//     displayAll(paginatedProducts);

    
// }
let next=document.getElementById('next');
let pre=document.getElementById('previous');

let counter=0;
// function pagineTEST(y){
//     console.log('test' , y);
    
       
//     if (y=='-') {
     
//     counter--;
        
//     } else {
//          counter++;
//     }

//     if (Math.ceil(products.length/12)< counter || counter < 1) {
//         return;
//     }

      

//     const start = (currentPage - 1) * 12;
//     const end = start + 12;
//     const paginatedProducts = productsP.slice(start, end);
//     displayAll(paginatedProducts);

    
// }



next.addEventListener('click'  , ()=>{
     
    console.log('test' , counter);
    // console.log('test  rest pro' ,products.length/12 -1);
    // console.log('test  rest c' ,Math.ceil(products.length/12)-1 );

    // console.log('test  rest f' ,Math.floor(products.length/12) -1);
   
    // console.log(Math.ceil(products.length/12)-1 > counter ,' MM ',  Math.floor(products.length/12)-1 < counter  );
    
    console.log(' module' ,( products.length%12)!==0);
    // console.log(' module' ,Math.floor(products.length/12) );
    console.log(' module' ,Math.floor(products.length/12)-1 == counter );
    
     if (Math.floor(products.length/12)-1 == counter && (products.length%12)!==0) {
         console.log('test  rest pro' ,products.length%12);
        displayAll(products.slice(-(products.length%12)));
        counter++;
        return;


    }
    
     counter++;
    if (Math.ceil(products.length/12)-1 < counter) {
        
        counter--;
       
    }
   
        
    
// Math.ceil(products.length/12
    

    // if (Math.ceil(products.length/12)> counter && Math.floor(products.length/12)> counter) {
        
    // }

   

    const start = (counter ) * 12;
    const end = start + 12;
    console.log(start , ' test',end);
    
    const paginatedProducts = products.slice(start, end);
    displayAll(paginatedProducts);
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Adds a smooth scrolling effect
    });

    
   

})

pre.addEventListener('click'  , ()=>{
    console.log('test' , counter);
    
     if ( counter <=0) {
        return;
    }  
   
         counter--;
    
// Math.ceil(products.length/12
    

    // if (Math.ceil(products.length/12)> counter && ) {
        
    // }

    console.log('test' , counter);

    const start = (counter ) * 12;
    const end = start + 12;
    console.log(start , ' test',end);
    
    const paginatedProducts = products.slice(start, end);
    displayAll(paginatedProducts);

    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Adds a smooth scrolling effect
    });
   

})




// display products depend on given list

function displayAll(products ) {
    document.getElementById('productDisplay').innerHTML='';


    

    products.forEach(element => {
        cardDisplay(element);
        
    });
    
}
































displayAll(products.slice(0,12));