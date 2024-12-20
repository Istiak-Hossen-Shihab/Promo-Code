// Select required elements
const memoryCostElement = document.getElementById('memory-cost');
const storageCostElement = document.getElementById('storage-cost');
const deliveryCostElement = document.getElementById('delivery-cost');
const totalPriceElement = document.getElementById('total-price');
const userPaymentElement = document.getElementById('user-payment');
const applyButton = document.getElementById('apply-btn');
const inputField = document.getElementById('input-field');

// Function to calculate total price
function calculateTotalPrice() {
  const basePrice = 1299;
  const memoryCost = parseInt(memoryCostElement.innerText) || 0;
  const storageCost = parseInt(storageCostElement.innerText) || 0;
  const deliveryCost = parseInt(deliveryCostElement.innerText) || 0;

  const totalPrice = basePrice + memoryCost + storageCost + deliveryCost;
  totalPriceElement.innerText = totalPrice;
  userPaymentElement.innerText = totalPrice;
}

// Apply promo code
applyButton.addEventListener('click', () => {
  const promoCode = inputField.value.trim().toLowerCase();

  if (promoCode === 'ostad') {
    const currentTotal = parseInt(totalPriceElement.innerText);
    const discountedPrice = Math.round(currentTotal * 0.9); // Apply 10% discount
    totalPriceElement.innerText = discountedPrice;
    userPaymentElement.innerText = discountedPrice;
    alert('Promo code applied! 10% discount added.');
  } else {
    alert('Invalid promo code. Please try again.');
  }
  inputField.value = ''; // Clear the input field
});

// Initial calculation to ensure everything starts correctly
calculateTotalPrice();
