document.addEventListener("DOMContentLoaded", () => {
    const count = document.querySelector(".count");
    const subtotalEl = document.querySelector(".subtotal");
    const totalEl = document.querySelector(".total");
    const checkoutPrice = document.querySelector(".checkout-btn span");
    const shipping = 4;

    

    function updateCount() {
        const countItems = document.querySelectorAll(".cart-item").length;
        count.textContent = `You have ${countItems} items in your cart`;
    }

    function updatePrice() {
        let subT = 0;
        document.querySelectorAll(".cart-item").forEach(el => {
            const quantity = parseInt(el.querySelector(".quantity").value) || 0;
            const itemPrice = parseFloat(el.dataset.price) || 0;
            const totalPrice = quantity * itemPrice;
            

            console.log(`Quantity: ${quantity}, Item Price: ${itemPrice}, Total Price: ${totalPrice}`);

            el.querySelector(".item-price").textContent = `$${totalPrice.toFixed(2)}`;

            subT += totalPrice;
        });

        console.log(`Subtotal: ${subT}, Total (with shipping): ${subT + shipping}`);
        
        subtotalEl.textContent = `$${subT.toFixed(2)}`;
        // const shipping = 42;
        totalEl.textContent = `$${(subT + shipping).toFixed(2)}`;

        checkoutPrice.textContent = `$${(subT + shipping).toFixed(2)}`;
    }

    function deleteItem(ev) {
        const el = ev.target.closest(".cart-item");
        el.remove();
        updateCount();
        updatePrice();
    }

    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", deleteItem);
    });

    document.querySelectorAll(".quantity").forEach(input => {
        input.addEventListener("input", updatePrice)
    });

    updateCount();
    updatePrice();

    document.querySelector(".checkout-btn").addEventListener("click", function (event) {
        event.preventDefault();
    
        if (validateForm()) {
            // emptyErrors();
            if (confirm("Payment information is valid. Proceeding to payment...")) {
                document.querySelector(".download-btn").style.display = "block";
            }
        }
    });

    // function emptyErrors() {
    //     errorName.textContent = "";
    //     errorCard.textContent = "";
    //     errorExpiry.textContent = "";
    //     errorCvv.textContent = "";
    // }

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

    document.querySelector(".checkout-btn").addEventListener("click", validateForm);

    document.getElementById("name").addEventListener("submit", validateForm);
    document.getElementById("card-number").addEventListener("submit", validateForm);
    document.getElementById("expiry").addEventListener("submit", validateForm);
    document.getElementById("cvv").addEventListener("submit", validateForm);
    // if (valid) {
    //     alert("Payment information is valid. Proceeding to payment...");
    // }
});


