document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const buyButtons = document.querySelectorAll('.buy-button');
    const paymentForm = document.getElementById('payment-form');
    const productInput = document.getElementById('product');
    const priceInput = document.getElementById('price');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const price = button.getAttribute('data-price');

            productInput.value = product;
            priceInput.value = price;

            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    paymentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const postcode = document.getElementById('postcode').value;
        const product = productInput.value;
        const price = priceInput.value;

        // Proceed to PayPal with the collected information
        const paypalUrl = `https://www.paypal.me/EmillySmith96/${price}`;
        window.location.href = paypalUrl;
    });
});
