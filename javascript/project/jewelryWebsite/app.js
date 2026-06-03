const products = [
  { id: 1, name: "Gold Necklace", price: 12000, discount: 67, image: "images/necklace.jpg" },
  { id: 2, name: "Diamond Earrings", price: 8000, discount: 76, image: "images/ring.jpg" },
  { id: 3, name: "Pearl Set", price: 15000, discount: 67, image: "images/necklace.jpg" },
  { id: 4, name: "Designer Bracelet", price: 5000, discount: 86, image: "images/bracelet.jpg" }
];

const productList = document.getElementById("products");
const cartCount = document.getElementById("cart-count");

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartCount.textContent = cart.length;
}

function displayProducts(maxPrice = 20000) {
  productList.innerHTML = "";
  products.filter(p => p.price <= maxPrice).forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <span class="discount">-${product.discount}%</span>
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let product = products.find(p => p.id === id);
  // Create a new cart item with quantity and size
  let cartItem = {
    ...product,           // copy product details
    qty: 1,               // default quantity
    size: "16.40 MM"      // default size (or prompt user to choose)
  };  
  cart.push(cartItem);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${product.name} added to cart!`);
}

document.getElementById("priceRange").addEventListener("input", (e) => {
  document.getElementById("priceValue").textContent = e.target.value;
  displayProducts(e.target.value);
});

updateCartCount();
displayProducts();
