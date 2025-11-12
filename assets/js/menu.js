// Sample menu data
const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1601924638867-3ec3a9c8d77b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Veggie Burger",
    price: 7.49,
    image: "https://images.unsplash.com/photo-1565958011705-44e211b115a6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Pasta Alfredo",
    price: 9.25,
    image: "https://images.unsplash.com/photo-1617196037302-34c493c11b7b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Caesar Salad",
    price: 6.50,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Chocolate Brownie",
    price: 4.00,
    image: "https://images.unsplash.com/photo-1613145993482-3e3d7d80a8b9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Lemonade",
    price: 2.50,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80"
  },
];

const menuSection = document.getElementById("menu");
const cartList = document.getElementById("cartItems");
const totalDisplay = document.getElementById("cartTotal");
const orderBtn = document.getElementById("placeOrderBtn");

let cart = [];

// --- 1️⃣ Render menu items ---
menuItems.forEach(item => {
  const card = document.createElement("div");
  card.className = "border p-4 rounded shadow-sm flex flex-col justify-between";
card.innerHTML = `
  <img src="${item.image}" alt="${item.name}" 
       class="rounded-lg mb-3 w-full h-40 object-cover">
    <div class="flex-1">
      <h3 class="text-lg font-semibold mb-1">${item.name}</h3>
      <p class="mb-2 text-gray-700">£${item.price.toFixed(2)}</p>
    </div>
    <button class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            data-id="${item.id}">
      Add to Cart
    </button>
  `;
  menuSection.appendChild(card);
});

// --- 2️⃣ Handle Add to Cart ---
menuSection.addEventListener("click", e => {
  if (e.target.matches("button[data-id]")) {
    const id = Number(e.target.dataset.id);
    const item = menuItems.find(i => i.id === id);

    const existing = cart.find(i => i.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...item, qty: 1 });
    }

    renderCart();
  }
});

// --- 3️⃣ Render Cart ---
function renderCart() {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach(i => {
    total += i.price * i.qty;
    const li = document.createElement("li");
    li.className = "flex justify-between border-b py-1";
    li.innerHTML = `
      <span>${i.name} x${i.qty}</span>
      <span>£${(i.price * i.qty).toFixed(2)}</span>
    `;
    cartList.appendChild(li);
  });

  totalDisplay.textContent = `Total: £${total.toFixed(2)}`;
  orderBtn.disabled = cart.length === 0;
}

// --- 4️⃣ Place Order ---
orderBtn.addEventListener("click", () => {
  if (cart.length === 0) return;

  const order = {
    customer: "Guest",
    items: [...cart], // 👈 include the actual cart items
    total: cart.reduce((sum, i) => sum + i.price * i.qty, 0),
    time: new Date().toLocaleString(),
    status: "Pending",
  };

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  cart = [];
  renderCart();
  alert("✅ Order placed!");
});
