// src/data/menuData.js

const menuData = [
    // 🇯🇵 JAPAN
    {
        id: "japan-1",
        name: "Salmon Maki Rolls",
        cuisine: "japanese",
        image: "../assets/images/menu/Japan-1.jpg",
        price: 14.50,
        description: "Fresh salmon and cucumber wrapped in premium sushi rice and nori, served with soy and wasabi.",
        nutrition: { calories: 320, protein: 18, fat: 5, carbs: 48 },
        allergens: ["Fish", "Soy"],
        dietary: ["Low Fat"]
    },
    {
        id: "japan-2",
        name: "Tonkotsu Ramen",
        cuisine: "japanese",
        image: "../assets/images/menu/Japan-2.jpg",
        price: 16.00,
        description: "Rich pork broth, slow-braised chashu, soft egg, scallions and noodles.",
        nutrition: { calories: 550, protein: 28, fat: 22, carbs: 62 },
        allergens: ["Eggs", "Gluten", "Soy"],
        dietary: []
    },
    {
        id: "japan-3",
        name: "Tempura & Nigiri Platter",
        cuisine: "japanese",
        image: "../assets/images/menu/Japan-3.jpg",
        price: 19.00,
        description: "Crispy tempura prawns paired with handcrafted nigiri and dipping sauce.",
        nutrition: { calories: 480, protein: 24, fat: 16, carbs: 58 },
        allergens: ["Shellfish", "Fish", "Gluten"],
        dietary: []
    },

    // 🇨🇳 CHINA
    {
        id: "china-1",
        name: "Dim Sum Selection",
        cuisine: "chinese",
        image: "../assets/images/menu/China-1.jpg",
        price: 11.00,
        description: "Steamed dumplings filled with pork, vegetables and spices—served bamboo-fresh.",
        nutrition: { calories: 260, protein: 14, fat: 8, carbs: 32 },
        allergens: ["Gluten", "Soy"],
        dietary: []
    },
    {
        id: "china-2",
        name: "Char Siu Platter",
        cuisine: "chinese",
        image: "../assets/images/menu/China-2.jpg",
        price: 15.00,
        description: "Signature Cantonese BBQ pork with vegetables and dipping sauces.",
        nutrition: { calories: 520, protein: 32, fat: 20, carbs: 48 },
        allergens: ["Soy"],
        dietary: ["High Protein"]
    },
    {
        id: "china-3",
        name: "Hotpot Bowl",
        cuisine: "chinese",
        image: "../assets/images/menu/China-3.jpg",
        price: 17.50,
        description: "Aromatic broth simmered with meats, vegetables and noodles.",
        nutrition: { calories: 480, protein: 26, fat: 16, carbs: 60 },
        allergens: ["Soy", "Gluten"],
        dietary: []
    },

    // 🇮🇳 INDIA
    {
        id: "india-1",
        name: "Tandoori Chicken Curry",
        cuisine: "indian",
        image: "../assets/images/menu/India-1.jpg",
        price: 13.00,
        description: "Clay-oven roasted chicken simmered in rich tomato and spice gravy.",
        nutrition: { calories: 540, protein: 34, fat: 22, carbs: 46 },
        allergens: ["Dairy"],
        dietary: []
    },
    {
        id: "india-2",
        name: "Hyderabadi Biryani",
        cuisine: "indian",
        image: "../assets/images/menu/India-2.jpg",
        price: 14.00,
        description: "Fragrant basmati rice layered with marinated spiced chicken.",
        nutrition: { calories: 610, protein: 30, fat: 18, carbs: 78 },
        allergens: ["Dairy"],
        dietary: []
    },
    {
        id: "india-3",
        name: "Samosa Plate",
        cuisine: "indian",
        image: "../assets/images/menu/India-3.jpg",
        price: 8.50,
        description: "Golden fried pastries filled with potato, peas and aromatic spices.",
        nutrition: { calories: 420, protein: 8, fat: 22, carbs: 48 },
        allergens: ["Gluten"],
        dietary: ["Vegetarian"]
    },

    // 🇮🇹 ITALY
    {
        id: "italy-1",
        name: "Margherita Pizza",
        cuisine: "italian",
        image: "../assets/images/menu/Italy-1.jpg",
        price: 10.50,
        description: "Stone-baked classic with buffalo mozzarella, basil and rich tomato sauce.",
        nutrition: { calories: 690, protein: 24, fat: 22, carbs: 92 },
        allergens: ["Gluten", "Dairy"],
        dietary: ["Vegetarian"]
    },
    {
        id: "italy-2",
        name: "Lasagna al Forno",
        cuisine: "italian",
        image: "../assets/images/menu/Italy-2.jpg",
        price: 14.50,
        description: "Oven-baked layers of pasta, meat ragù and béchamel.",
        nutrition: { calories: 780, protein: 32, fat: 38, carbs: 72 },
        allergens: ["Gluten", "Dairy"],
        dietary: []
    },
    {
        id: "italy-3",
        name: "Risotto Parmigiano",
        cuisine: "italian",
        image: "../assets/images/menu/Italy-3.jpg",
        price: 12.00,
        description: "Creamy parmesan risotto prepared with rich stock and butter.",
        nutrition: { calories: 630, protein: 18, fat: 20, carbs: 88 },
        allergens: ["Dairy"],
        dietary: ["Vegetarian"]
    },

    // 🇺🇸 AMERICA
    {
        id: "america-1",
        name: "Gourmet Burger",
        cuisine: "american",
        image: "../assets/images/menu/America-1.jpg",
        price: 15.00,
        description: "Premium beef patty with melted cheese, onions and fries.",
        nutrition: { calories: 840, protein: 40, fat: 46, carbs: 68 },
        allergens: ["Gluten", "Dairy"],
        dietary: []
    },
    {
        id: "america-2",
        name: "BBQ Pork Ribs",
        cuisine: "american",
        image: "../assets/images/menu/America-2.jpg",
        price: 18.50,
        description: "Slow-cooked ribs glazed in smoky barbecue sauce.",
        nutrition: { calories: 920, protein: 52, fat: 48, carbs: 42 },
        allergens: [],
        dietary: ["High Protein"]
    },
    {
        id: "america-3",
        name: "Mac & Cheese Skillet",
        cuisine: "american",
        image: "../assets/images/menu/America-3.jpg",
        price: 11.00,
        description: "Creamy three-cheese macaroni baked to golden perfection.",
        nutrition: { calories: 760, protein: 22, fat: 38, carbs: 78 },
        allergens: ["Gluten", "Dairy"],
        dietary: ["Vegetarian"]
    },

    // 🇲🇽 MEXICO
    {
        id: "mexico-1",
        name: "Tacos al Pastor",
        cuisine: "mexican",
        image: "../assets/images/menu/Mexico-1.jpg",
        price: 12.00,
        description: "Spit-grilled pork with pineapple, salsa and corn tortillas.",
        nutrition: { calories: 430, protein: 22, fat: 18, carbs: 48 },
        allergens: [],
        dietary: ["Gluten Free"]
    },
    {
        id: "mexico-2",
        name: "Mexican Bean Bowl",
        cuisine: "mexican",
        image: "../assets/images/menu/Mexico-2.jpg",
        price: 10.00,
        description: "Comforting black bean stew with spices and tomato.",
        nutrition: { calories: 380, protein: 14, fat: 6, carbs: 60 },
        allergens: [],
        dietary: ["Vegan", "Gluten Free"]
    },
    {
        id: "mexico-3",
        name: "Chicken Enchiladas",
        cuisine: "mexican",
        image: "../assets/images/menu/Mexico-3.jpg",
        price: 14.00,
        description: "Oven-baked tortillas stuffed with chicken and topped with cheese.",
        nutrition: { calories: 620, protein: 36, fat: 22, carbs: 70 },
        allergens: ["Dairy", "Gluten"],
        dietary: []
    }
];

export default menuData;
