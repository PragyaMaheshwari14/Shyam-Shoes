# Urban Store

## 🚀 Project Overview

This is a full-stack e-commerce platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The platform allows users to browse products, add them to the cart, and complete the checkout process. Admins can manage products, orders, and users through a dedicated dashboard.

## 🛠️ Tech Stack

- **Frontend:** React.js, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Cloud Storage:** Cloudinary

## 📂 Folder Structure

```
Urban Store
│── admin/         # Admin dashboard
│── frontend/      # React.js frontend
│── backend/       # Express.js backend
│── .env           # Environment variables
│── package.json   # Dependencies and scripts
│── README.md      # Project documentation
```

## 🚀 Features

- User authentication (register, login, logout)
- Product listing with categories and filters
- Shopping cart functionality
- Secure checkout process
- Order management
- Admin dashboard for managing products & orders
- Responsive UI/UX

## 🔧 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/ecommerce-project.git
cd ecommerce-project
```

### 2️⃣ Install dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file in the root of the backend folder and add:

```
MONGODB_URI = ""
CLOUDINARY_API_KEY = ""
CLOUDINARY_SECRET_KEY = ""
CLOUDINARY_NAME = ""
JWT_SECRET = ""
ADMIN_EMAIL = ""
ADMIN_PASSWORD = ""
```

### 4️⃣ Run the project

#### Start Backend Server

```bash
cd backend
npm start
```

#### Start Frontend Server

```bash
cd frontend
npm run dev
```

## 🌍 Live Demo

[Live Project Link](https://urban-frontend-eta.vercel.app/) 

## 🛠️ Contributing

Feel free to fork the repository and submit pull requests!


