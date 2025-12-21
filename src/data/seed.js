const users = [
    { id: 1, email: "admin@foodhub.com", password: "Admin123!", role: "staff" },
    { id: 2, email: "client@foodhub.com", password: "Client123!", role: "client" }
];

if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
}
