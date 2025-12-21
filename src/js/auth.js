// src/js/auth.js

// Predefined users for the system
const USERS = [
    { email: "admin@gmail.com", password: "123", role: "admin" },
    { email: "staff@gmail.com", password: "123", role: "staff" }
];

// Login function
export function login(email, password) {
    const user = USERS.find(u => u.email === email && u.password === password);

    if (!user) {
        return { success: false, message: "Invalid email or password" };
    }

    // Save the logged-in user
    localStorage.setItem("currentUser", JSON.stringify(user));

    return { success: true, user };
}

// Logout
export function logout() {
    localStorage.removeItem("currentUser");
}

// Get logged in user
export function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
}

// Protect admin pages
export function requireAdmin() {
    const user = getCurrentUser();
    if (!user || user.role !== "admin") {
        window.location.href = "login.html";
    }
}

// Protect staff pages
export function requireStaffOrAdmin() {
    const user = getCurrentUser();
    if (!user || (user.role !== "staff" && user.role !== "admin")) {
        window.location.href = "login.html";
    }
}
