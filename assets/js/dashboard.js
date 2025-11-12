// =======================
// DASHBOARD.JS (Admin Side)
// =======================

// 🧱 1. Redirect to login if not logged in
if (!localStorage.getItem('isLoggedIn')) {
  window.location.href = 'login.html';
}

// 🧩 2. Get DOM references
const logoutBtn = document.getElementById('logoutBtn');
const ordersTable = document.getElementById('orderTableBody');

// 🚪 3. Logout handler
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('isLoggedIn');
  window.location.href = 'login.html?logout=' + Date.now();
});

// 📦 4. Render orders into dashboard table
function renderOrders() {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const noOrdersMsg = document.getElementById('noOrders');
  const orderTable = document.getElementById('orderTable');
  const ordersTable = document.getElementById('orderTableBody');

  ordersTable.innerHTML = '';

  if (orders.length === 0) {
    // No orders → hide table, show message
    noOrdersMsg.classList.remove('hidden');
    orderTable.classList.add('hidden');
    return;
  }

  // Orders exist → show table, hide message
  noOrdersMsg.classList.add('hidden');
  orderTable.classList.remove('hidden');

  orders.forEach((order, index) => {
    const row = document.createElement('tr');
    row.className = `border-b hover:bg-gray-50 transition ${order.status === 'Completed' ? 'bg-green-50' : ''}`;

    // Status badge
    const statusBadge = order.status === 'Completed'
      ? `<span class="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Completed</span>`
      : `<span class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">Pending</span>`;

    row.innerHTML = `
      <td class="p-2">${index + 1}</td>
      <td class="p-2">${order.customer}</td>
      <td class="p-2">£${order.total.toFixed(2)}</td>
      <td class="p-2">${order.time}</td>
      <td class="p-2 flex items-center gap-2">
        ${statusBadge}
        <select data-index="${index}" class="status-dropdown border border-gray-300 rounded p-1 text-sm">
          <option value="Pending" ${order.status === "Pending" ? "selected" : ""}>Pending</option>
          <option value="Completed" ${order.status === "Completed" ? "selected" : ""}>Completed</option>
        </select>
      </td>
    `;
    ordersTable.appendChild(row);
  });
}

// 🧹 Clear Completed Orders button
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
clearCompletedBtn.addEventListener('click', () => {
  let orders = JSON.parse(localStorage.getItem('orders')) || [];
  const remaining = orders.filter(o => o.status !== 'Completed');

  if (remaining.length === orders.length) {
    alert('No completed orders to clear.');
    return;
  }

  // Confirm action
  if (confirm('Are you sure you want to clear all completed orders?')) {
    localStorage.setItem('orders', JSON.stringify(remaining));
    alert('✅ Completed orders cleared.');
    renderOrders();
  }
});


// 💾 5. Save updated order statuses
ordersTable.addEventListener('change', (e) => {
  if (e.target.classList.contains('status-dropdown')) {
    const index = e.target.dataset.index;
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    // Update status
    orders[index].status = e.target.value;
    localStorage.setItem('orders', JSON.stringify(orders));

    // Re-render table to refresh colours & badges
    renderOrders();
  }
});

// 🚀 6. Initial render
renderOrders();
