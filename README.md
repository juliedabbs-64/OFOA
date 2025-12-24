# FoodHUB – Online Food Ordering Application

## Overview
FoodHUB is a client-side web application designed to simulate an online food ordering system. It includes a customer-facing menu, a cart and checkout flow, a staff dashboard for order processing, and an admin interface for managing menu items. All data is stored in localStorage, allowing the application to run entirely in the browser.

## Features

### Customer Features
- View the full menu with cuisine filters
- Dish details displayed in a modal, including nutrition, allergens and dietary information
- Add items to the cart, update quantities, remove items
- Checkout form with validation
- Orders saved into localStorage once submitted

### Staff Features
- View orders grouped by status (Paid, In Progress, Completed, Repeat Order)
- Move orders through workflow stages
- Repeat or archive completed orders
- Restart repeat orders (treated as Paid)

### Admin Features
- View all menu items in a table
- Add new dishes
- Edit existing dishes
- Delete dishes
- All CRUD operations saved to localStorage

### Authentication
- Simple role-based login system
- Customer, Staff, and Admin roles supported
- Access to pages restricted based on role

## Technologies Used
- HTML5  
- CSS3  
- JavaScript (modular structure)  
- localStorage  

## How to Run
1. Open the project folder in VS Code.
2. Right-click **index.html**.
3. Select **Open with Live Server**.
4. Use the navigation menu to explore the application.

## Folder Structure

# FoodHUB – Online Food Ordering Application

## Overview
FoodHUB is a client-side web application designed to simulate an online food ordering system. It includes a customer-facing menu, a cart and checkout flow, a staff dashboard for order processing, and an admin interface for managing menu items. All data is stored in localStorage, allowing the application to run entirely in the browser.

## Features

### Customer Features
- View the full menu with cuisine filters
- Dish details displayed in a modal, including nutrition, allergens and dietary information
- Add items to the cart, update quantities, remove items
- Checkout form with validation
- Orders saved into localStorage once submitted

### Staff Features
- View orders grouped by status (Paid, In Progress, Completed, Repeat Order)
- Move orders through workflow stages
- Repeat or archive completed orders
- Restart repeat orders (treated as Paid)

### Admin Features
- View all menu items in a table
- Add new dishes
- Edit existing dishes
- Delete dishes
- All CRUD operations saved to localStorage

### Authentication
- Simple role-based login system
- Customer, Staff, and Admin roles supported
- Access to pages restricted based on role

## Technologies Used
- HTML5  
- CSS3  
- JavaScript (modular structure)  
- localStorage  

## How to Run
1. Open the project folder in VS Code.
2. Right-click **index.html**.
3. Select **Open with Live Server**.
4. Use the navigation menu to explore the application.

## Folder Structure

Main Files:
- index.html
- menu.html
- login.html
- admin.html
- staff.html
- checkout.html

Folders:
- assets/images/hero
- assets/images/menu
- data/menuData.js
- js/auth.js
- js/cart.js
- js/validation.js
- css/style.css



## User Roles
- **Customer** – browse menu, add items to cart, checkout  
- **Staff** – manage order workflow  
- **Admin** – update, add, and delete menu items  

## Future Improvements

### Backend Integration
Replace localStorage with a real backend using Node.js and a database such as MongoDB or MySQL. This would allow:
- Secure authentication
- Multi-device access
- Proper order storage

### Payment System
Implement real checkout functionality with:
- Payment providers (Stripe, PayPal)
- Refund handling
- Order receipts

### Improved Order Management
- Timers for order preparation
- Partial repeat (reorder specific items)
- Customer order history

### Admin Analytics Dashboard
Add reporting features such as:
- Most popular dishes
- Revenue over time
- Customer spend analysis
- Ingredient cost vs sale price

### Stock and Ingredient Management
- Track stock levels
- Automatic deductions based on orders
- Supplier management

### Enhanced UI/UX
- Mobile-first responsive design
- Increased accessibility support
- Dark/light mode toggle

## Conclusion
FoodHUB successfully demonstrates the core features of an online food ordering platform and meets the assignment requirements. The project showcases DOM manipulation, modular JavaScript, event handling, state management, and the use of localStorage for persistent data. Future improvements could expand the system into a fully functional commercial application.
