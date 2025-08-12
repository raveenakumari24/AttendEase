# AttendEase
This project is a frontend system for a AttendEase application. It provides a role-based login system for Admins, Teachers, and Students. Each user type has access to specific functionalities tailored to their role.

Features
Role-Based Login
Admin: Access to manage teachers, students, and subjects.
Teacher: Dashboard to view attendance statistics and manage student attendance.
Student: Dashboard to view personal attendance details.
Role-Specific Functionalities
Admin
Pages:
Students: Add, edit, and delete student records.
Teachers: Add, edit, and delete teacher records.
Subjects: Add, edit, and delete subjects.
Teacher
Pages:
Dashboard:
View a list of subjects assigned to the teacher.
Check the total number of students present and absent for a particular subject in a specific month.
Attendance:
Search for students in a particular subject.
Add attendance records for a specific subject and date.
Student
Page:
Dashboard:
View attendance details for each subject.
See the percentage of present and absent classes for each subject.
Technologies Used
Frontend: React.js,JavaScript
HTTP Client: Axios
Styling: Tailwind CSS, Shadcn
Routing: React Router
Prerequisites
Node.js and npm installed on your system.
Steps
Clone the repository:
git clone https://github.com/NishantRajhans/AttendEase.git
cd attendance
Install dependencies:
npm install
Start the development server:
npm start
Open your browser and navigate to:
http://localhost:3000
Images
Admin Students Teachers Subjects

Teacher Dashboard Attendance

Student Dashboard

LogIn Login
