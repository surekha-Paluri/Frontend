function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <p>You have no items in your shopping cart.</p>
      <a href="index.html">Click here to continue shopping.</a>
    `;
    document.getElementById("total").innerText = "";
    document.getElementById("cart-items").innerHTML += `    `;
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-img">
      <div class="cart-info">
        <h4>${item.name}</h4>
        <p>₹${item.price}</p>
        <p>Quantity: ${item.qty}</p>
        <p>Size: ${item.size}</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
    cartItems.appendChild(div);
    total += item.price * (item.qty || 1);
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function checkout() {
  alert("Proceeding to checkout...");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

loadCart();
