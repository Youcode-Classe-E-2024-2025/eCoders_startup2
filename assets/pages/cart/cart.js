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
        totalEl.textContent = `$${subT + shipping}`;

        checkoutPrice.textContent = `$${(subT + shipping)}`
    }

    

    updateCount();
    updatePrice();

});