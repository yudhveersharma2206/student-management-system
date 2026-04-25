# Student Management System

A full-stack Student Management System built using React (Frontend) and Spring Boot (Backend).  
This application allows users to perform complete CRUD operations with a modern UI and real-time updates.

---

## Features

- Add new students
- Edit existing student details (Modal Popup)
- Delete students with confirmation
- Search students by name
- Toast notifications for user feedback
- Loading indicator while fetching data
- Clean and responsive UI

---

## Tech Stack

Frontend:

- React.js
- CSS (Custom Styling)

Backend:

- Spring Boot
- REST API

Database:

- MySQL

---

## Project Structure

```
student-management/
│
├── backend/
├── frontend/
└── README.md
```
---

## Installation & Setup

1. Clone Repository

git clone <https://github.com/yudhveersharma2206/student-management-system.git>  
cd student-management  

---

2. Backend Setup

cd backend  
./mvnw spring-boot:run  

Runs on: <http://localhost:8080>

---

3.  Frontend Setup

cd frontend  
npm install  
npm start  

Runs on: <http://localhost:3000>

---

## API Endpoints

GET     /students          → Get all students  
POST    /students          → Add student  
PUT     /students/{id}     → Update student  
DELETE  /students/{id}     → Delete student  

---

## Deployment

Frontend: Netlify  
Backend: Render  

⚠️ Important: Update API URL in frontend before deployment.

---

## Features Included

- Real-time search filtering  
- Modal-based editing  
- Toast notifications  
- Dynamic UI updates  

---

## Author

Yudhveer Sharma  

---

## Future Improvements

- Authentication (Login/Register)  
- Role-based system (Admin/Faculty/Student)  
- Dashboard analytics  
- Dark mode  

---

## Conclusion

This project demonstrates full-stack development skills including API integration, state management,and modern UI design.
