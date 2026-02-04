# Learning Management System (LMS)

This project is a **Learning Management System (LMS)** developed as my **Major Project for the Master of Computer Applications (MCA)** program.

The objective of this project is to design and implement a **backend-focused, scalable LMS** with role-based access control and support for **interactive learning content using Unity WebGL**.

---

## 🎯 Project Purpose

Traditional LMS platforms mainly provide videos and PDFs, which often lead to passive learning.  
This project aims to improve learner engagement by integrating **interactive 3D learning modules** using **Unity WebGL**, while maintaining a clean and secure backend architecture.

---

## 👤 User Roles

### Admin
- Manage users (learners)
- Create and manage courses
- Upload and manage course content
- Control access to Unity WebGL modules

### Learner
- Register and log in
- Enroll in courses
- Access course materials
- Interact with Unity WebGL content inside the LMS

---

## 🛠️ Technology Stack

### Backend (Primary Focus)
- Node.js
- Express.js
- PostgreSQL (structured data: users, courses, enrollments)
- MongoDB (content metadata, logs, Unity references)
- JWT-based authentication
- Role-based access control

### Frontend (Minimal, Functional UI)
- React.js
- Basic dashboard UI for Admin and Learner
- API integration with backend services

### Interactive Content
- Unity WebGL for 3D and interactive learning modules

---

## 🗂️ Project Structure
lms-app/
├── admin/ # Admin dashboard (frontend)
├── client/ # Learner dashboard (frontend)
├── backend/ # Backend APIs and database logic
├── docs/ # Documentation and planning
└── README.md


---

## ⭐ Key Highlights

- Backend-focused architecture with clean REST API design
- Role-based access control for Admin and Learner
- Integration of Unity WebGL within LMS workflow
- Use of multiple databases based on data requirements
- Emphasis on scalability, security, and maintainability
- Proper documentation and system planning

---

## 🎓 Academic Context

This project was developed as part of the **MCA Major Project**, with a strong emphasis on applying real-world software engineering principles such as:
- Requirement analysis
- System architecture design
- Database modeling
- Secure backend development
- API-driven application design

---

## 🔒 Repository Note

Sensitive files such as environment variables, credentials, and large build assets (including Unity WebGL build files) are intentionally excluded from this repository for security and repository hygiene.

