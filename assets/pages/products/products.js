const products = [
    {
        name: "Lolito",
        price: "$166.43",
        img: "../../images/mt41506bk_nb_70_i.webp",
        description: "Luxury big sofa",
        category: "Men"
    },
    {
        name: "Luxe Chair",
        price: "$189.99",
        img: "../../images/mt41534nny_nb_55_i.webp",
        description: "Comfortable and stylish chair",
        category: "Women"
    },
    {
        name: "Relax Armchair",
        price: "$230.00",
        img: "../../images/mt41510ag_nb_70_i.webp",
        description: "Perfect armchair for living rooms",
        category: "Men"
    },
    {
        name: "Sofa Deluxe",
        price: "$450.75",
        img: "../../images/mt41506bk_nb_70_i.webp",
        description: "Modern sofa with comfort",
        category: "Women"
    },
    {
        name: "Gaming Chair Pro",
        price: "$299.99",
        img: "../../images/mt41534nny_nb_55_i.webp",
        description: "Ergonomic chair for gaming",
        category: "Men"
    },
    {
        name: "Cozy Sofa",
        price: "$120.99",
        img: "../../images/mt41510ag_nb_70_i.webp",
        description: "Compact sofa for small spaces",
        category: "Women"
    },
    {
        name: "Family Couch",
        price: "$350.50",
        img: "../../images/mt41506bk_nb_70_i.webp",
        description: "Big couch for family gatherings",
        category: "Kids"
    },
    {
        name: "Travel Chair",
        price: "$90.00",
        img: "../../images/mt41534nny_nb_55_i.webp",
        description: "Portable folding chair for travel",
        category: "Men"
    },
    {
        name: "Sitting Stool",
        price: "$49.99",
        img: "../../images/mt41510ag_nb_70_i.webp",
        description: "Small stool for extra seating",
        category: "Women"
    },
    {
        name: "King Size Sofa",
        price: "$600.00",
        img: "../../images/mt41506bk_nb_70_i.webp",
        description: "Spacious and luxurious sofa",
        category: "Kids"
    }
];


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
                    <h2 class="productPrice font-semibold text-3xl">${product.price}</h2>
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

function displayAll() {


    products.forEach(element => {
        cardDisplay(element);
        
    });
    
}




displayAll();