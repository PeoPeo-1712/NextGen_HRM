# NextGen HRM

A comprehensive Human Resource Management (HRM) system built with Node.js/Express backend and React/Vite frontend.

## 📋 Project Overview

This is a full-stack HRM application consisting of two independent projects:
- **Backend:** Node.js + Express API server
- **Frontend:** React + Vite single-page application

Both projects are now independent directories with their own dependencies and can be deployed separately.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git
- Database server (configured in backend)

### Installation & Running

#### Step 1: Backend Setup

```bash
# Navigate to backend
cd HRM_BackEnd

# Install dependencies
npm install

# Start the server
npm start
```

The backend will start on the configured port (check `src/config/database.js`).

#### Step 2: Frontend Setup

```bash
# Navigate to frontend
cd HRM_FrontEnd

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:5173` (or as shown in your terminal).

#### Step 3: Access Application

1. Open your browser to the frontend URL
2. Log in with your credentials
3. Use the HRM system

---

## 📁 Project Structure

```
NextGen_HRM/
│
├── HRM_BackEnd/                    # Backend API Server
│   ├── src/
│   │   ├── auto/                   # Automated tasks (e.g., contract expiration)
│   │   ├── config/                 # Configuration files
│   │   │   ├── database.js         # Database connection
│   │   │   ├── passport.js         # Authentication strategy
│   │   │   └── viewEngine.js       # View engine setup
│   │   │
│   │   ├── controllers/            # Request handlers
│   │   │   ├── accountController.js
│   │   │   ├── attendanceController.js
│   │   │   ├── contractController.js
│   │   │   ├── departmentController.js
│   │   │   ├── salaryController.js
│   │   │   ├── staffController.js
│   │   │   ├── shiftAssignmentController.js
│   │   │   └── ... (more controllers)
│   │   │
│   │   ├── DAO/                    # Data Access Objects
│   │   │   ├── staffDAO.js
│   │   │   ├── attendanceDAO.js
│   │   │   ├── contractDAO.js
│   │   │   ├── departmentDAO.js
│   │   │   ├── salaryDAO.js
│   │   │   └── ... (more DAOs)
│   │   │
│   │   ├── models/                 # Database models/schemas
│   │   │   ├── staff.js
│   │   │   ├── attendance.js
│   │   │   ├── contract.js
│   │   │   ├── salary.js
│   │   │   ├── department.js
│   │   │   ├── notification.js
│   │   │   └── ... (more models)
│   │   │
│   │   ├── routes/                 # API routes
│   │   │   ├── accountRoutes.js
│   │   │   ├── authRoutes.js
│   │   │   ├── attendanceRoutes.js
│   │   │   ├── contractRoutes.js
│   │   │   ├── departmentRoutes.js
│   │   │   ├── salaryRoutes.js
│   │   │   ├── staffRoutes.js
│   │   │   ├── shiftAssignmentRoutes.js
│   │   │   └── ... (more routes)
│   │   │
│   │   ├── services/               # Business logic layer
│   │   │   ├── accountService.js
│   │   │   ├── attendanceService.js
│   │   │   ├── contractService.js
│   │   │   ├── cvEmailService.js
│   │   │   ├── cvScreeningService.js
│   │   │   ├── salaryService.js
│   │   │   └── ... (more services)
│   │   │
│   │   ├── middleware/             # Express middleware
│   │   │   ├── auth.js             # Authentication check
│   │   │   ├── checkRole.js        # Role-based access control
│   │   │   └── delay.js            # Response delay
│   │   │
│   │   ├── seeds/                  # Database seeders
│   │   │   ├── initNotificationCollection.js
│   │   │   └── seedPolicies.js
│   │   │
│   │   ├── utils/                  # Utility functions
│   │   │
│   │   ├── views/                  # View templates (if applicable)
│   │   │
│   │   └── server.js               # Application entry point
│   │
│   ├── package.json                # Backend dependencies
│   ├── eslint.config.cjs           # ESLint configuration
│   └── commitlint.config.cjs       # Commit linting rules
│
├── HRM_FrontEnd/                   # Frontend React Application
│   ├── src/
│   │   ├── components/             # Reusable React components
│   │   │   ├── Header
│   │   │   ├── Sidebar
│   │   │   ├── Dashboard
│   │   │   └── ... (more components)
│   │   │
│   │   ├── pages/                  # Page-level components
│   │   │   ├── StaffManagement
│   │   │   ├── Attendance
│   │   │   ├── Salary
│   │   │   ├── Contracts
│   │   │   ├── Recruitment
│   │   │   └── ... (more pages)
│   │   │
│   │   ├── services/               # API client services
│   │   │   ├── staffService.js
│   │   │   ├── attendanceService.js
│   │   │   ├── salaryService.js
│   │   │   ├── contractService.js
│   │   │   └── ... (more services)
│   │   │
│   │   ├── context/                # React Context (state management)
│   │   │
│   │   ├── hooks/                  # Custom React hooks
│   │   │
│   │   ├── layout/                 # Layout components
│   │   │   ├── MainLayout
│   │   │   ├── Navigation
│   │   │   └── ... (layout components)
│   │   │
│   │   ├── route/                  # Routing configuration
│   │   │   └── appRouter.jsx
│   │   │
│   │   ├── styles/                 # CSS/SCSS stylesheets
│   │   │
│   │   ├── assets/                 # Static assets
│   │   │   ├── images
│   │   │   ├── icons
│   │   │   └── fonts
│   │   │
│   │   ├── utils/                  # Utility functions
│   │   │
│   │   ├── main.jsx                # React entry point
│   │   └── appRouter.jsx           # Router configuration
│   │
│   ├── public/                     # Public assets
│   ├── index.html                  # HTML entry point
│   ├── vite.config.js              # Vite build configuration
│   ├── package.json                # Frontend dependencies
│   ├── eslint.config.cjs           # ESLint configuration
│   └── commitlint.config.cjs       # Commit linting rules
│
└── README.md                       # Main project README

```

---

## 🔧 Backend API Documentation

### Core Features

#### Authentication & Authorization
- **Routes:** `routes/authRoutes.js`
- **Middleware:** `middleware/auth.js`, `middleware/checkRole.js`
- Login, logout, and role-based access control

#### Staff Management
- **Routes:** `routes/staffRoutes.js`
- **Controller:** `controllers/staffController.js`
- **Service:** `services/staffService.js`
- **DAO:** `DAO/staffDAO.js`
- Employee records, profiles, and information management

#### Attendance Tracking
- **Routes:** `routes/attendanceRoutes.js`
- Attendance records and tracking

#### Contract Management
- **Routes:** `routes/contractRoutes.js`
- Employment contracts with auto-expiration
- **Automation:** `auto/autoExpireContracts.js`

#### Salary & Payroll
- **Routes:** `routes/salaryRoutes.js`, `routes/monthlySalaryRoutes.js`
- Salary management and monthly payroll processing

#### Department Management
- **Routes:** `routes/departmentRoutes.js`, `routes/departmentShiftRoutes.js`
- Department structure and shift scheduling

#### Shift Management
- **Routes:** `routes/shiftTypeRoutes.js`, `routes/shiftAssignmentRoutes.js`
- Shift types definition and employee shift assignments

#### Policies
- **Routes:** `routes/policyRoutes.js`
- Company policies management

#### Recruitment
- **Routes:** `routes/candidateRoutes.js`
- Candidate management and recruitment process

#### Additional Features
- **Resignation:** `routes/resignationRoutes.js` - Resignation processing
- **ChatBot:** `routes/chatbotRoutes.js` - Chatbot integration
- **Todos:** `routes/todoRoutes.js` - Task management
- **Department Reviews:** `routes/departmentReviewRoutes.js` - Performance reviews

### Database Configuration
- **File:** `src/config/database.js`
- Update database connection details here

### Starting Backend
```bash
cd HRM_BackEnd
npm install
npm start
```

---

## 🎨 Frontend Application

### Key Technologies
- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Navigation

### Application Structure

#### Components
Located in `src/components/` - Reusable React components

#### Pages
Located in `src/pages/` - Full-page views:
- Dashboard
- Staff Management
- Attendance Management
- Salary Management
- Recruitment
- Contract Management
- Department Management
- And more...

#### State Management
- **Context API** - `src/context/`
- Global state for user, permissions, etc.

#### API Integration
- **Service Layer** - `src/services/`
- All API calls go through dedicated service files
- Each service corresponds to a backend feature

#### Styling
- **Stylesheets** - `src/styles/`
- Component-specific or global styles

### Build Commands
```bash
cd HRM_FrontEnd

# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## 🔗 API Integration

The frontend communicates with the backend through service files in `src/services/`:

Example service structure:
```javascript
// src/services/staffService.js
export const staffService = {
  getAll: () => fetch('/api/staff'),
  getById: (id) => fetch(`/api/staff/${id}`),
  create: (data) => fetch('/api/staff', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => fetch(`/api/staff/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => fetch(`/api/staff/${id}`, { method: 'DELETE' })
};
```

---

## ⚙️ Configuration

### Backend Configuration
Update these files in `HRM_BackEnd/src/config/`:

1. **database.js** - Database connection settings
2. **passport.js** - Authentication configuration
3. **viewEngine.js** - View rendering setup

### Environment Variables
Create `.env` file in `HRM_BackEnd/` with required variables (if applicable)

### Frontend Configuration
- **vite.config.js** - Build and dev server settings
- Update API base URL if needed

---

## 🛠️ Troubleshooting

### Backend Issues

#### Port Already in Use
```bash
# Find and kill process using the port
netstat -ano | findstr :PORT_NUMBER
taskkill /PID PID_NUMBER /F
```

#### Database Connection Failed
- Check `src/config/database.js`
- Ensure database server is running
- Verify credentials

#### Module Errors
```bash
# Clean install
rm -r node_modules package-lock.json
npm install
```

### Frontend Issues

#### Port Conflict
Vite will automatically use the next available port

#### Module Not Found
```bash
# Clean install dependencies
rm -r node_modules package-lock.json
npm install
```

#### Vite Cache Issues
```bash
# Clear vite cache
rm -r node_modules/.vite
npm run dev
```

---

## 📦 Dependencies

### Backend
Key dependencies in `HRM_BackEnd/package.json`:
- Express.js - Web framework
- MongoDB/Database driver
- Passport.js - Authentication
- And more...

### Frontend
Key dependencies in `HRM_FrontEnd/package.json`:
- React - UI library
- Vite - Build tool
- React Router - Navigation
- And more...

---

## 📝 Code Quality

Both projects include:
- **ESLint** - Code linting (`eslint.config.cjs`)
- **CommitLint** - Commit message validation (`commitlint.config.cjs`)

Run linting:
```bash
npm run lint
```

---

## 🚢 Deployment

### Backend Deployment
1. Install dependencies: `npm install`
2. Configure environment variables
3. Configure database connection
4. Start server: `npm start`
5. Deploy to server/hosting platform

### Frontend Deployment
1. Install dependencies: `npm install`
2. Build: `npm run build`
3. Output in `dist/` folder
4. Deploy to static hosting (Netlify, Vercel, GitHub Pages, etc.)

---

## 📞 Important Notes

- **Independent Projects:** Both `HRM_BackEnd` and `HRM_FrontEnd` are now separate directories with independent git histories
- **API Communication:** Frontend makes HTTP requests to backend API
- **Authentication:** Implement login flow in frontend, verify tokens in backend
- **Database:** Backend manages all database operations through DAO layer
- **State Management:** Frontend uses React Context for global state

---

## Account for Demo
```bash
Admin:
  Gmail: admin@gmail.com
  PassWord: Admin123
```

```bash
Manager:
  Gmail: manager@gmail.com
  PassWord: Manager123
```

```bash
Staff:
  Gmail: staff@gmail.com
  PassWord: Staff123
```
---

## 📚 Additional Resources

- **Node.js Documentation:** https://nodejs.org/
- **Express.js Guide:** https://expressjs.com/
- **React Documentation:** https://react.dev/
- **Vite Documentation:** https://vitejs.dev/
- **MongoDB Documentation:** https://docs.mongodb.com/

---
