const products = [
    {
        name: "Lolito",
        price: 166.43,
        img: "../../images/NB1.webp",
        description: "Luxury big sofa",
        category: "Men",
        quantity: 10,
        colors: ["Red", "Blue", "Black"]
    },
    {
        name: "Luxe Chair",
        price: 189.99,
        img: "../../images/NB2.webp",
        description: "Comfortable and stylish",
        category: "Women",
        quantity: 5,
        colors: ["White", "Grey", "Pink"]
    },
    {
        name: "Relax Armchair",
        price: 230.00,
        img: "../../images/NB3.webp",
        description: "Perfect armchair",
        category: "Men",
        quantity: 8,
        colors: ["Brown", "Black", "Beige"]
    },
    {
        name: "Sofa Deluxe",
        price: 450.75,
        img: "../../images/NB4.webp",
        description: "Modern sofa",
        category: "Women",
        quantity: 3,
        colors: ["Blue", "Grey", "White"]
    },
    {
        name: "Gaming Chair Pro",
        price: 299.99,
        img: "../../images/NB5.webp",
        description: "Ergonomic chair",
        category: "Men",
        quantity: 7,
        colors: ["Black", "Red", "Green"]
    },
    {
        name: "Cozy Sofa",
        price: 120.99,
        img: "../../images/NB6.webp",
        description: "Compact sofa",
        category: "Women",
        quantity: 12,
        colors: ["Pink", "Beige", "Grey"]
    },
    {
        name: "Family Couch",
        price: 350.50,
        img: "../../images/NB7.webp",
        description: "Big couch",
        category: "Kids",
        quantity: 6,
        colors: ["Blue", "Green", "Yellow"]
    },
    {
        name: "Travel Chair",
        price: 90.00,
        img: "../../images/NB8.webp",
        description: "Portable folding",
        category: "Men",
        quantity: 15,
        colors: ["Black", "Grey", "Red"]
    },
    {
        name: "Sitting Stool",
        price: 49.99,
        img: "../../images/NB1.webp",
        description: "Small stool",
        category: "Women",
        quantity: 20,
        colors: ["White", "Black", "Pink"]
    },
    {
        name: "King Size Sofa",
        price: 600.00,
        img: "../../images/NB2.webp",
        description: "Spacious and luxurious",
        category: "Kids",
        quantity: 4,
        colors: ["Blue", "Green", "Red"]
    }
];

// display on card 

function cardDisplay(product) {
    
        const parentContainer = document.getElementById('productDisplay');
    
        // Create a div for the card container
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('cardContainer', 'w-fit', 'h-fit', 'mb-8');
    
        // Set the inner HTML for the product card with placeholders for dynamic content
        cardContainer.innerHTML = `
            <div class="productCard group bg-[#F6F6F8] w-[285px] h-[446px] relative overflow-hidden max-800:scale-90 max-800:max-w-[85%] max-800:max-h-[85%]">
                <div class="circle absolute w-12 h-12 bg-[#2EC1AC] rounded-full text-white font-medium flex items-center justify-center left-3/4 top-6">New</div>
                <img src="${product.img}" alt="${product.name}" class="w-full object-cover transition duration-300 group-hover:opacity-50" />
                <div class="cardData flex flex-col gap-4 p-4 transition duration-300 group-hover:opacity-50">
                    <h4 class="prodctName font-medium text-2xl">${product.name}</h4>
                    <h6 class="productDescription font-medium text-[#898989] text-base">${product.description}</h6>
                    <h2 class="productPrice font-semibold text-3xl">$${product.price}</h2>
                </div>
                <div class="absolute inset-0 bg-[#000000] opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div class="cardButtons absolute inset-0 flex pt-7 flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button class="cardButtons bg-white text-[#E89F71] w-[70%] py-2 m-2 border font-medium" aria-label="Add to Cart">Add to Cart</button>
                    <button class="cardButtons bg-white text-[#E89F71] w-[70%] py-2 m-2 border font-medium" aria-label="See Details">See Details</button>
                </div>
            </div>
        `;
    
        // Append the product card to the parent container
        parentContainer.appendChild(cardContainer);
   
    
}


// filtring and sorting 

let filterByCategorie=document.getElementById("fiterByCategorie");
let SortByOrder=document.getElementById("SortByOrder");




filterByCategorie.addEventListener("change", function() {
    let liste=products;
    const selectedCategory = this.value;
   liste=liste.filter(item => item.category==selectedCategory);

   console.log(liste);
   displayAll(liste);
   
});

SortByOrder.addEventListener("change", function() {
    let liste=products;
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







// display products depend on given list

function displayAll(productsP) {
    document.getElementById('productDisplay').innerHTML='';
    

    productsP.forEach(element => {
        cardDisplay(element);
        
    });
    
}
























































displayAll(products);