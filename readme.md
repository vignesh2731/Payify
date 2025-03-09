# Payify - Simplified Money Transfers  

Payify is a secure and modern payment transfer application built using **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.  
The app allows users to:  
- **Signup/Login** using their email and password.  
- **Send money to other users** within seconds.  
- **Check their account balance** in real-time.  
- **Logout securely** from the application.  

---

## Tech Stack Used  
| Technology      | Purpose                                                        |  
|-----------------|----------------------------------------------------------------|  
| **React.js**     | Frontend (UI/UX)                                              |  
| **Node.js**      | Backend Server                                                |  
| **Express.js**   | Backend API Creation                                          |  
| **MongoDB Atlas**| Cloud Database                                                |  
| **JWT (Json Web Token)** | User Authentication (Login/Signup)                   |  
| **Axios**        | Frontend API Requests                                         |  
| **Tailwind CSS** | Beautiful Responsive UI                                       |  

---

## Features  
### 1. Signup/Login Functionality  
- Users can easily sign up using their email, password, first name, and last name.  
- After signup, users are automatically logged in.  

### 2. JWT Token Authentication  
- On successful login/signup, a **JWT Token** is generated and stored in `localStorage`.  
- Only authenticated users can access the dashboard.  

### 3. Real-Time Balance Check  
- Once logged in, users can view their **real-time balance** fetched from the MongoDB database.  
- The balance is formatted up to **2 decimal places**.  

### 4. Money Transfer Between Users  
- Users can transfer money to any other user by providing their **User ID**.  
- The app ensures the sender has **sufficient balance** before processing the transfer.  

### 5. Transaction Safety (MongoDB Sessions)  
- The app uses **MongoDB Transactions** to prevent inconsistent balance updates.  
- If any failure occurs during a transfer, the transaction is **rolled back**.  

### 6. Logout Feature  
- The app provides a **logout button** to sign out and clear the token.  
- On logout, users are redirected to the **Sign In page**.  

### 7. Protected Routes  
- Users **can't access the dashboard** without logging in.  
- If a user manually enters `/signup` or `/signin` after login, they are redirected to the dashboard.  

---

## Folder Structure  
The project has a clean and organized folder structure:  
