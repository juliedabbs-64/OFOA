/* ============================================================
   SIMPLE, RELIABLE CART SYSTEM FOR FOODHUB
   Stored in: localStorage.cart
   Works with: menu.html, checkout.html, staff.html
============================================================ */

/* Load the cart from storage */
export function getCart() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
}

/* Save cart back to storage */
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

/* Add item to cart */
export function addToCart(id) {
    const menuData = JSON.parse(localStorage.getItem("menuData") || "[]");
    const dish = menuData.find(i => i.id === id);

    if (!dish) {
        alert("Error: Dish not found.");
        return;
    }

    const cart = getCart();
    const existing = cart.find(i => i.id === id);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            id: dish.id,
            name: dish.name,
            price: dish.price,
            qty: 1
        });
    }

    saveCart(cart);
    alert(`${dish.name} added to cart.`);
}

/* Reduce quantity or remove item */
export function removeFromCart(id) {
    let cart = getCart();
    const item = cart.find(i => i.id === id);

    if (!item) return;

    if (item.qty > 1) {
        item.qty -= 1;
    } else {
        cart = cart.filter(i => i.id !== id);
    }

    saveCart(cart);
}

/* Completely delete item */
export function deleteFromCart(id) {
    let cart = getCart();
    cart = cart.filter(i => i.id !== id);
    saveCart(cart);
}

/* Empty the cart (used after checkout) */
export function clearCart() {
    localStorage.removeItem("cart");
}
