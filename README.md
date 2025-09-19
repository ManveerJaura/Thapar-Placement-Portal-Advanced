# 🎓 Thapar Placement Portal (Dockerized)

A full-stack **MERN-based Placement Management System** built to streamline the student recruitment process at Thapar.  
This project is fully **containerized with Docker** and can be deployed anywhere with ease.

---

## 🚀 Features

### 👩‍🎓 Student Side
- Register and login securely
- View job postings
- Apply for jobs
- Track applications

### 🏢 Recruiter Side
- Post job openings
- View student applications
- Post announcements

### ⚙️ System Features
- Role-based access control
- JWT-based authentication
- MongoDB for database management
- Dockerized services for portability

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Vite, Tailwind CSS  
- **Backend**: Node.js, Express.js, JWT Auth  
- **Database**: MongoDB, Mongo Express (UI for DB)  
- **Containerization**: Docker, Docker Compose  
- **Deployment**:Docker Hub (Images)  

---

## 📦 Project Structure

.
├── client/ # React frontend
├── server/ # Express backend
├── docker-compose.yml # Compose file to run all services
├── .gitignore
└── README.md


---

## ⚡ Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/ManveerJaura/Thapar-Placement-Portal-Advanced.git
cd Thapar-Placement-Portal-Dockerized

2️⃣ Environment Variables

Create a .env file inside server/:
MONGO_URI=mongodb://mongo:27017/test
JWT_SECRET=your_jwt_secret_here

🐳 Run with Docker Compose
docker-compose up --build

📤 Docker Hub Images

Frontend: manveerjaura/tpp-frontend
Backend: manveerjaura/tpp-backend
