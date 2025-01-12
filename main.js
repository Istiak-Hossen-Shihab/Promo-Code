// DOM Elements
const promoCodeInput = document.getElementById('promo-code');
const applyCodeBtn = document.getElementById('apply-code-btn');
const promoMessage = document.getElementById('promo-message');
const subtotalElement = document.getElementById('subtotal');
const discountElement = document.getElementById('discount');
const totalElement = document.getElementById('total');

// Initial values
const subtotal = 1299;
let discount = 0;

// Function to calculate total
function calculateTotal() {
  const total = subtotal - discount;
  totalElement.innerText = total.toFixed(2);
}

// Promo code validation
applyCodeBtn.addEventListener('click', () => {
  const promoCode = promoCodeInput.value.trim().toLowerCase();

  if (promoCode === 'ostad10') {
    discount = subtotal * 0.1; // 10% discount
    promoMessage.innerText = 'Promo code applied: 10% discount!';
    promoMessage.className = 'text-success';
  } else if (promoCode === 'ostad5') {
    discount = subtotal * 0.05; // 5% discount
    promoMessage.innerText = 'Promo code applied: 5% discount!';
    promoMessage.className = 'text-success';
  } else {
    discount = 0;
    promoMessage.innerText = 'Invalid promo code. Please try again.';
    promoMessage.className = 'text-danger';
  }

  // Update the discount and total
  discountElement.innerText = discount.toFixed(2);
  calculateTotal();
  promoCodeInput.value = ''; // Clear input
});
