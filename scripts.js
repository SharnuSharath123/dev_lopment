// scripts.js

// Functionality for adding products to the cart
document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.add-to-cart');
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Product added to cart!');
        });
    });
});

// Additional JavaScript for the blog or other functionalities can be added here
