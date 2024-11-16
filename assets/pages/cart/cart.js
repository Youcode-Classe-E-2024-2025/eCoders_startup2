import {productsData} from '../../Data/data.js'

document.addEventListener("DOMContentLoaded", () => {
    window.onload = displayCart;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // eventListners();

    function eventListners() {
        document.querySelector(".checkout-btn").addEventListener("click", function (event) {
            if (cart.length !== 0) {
                event.preventDefault();
        
                if (validateForm()) {
                    if (confirm("Payment information is valid. Proceeding to payment...")) {
                        document.querySelector(".download-btn").style.display = "block";
                    }
                }
            }
            else {
                alert("Your cart is empty. Please add items to your cart before proceeding to payement.");
            }
        });

        document.querySelector(".products").addEventListener("input", event => {
            if (event.target.classList.contains("quantity")) {
                updatePrice();
            }
        });

        document.querySelector(".download-btn").addEventListener("click", generatePDF);

        document.querySelectorAll(".quantity").forEach(input => {
            input.addEventListener("input", updatePrice)
        });

        document.querySelectorAll(".delete-btn").forEach(btn => {
            btn.addEventListener("click", deleteItem);
        });
    
        document.querySelectorAll(".quantity").forEach(input => {
            input.addEventListener("input", updateQuantity);
        });
    }

    function displayCart() {
        const productsContainer = document.querySelector(".products");


        if (cart.length > 0) {
            cart.forEach(product => {
                const productEL = document.createElement("div");
                productEL.innerHTML = `
                    <div class="cart-item flex justify-between items-center pt-3.5 pr-4 pb-3.5 pl-2 rounded-xl shadow-md mb-6" data-id="${product.id}" data-price="${product.price}">
                        <div class="flex items-center">
                            <img class="object-cover w-16 h-16 rounded-lg mr-3.5" src="../../images/${product.img}" alt="${product.name}" />

                            <div class="item-details self-center flex flex-col flex-wrap w-[160px]">
                                <h4 class="item-name mb-2 font-semibold text-base pt-3">${product.name}</h4>
                                <p class="font-semibold text-base">${product.description}</p>
                            </div>
                        </div>
                        <div class="">
                            <input type="number" value="${product.quantity}" min="1" class="quantity font-raleway w-10 text-center font-semibold text-xl"/>
                        </div>
                        <p class="item-price ml-3 font-semibold text-base">$${(product.price * product.quantity).toFixed(2)}</p>
                        <button class="delete-btn mr-2 cursor-pointer text-xl text-[#888]">
                            <?xml version="1.0" ?><!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
                            <svg enable-background="new 0 0 512 512" height="24" width="24" id="Layer_1" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <path d="M444.852,66.908h-99.339V47.04c0-21.943-17.792-39.736-39.736-39.736h-99.339   c-21.944,0-39.736,17.793-39.736,39.736v19.868H67.363v19.868h20.47l19.887,377.489c0,21.944,17.792,39.736,39.736,39.736h218.546   c21.944,0,39.736-17.792,39.736-39.736l19.538-377.489h19.577V66.908z M186.57,47.04c0-10.962,8.926-19.868,19.868-19.868h99.339   c10.962,0,19.868,8.906,19.868,19.868v19.868H186.57V47.04z M385.908,463.236l-0.039,0.505v0.524   c0,10.943-8.906,19.868-19.868,19.868H147.455c-10.942,0-19.868-8.925-19.868-19.868v-0.524l-0.019-0.523L107.72,86.776h297.669   L385.908,463.236z" fill="#37404D"/>
                                    <rect fill="#37404D" height="317.885" width="19.868" x="246.173" y="126.511"/>
                                    <polygon fill="#37404D" points="206.884,443.757 186.551,126.493 166.722,127.753 187.056,445.017"/>
                                    <polygon fill="#37404D" points="345.649,127.132 325.82,125.891 305.777,443.776 325.606,445.017"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                `;
                productsContainer.appendChild(productEL);
        
            });

        } else {
            productsContainer.innerHTML = '<p>It looks like you haven’t added anything yet. Shop now and treat yourself!</p>';
        }
        updateCount();
        updatePrice();
        eventListners();
    }

    function updateCount() {
        const count = document.querySelector(".count");
        const countItems = document.querySelectorAll(".cart-item").length;
        
        count.innerHTML = `You have ${countItems} items in your cart`;
    }
    
    function updatePrice() {
        const subtotalEl = document.querySelector(".subtotal");
        const totalEl = document.querySelector(".total");
        const checkoutPrice = document.querySelector(".checkout-btn span");
        const shipping = 4;
    
        let subT = 0;
        document.querySelectorAll(".cart-item").forEach(el => {
            const quantityEl = el.querySelector(".quantity");
            const itemPriceEl = el.querySelector(".item-price");
            
            if (quantityEl && itemPriceEl) {
                const itemUnitPrice = parseFloat(el.dataset.price);
                const quantity = parseInt(quantityEl.value) || 1; 
                
                const totalPrice = quantity * itemUnitPrice;
                
                itemPriceEl.textContent = `$${totalPrice.toFixed(2)}`;
                
                subT += totalPrice;
            }
        });
    
        subtotalEl.textContent = `$${subT.toFixed(2)}`;
        totalEl.textContent = `$${(subT + shipping).toFixed(2)}`;
        checkoutPrice.textContent = `$${(subT + shipping).toFixed(2)}`;
    }

    function deleteItem(ev) {
        const el = ev.target.closest(".cart-item");
        const productId = +el.dataset.id;
    
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem("cart", JSON.stringify(cart));
    
        el.remove();
        updateCount();
        updatePrice();
    }

    function updateQuantity(event) {
        const el = event.target.closest(".cart-item");
        const productId = el.dataset.id;
        const newQuantity = parseInt(event.target.value, 10) || 1;
    
        const product = cart.find(item => item.id === productId);
        if (product) {
            product.quantity = newQuantity;
            localStorage.setItem("cart", JSON.stringify(cart));
            updatePrice();
        }
    }

    function validateForm() {
        const name = document.getElementById("name").value.trim();
        const cardNumber = document.getElementById("card-number").value.trim();
        const expiry = document.getElementById("expiry").value.trim();
        const cvv = document.getElementById("cvv").value.trim();

        const errorName = document.querySelector(".error-name");
        const errorCard = document.querySelector(".error-card");
        const errorExpiry = document.querySelector(".error-expiry");
        const errorCvv = document.querySelector(".error-cvv");
    
        let valid = true; 
    
        if (name === "") {
            errorName.textContent = "Please enter the name on the card.";
            valid = false;
        }
        else {
            errorName.textContent = "";
        }
        
        const cardNumberRegex = /^[0-9]{16}$/;
        if (!cardNumberRegex.test(cardNumber)) {
            errorCard.textContent = "Please enter a valid 16-digit card number.";
            valid = false;
        }
        else {
            errorCard.textContent = "";
        }
        
        const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
        if (!expiryRegex.test(expiry)) {
            errorExpiry.textContent = "Please enter a valid expiry date in MM/YY format.";
            valid = false;
        }
        else {
            errorExpiry.textContent = "";
        }
    
        const cvvRegex = /^[0-9]{3}$/;
        if (!cvvRegex.test(cvv)) {
            errorCvv.textContent = "Please enter a valid 3-digit CVV.";
            valid = false;
        }
        else {
            errorCvv.textContent = "";
        }

        return valid;
    }

    function generatePDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        const cartItems = document.querySelectorAll(".cart-item");
          
        
        const subtotalElement = document.querySelector(".subtotal");
        const totalElement = document.querySelector(".total");

        const countItems = cartItems.length;
        const subtotal = subtotalElement.textContent;
        const total = totalElement.textContent;  
        const title = "Order Quotation";
        const sep = "========================================";

        const pageWidth = doc.internal.pageSize.width;

        const titleWidth = doc.getTextWidth(title);
        const sepWidth = doc.getTextWidth(sep);

        doc.setFontSize(18);
        doc.setFont("helvetica", "bold");    
        doc.text((pageWidth - titleWidth) / 2, 20, title);

        let posY = 40;

        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("Products:", 20, posY)

        doc.setFontSize(12);
        doc.setFont("helvetica", "normal")
        
        cartItems.forEach((el, index) => {
            const itemName = el.querySelector(".item-name").textContent;
            const quantity = el.querySelector(".quantity").value;
            const itemPrice = el.querySelector(".item-price").textContent;

            posY += 10;
            if (posY + 40 > doc.internal.pageSize.height - 20) {
                doc.addPage();
                posY = 20;
            }

            doc.text(`${index + 1}. ${itemName}`, 30, posY);
            doc.text(`Quantity : ${quantity}`, 35, posY + 10);
            doc.text(`Price : ${itemPrice}`, 35, posY + 20);
            doc.text((pageWidth - sepWidth) / 2, posY + 30, sep);   
            posY += 30; 
        });

        posY += 10;
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text(`Number of articles : ${countItems}`, 20, posY);
        doc.text(`Subtotal : ${subtotal}`, 20, posY + 10);
        doc.text(`Total (incl. shipping) : ${total}`, 20, posY + 20);

        doc.save("devis.pdf");
    }

    function resetStorage() {
        const resetButton = document.getElementById("resetStorage");

        resetButton.addEventListener("click", () => {
            const cartItems = document.querySelectorAll(".cart-item");
            if (cartItems.length != 0) {
                if (confirm("All items would be deleted from your cart. Are you sure ?")) {
                    localStorage.clear();
                    location.reload();
                }
            }
            else {
                alert("Your cart is already empty !");
            }
        });

    }

    resetStorage(); 
    
});

const url = new URLSearchParams(location.search)