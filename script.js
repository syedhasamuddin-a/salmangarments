 // ===================== script.js =====================
let cartCount = 0;

function addToCart(id, name, price, image) {
  let product = cart.find(item => item.id === id);

  if (product) {
    product.quantity += 1;
  } else {
    cart.push({
      id,
      name,
      price,
      image,
      quantity: 1
    });
  }

function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}
