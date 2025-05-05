
# 💬 Vibin ChatApp

A modern full-stack real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.io. This project showcases live messaging, user authentication, and a sleek, responsive interface.

🔗 Live Demo: https://vibin-chatapp.onrender.com
💻 GitHub Repository: [Vibin ChatApp](https://github.com/viz-83/Vibin-ChatApp)

## 📷 Screenshots

### Login Page
![image](https://github.com/user-attachments/assets/4eebc2b8-62be-43cc-b25d-1e4a7c86e9d8)


### Sign Up Page
![image](https://github.com/user-attachments/assets/2461732d-bd28-4411-89b6-2803077a08b0)


### Chat Interface
![image](https://github.com/user-attachments/assets/f1c01d59-d453-4a2b-a11c-8e560bbe754e)


### User Profile
![image](https://github.com/user-attachments/assets/428aaeb9-7ed3-459a-ac8d-ebe459ffc6d1)


---

## 🚀 Features

💬 Real-time messaging with Socket.io  
🔐 JWT-based authentication (Register / Login / Logout)  
👥 Individual and group chat support  
🖥️ Responsive and modern UI  
🔎 Online/offline user status indicator  
📜 Message history stored in MongoDB  
📧 Email-based registration and login (optional for extension)  

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Tailwind CSS / CSS Modules
- Axios
- Context API + useReducer

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Socket.io
- JSON Web Tokens (JWT)
- dotenv, bcryptjs

### Deployment (Planned)
- Render (frontend + backend)
- MongoDB Atlas

---

## 📁 Folder Structure

```
Vibin-ChatApp/
🔺 backend/                # Express server
🔺   ├── controllers/
🔺   ├── models/
🔺   ├── routes/
🔺   ├── config/
🔺   └── server.js
🔺 frontend/               # React client
🔺   ├── src/
🔺   │   ├── components/
🔺   │   ├── pages/
🔺   │   ├── context/
🔺   │   └── App.js
🔺   ├── public/screenshots/
🔺   └── tailwind.config.js
```

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js and npm
- MongoDB (local or Atlas)

### 1. Clone the Repository
```bash
git clone https://github.com/viz-83/Vibin-ChatApp.git
cd Vibin-ChatApp
```

### 2. Install Dependencies

#### For Backend:
```bash
cd backend
npm install
```

#### For Frontend:
```bash
cd ../frontend
npm install
```

### 3. Environment Variables

Create a `.env` file in the `backend` folder with the following:

```
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

### 4. Run the App Locally

#### Backend:
```bash
cd backend
npm run dev
```

#### Frontend:
```bash
cd ../frontend
npm start
```

---

## 🤝 Contribution

Contributions are welcome! To contribute:

1. Fork the repository  
2. Create a new branch: `git checkout -b feature-name`  
3. Commit your changes: `git commit -m 'Add new feature'`  
4. Push to the branch: `git push origin feature-name`  
5. Open a Pull Request  

---

## 📄 License

This project is open-source under the MIT License.

---

## 🙌 Acknowledgments

Thanks to the open-source community and real-time communication tutorials that inspired this project.
