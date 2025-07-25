# Advanced Routing API with Express.js

This project is a simple RESTful API built using **Express.js** that demonstrates advanced routing, middleware usage, and route modularization. It includes endpoints for managing products and users.

---

## 📁 Project Structure

├── routes/
│ ├── productRoutes.js
│ └── userRoutes.js
├── server.js
└── package.json


---

## 🚀 Features

- Modular routing with route prefixing
- Middleware logging for user routes
- Query parameters (e.g., filter products by category)
- Basic REST API (GET, POST)
- Sample endpoints for products and users
- JSON request body parsing

---

## 🛠️ Technologies Used

- Node.js
- Express.js

---

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

Root
GET / — Welcome message

Users
GET /api/users — Get all users

GET /api/users/:id — Get user by ID

POST /api/users — Create a new user

Products
GET /api/products — Get all products

GET /api/products?category=clothing — Filter products by category

GET /api/products/:id — Get product by ID

GET /api/products/:productId/reviews — Get reviews for a product

Products
json
Copy
Edit
[
  { "id": 1, "name": "phone", "category": "electronic" },
  { "id": 2, "name": "shirt", "category": "clothing" }
]

Users
json
Copy
Edit
[
  { "id": 1, "name": "ramesh" },
  { "id": 2, "name": "dinesh" }
]
