
export function initializeCart() {
  const cartIcon = document.querySelector('.cart_icon');
  const cartDropdown = document.querySelector('.cart_dropdown');

  function toggleCart() {
    cartDropdown.classList.toggle('active');
  }

  cartIcon.addEventListener('click', function (e) {
    e.preventDefault();
    toggleCart();
  });



  document.addEventListener('click', function (e) {
    if (!cartIcon.contains(e.target) && !cartDropdown.contains(e.target)) {
      cartDropdown.classList.remove('active');
    }
  });

  cartDropdown.addEventListener('click', function (e) {
    e.stopPropagation();
  });
}