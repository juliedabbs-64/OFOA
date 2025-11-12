// 🧹 Clear login form on fresh load or after logout
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  if (params.has('logout')) {
    // Fresh logout or forced reload
    localStorage.removeItem('isLoggedIn');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const error = document.getElementById('errorMessage');
    if (username) username.value = '';
    if (password) password.value = '';
    if (error) error.classList.add('hidden');
  }
});

// 🧭 Simple login validation script
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // stop the page from reloading

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMessage = document.getElementById('errorMessage');

  // Hardcoded admin credentials
  if (username === 'admin' && password === '1234') {
    // Save login flag to localStorage
    localStorage.setItem('isLoggedIn', 'true');
    // Redirect to dashboard
    window.location.href = 'dashboard.html';
  } else {
    // Show error message
    errorMessage.classList.remove('hidden');
  }
});
