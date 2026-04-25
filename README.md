# Acadify – Student Management System

Acadify is a full-stack web application designed to manage student data efficiently. It provides a clean UI and powerful backend to perform all CRUD operations seamlessly.

---

## Live Demo

🔗 https://acadify-app.netlify.app

---

## Features

-  Add new students  
-  View all students  
-  Update student details  
-  Delete student records  
-  Search functionality  
-  Fast and responsive UI  
-  Deployed on cloud  

---

## Tech Stack

### Frontend
- React.js
- CSS (Custom Styling)

### Backend
- Spring Boot (Java)
- REST APIs

### Database
- PostgreSQL (Render)

### Deployment
- Frontend: Netlify  
- Backend: Render  
- Version Control: Git & GitHub  

---

## Project Structure

```

student-management/
│
├── backend/          # Spring Boot Backend
│   ├── src/
│   ├── pom.xml
│   └── Dockerfile
│
├── frontend/         # React Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md

```
---

## Installation & Setup

### 1️⃣ Clone Repository

git clone https://github.com/yudhveersharma2206/student-management-system.git
cd student-management-system

---

### 2️⃣ Backend Setup

cd backend  
mvn clean install  
mvn spring-boot:run  

---

### 3️⃣ Frontend Setup

cd frontend  
npm install  
npm start  

---

## 🔗 API Endpoints

GET     /api/students        → Get all students  
POST    /api/students        → Add new student  
PUT     /api/students/{id}   → Update student  
DELETE  /api/students/{id}   → Delete student  

---

## Future Improvements

-  Authentication (Login/Register)
-  Role-based access (Admin/User)
-  Dashboard analytics
-  Dark mode
-  Pagination & sorting

---

## Author

Yudhveer Sharma

---

## Support

If you like this project, please ⭐ the repository!
