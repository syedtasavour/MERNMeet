# MERNMeet Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Setup & Installation](#setup--installation)
4. [Development Guide](#development-guide)
5. [API Documentation](#api-documentation)
6. [Deployment Guide](#deployment-guide)
7. [Security Considerations](#security-considerations)
8. [Troubleshooting](#troubleshooting)

---

## 1. Project Overview
MERNMeet is a full-stack video calling application built using the MERN stack (MongoDB, Express.js, React, Node.js). It provides real-time video communication capabilities with features like:
- Real-time video/audio calls
- User authentication
- Secure communication
- Responsive design

### Tech Stack:
- **Frontend**: React.js with Vite
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Real-time Communication**: Socket.io
- **UI Framework**: Material-UI

---

## 🌟 Show Your Support
If you found this project helpful, give it a ⭐️!

## 2. Architecture

### Project Structure:
```
MERNMeet/
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── contexts/      # React contexts
│   │   ├── utils/         # Utility functions
│   │   ├── styles/        # CSS and styling
│   │   └── conf/          # Configuration files
│   └── ...
│
├── backend/               # Node.js backend server
│   ├── src/
│   │   ├── controllers/   # Business logic
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── middlewares/   # Custom middleware
│   │   └── utils/         # Helper functions
│   └── ...
│
└── docker-compose.yaml    # Docker composition file
```

---

## 3. Setup & Installation

### Prerequisites:
- Node.js (v22 or higher)
- MongoDB
- Docker and Docker Compose

### Local Development Setup:
```bash
# Clone the repository
git clone https://github.com/syedtasavour/MERNMeet.git
cd MERNMeet

# Frontend setup
cd frontend
npm install
cp .env.sample .env

# Backend setup
cd ../backend
npm install
cp .env.sample .env

# Start development servers
# Terminal 1 (Frontend)
cd frontend && npm run dev

# Terminal 2 (Backend)
cd backend && npm run dev
```

### Docker Setup:
```bash
# Build and start all services
docker-compose up --build

# Stop services
docker-compose down
```

---

## 4. Development Guide

### Frontend Development:
- Built with React + Vite
- Uses Material-UI for components
- State management with React Context
- Real-time communication via Socket.io client

#### Key Frontend Dependencies:
- `@mui/material`: UI components
- `socket.io-client`: Real-time communication
- `react-router-dom`: Routing
- `axios`: HTTP client

### Backend Development:
- Express.js REST API
- MongoDB with Mongoose
- Socket.io for WebSocket connections
- JWT authentication

#### Key Backend Dependencies:
- `express`: Web framework
- `mongoose`: MongoDB ODM
- `socket.io`: WebSocket server
- `bcrypt`: Password hashing

---

## 5. API Documentation

### Authentication Endpoints:
```bash
POST /api/auth/register - User registration
POST /api/auth/login    - User login
GET  /api/auth/profile  - Get user profile
```

### Video Call Endpoints:
```bash
POST /api/calls/create  - Create a new call
GET  /api/calls/:id     - Get call details
POST /api/calls/join    - Join an existing call
```

### WebSocket Events:
```bash
'join-room'     - Join a video call room
'user-connected' - New user joined
'user-disconnected' - User left
'chat-message'   - Chat message
```

---

## 6. Deployment Guide

### AWS Deployment:

#### Prerequisites:
- AWS Account
- AWS CLI configured
- ECR repositories created
- ECS cluster setup

#### Steps:
1. **Build and Push Docker Images:**
```bash
# Login to AWS ECR
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <aws-account>.dkr.ecr.<region>.amazonaws.com

# Build and tag images
docker build -t mernmeet-frontend ./frontend
docker build -t mernmeet-backend ./backend

# Push to ECR
docker push <aws-account>.dkr.ecr.<region>.amazonaws.com/mernmeet-frontend:latest
docker push <aws-account>.dkr.ecr.<region>.amazonaws.com/mernmeet-backend:latest
```

2. **ECS Service Setup:**
   - Create task definitions for frontend and backend
   - Configure security groups
   - Set up Application Load Balancer
   - Configure environment variables

3. **MongoDB Setup:**
   - Use MongoDB Atlas or set up EC2 instance with MongoDB

4. **Domain and SSL:**
   - Configure Route 53 for domain management
   - Set up ACM certificate
   - Configure ALB listeners

---

## 7. Security Considerations

1. **Authentication & Authorization:**
   - JWT-based authentication
   - Password hashing with bcrypt
   - Role-based access control

2. **Data Security:**
   - HTTPS/WSS for all communications
   - Environment variable protection
   - Input validation and sanitization

3. **Infrastructure Security:**
   - AWS security groups configuration
   - Network isolation
   - Regular security updates

4. **Video Call Security:**
   - Encrypted WebRTC connections
   - Room access control
   - Participant authentication

---

## 8. Troubleshooting

### Common Issues:

1. **Connection Issues:**
   - Check WebSocket connection
   - Verify CORS configuration
   - Check network security groups

2. **Video/Audio Issues:**
   - Verify browser permissions
   - Check WebRTC configuration
   - Inspect network connectivity

3. **Database Issues:**
   - Verify MongoDB connection
   - Check authentication credentials
   - Inspect database logs

4. **Docker Issues:**
   - Check container logs
   - Verify network configuration
   - Inspect volume mounts

---

## 👤 Author
**Syed Tasavour**  
- GitHub: [syedtasavour](https://github.com/syedtasavour)  
- Portfolio: [syedtasavour.me](https://syedtasavour.me)

## 📞 Contact
For any queries or support:
- Email: `help@syedtasavour.me`
- GitHub Issues: [Create an issue](https://github.com/syedtasavour/MERNMeet/issues)

---

<div align="center">
  <sub>Built with passion (and a lot of coffee) by Syed Tasavour.</sub>
</div>

