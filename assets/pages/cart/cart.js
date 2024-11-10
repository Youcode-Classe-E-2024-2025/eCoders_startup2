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

    

    updateCount();

});