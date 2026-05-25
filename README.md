# online-food-ordering-system
A full-stack web application built using the **MERN (MongoDB, Express.js, React, Node.js)** architecture. This system manages restaurant menu items dynamically, calculates point-of-sale (POS) automated billing, retains comprehensive order history invoices, and offers an administrative control center for stock management.

---

## 🚀 Features
* **Dynamic Menu Interface:** Displays culinary items fetched directly from MongoDB document clusters.
* **Real-time Filter Search:** Instant client-side menu filters without browser page reloads.
* **Automated Kitchen Basket (Cart):** Tracks customer dishes and auto-calculates grand billing totals.
* **Live Sales Records:** Retains local operational invoice histories with accurate timestamps.
* **Administrative Controls:** Fully synchronized database management allowing admins to execute `HTTP DELETE` workflows.

---

## 🛠️ Tech Stack Used
* **Frontend:** React.js, Axios, HTML5, CSS3 (Inline styles)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (via Mongoose ODM)

---

## 💻 Installation & Setup Guide

Follow these steps to configure and run the project locally on your system:

### 1. Prerequisites
Make sure you have the following installed on your machine:
* [Node.js](https://nodejs.org/) (v16 or higher)
* [MongoDB Compass / Community Server](https://www.mongodb.com/try/download/community)

---

### 2. Backend Installation Setup
1. Open your terminal and navigate to the backend directory:
   ```bash
   cd backend
Install all required dependencies specified in package.json:

Bash
npm install
Open index.js and verify your MongoDB connection string:

JavaScript
mongoose.connect('mongodb://localhost:27017/foodOrderingDB')
Fire up the backend server:

Bash
node index.js
You should see a success log in the terminal: MongoDB Connected Successfully to foodOrderingDB...

3. Frontend Installation Setup
Open a new terminal window and navigate to the frontend folder:

Bash
cd frontend
Download all the front-end node modules:

Bash
npm install
Launch the React local development server:

Bash
npm run dev
Open your web browser and navigate to the provided local URL (Usually http://localhost:5173).

📂 Project Directory Structure
Plaintext
FoodOrderingSystem/
│
├── backend/
│   ├── index.js             # Main Express server and MongoDB connection
│   ├── package.json         # Backend dependencies list
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx          # Main React logic, interfaces, and core components
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json         # Frontend dependencies list
│   └── vite.config.js
│
└── README.md                # Project documentation guide
