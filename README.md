# ⚙️ Real-Time Chat Application (Backend)

This is the **backend** of a **scalable, production-ready real-time chat application** built using the **MERN stack, RabbitMQ, Redis, and microservices architecture**.  

The backend is **microservices-driven**, supports **OTP-based authentication**, includes **Redis caching** for performance, and is fully **Dockerized and deployed on AWS** for production scalability.  

---

## 🌟 Key Features

- 🔐 **OTP-based Email Authentication**  
- 💬 **Real-time Messaging** powered by **Socket.IO**  
- 📡 **Event-driven Microservices Architecture** using **RabbitMQ**  
- ⚡ **Redis Caching** for optimized performance  
- 🟢 **User Presence & Activity Tracking**  
  - Online / Offline Status  
  - Real-time Typing Indicators  
  - Seen At Timestamps  
  - Sent At Timestamps  
- 🛢 **MongoDB Database** for scalable storage  
- 🐳 **Dockerized Services** for portability and deployment  
- ☁️ **AWS Deployment Ready** (ECS / EC2 / EKS)  
- 🧩 **Scalable & Modular Backend Codebase**  

---

## 🛠️ Tech Stack

- **Backend Framework:** Node.js, Express.js  
- **Database:** MongoDB  
- **Message Broker:** RabbitMQ  
- **Caching Layer:** Redis  
- **Real-time Engine:** Socket.IO  
- **Architecture:** Microservices  
- **Containerization:** Docker  
- **Deployment:** AWS  

---

## 🏗️ Microservices Overview

The backend is split into **independent microservices** for scalability and maintainability:

- **User Service (`/user`)** → Handles OTP-based email authentication and user management.  
- **Chat Service (`/chat`)** → Manages chat rooms, conversations, and messages.  
- **Mail Service (`/mail`)** → Sends OTPs, message notifications, and system alerts.  

All services communicate via **RabbitMQ** and share data through **MongoDB** and **Redis**.

---
## 📂 Folder Structure

```bash
backend/
├── chat/        # Chat microservice
├── mail/        # Mail/Notification microservice
├── user/        # User/Auth microservice
└── .gitignore


---

## 🛠️ Getting Started


```bash
1️⃣ Clone the Repository
git clone https://github.com/stud-manasbiswas/CHAT-APP-BACKEND.git

2️⃣ Install Dependencies (for each microservice)
cd chat && npm install
cd ../mail && npm install
cd ../user && npm install

⚡ Running in Development
Each service can be started individually with:
cd chat && npm run dev
cd ../mail && npm run dev
cd ../user && npm run dev

🚀 Production Build & Start
For production, build and start each service:
cd chat && npm run build && npm start
cd ../mail && npm run build && npm start
cd ../user && npm run build && npm start
