# Al Noor Maid Services — Backend Application (Task 2)

## Overview
This project is the **Task 2 backend submission** for the DecodeLabs Full Stack Development Internship.

It is a Node.js + Express application built with MVC architecture, MySQL/Sequelize integration, session-based admin authentication, and route-based content/service management.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Runtime | Node.js |
| Framework | Express.js |
| Database | MySQL |
| ORM | Sequelize |
| Authentication | Passport.js (Local Strategy) |
| View Engine | EJS |
| Uploads | Multer |
| Session Management | express-session |

## Core Features
- MVC-based backend structure
- Public routes for pages, services, cities, and contact form
- Blog listing and post detail routes
- Admin authentication and dashboard access
- Admin blog management (create, edit, delete)
- Service management route for admin area
- Structured 404 and 500 error pages

## Project Structure

```text
task-2-backend/
├── config/
├── controllers/
├── middleware/
├── migrations/
├── models/
├── routes/
├── seeders/
├── public/
├── views/
├── server.js
└── package.json
```

## Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- MySQL server

### Installation

```bash
cd task-2-backend
npm install
```

### Environment Variables
Create a `.env` file in `task-2-backend/` with the following values:

```env
PORT=3000
DB_HOST=localhost
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
SESSION_SECRET=your_session_secret
SITE_URL=http://localhost:3000
WHATSAPP_ADMIN_NUMBER=923XXXXXXXXX
```

### Database (optional local bootstrap)

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### Run the Server

```bash
npm start
```

## Route Summary

### Public Routes
| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/` | Home page |
| GET | `/about` | About page |
| GET | `/contact` | Contact page |
| POST | `/contact` | Submit contact request |
| GET | `/privacy-policy` | Privacy policy page |
| GET | `/services` | List services |
| GET | `/services/:slug` | Service detail |
| GET | `/cities` | List cities |
| GET | `/cities/:slug` | City detail page |
| GET | `/blog` | Blog listing |
| GET | `/blog/category/:slug` | Blog category listing |
| GET | `/blog/:slug` | Blog detail |

### Admin Routes
All admin routes are mounted under `/admin`.

| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/admin/login` | Login form |
| POST | `/admin/login` | Authenticate admin |
| GET | `/admin/logout` | Logout admin |
| GET | `/admin/dashboard` | Dashboard |
| GET | `/admin/blog` | Blog management list |
| GET | `/admin/blog/create` | Create blog form |
| POST | `/admin/blog` | Create blog post |
| GET | `/admin/blog/edit/:id` | Edit blog form |
| PUT | `/admin/blog/edit/:id` | Update blog post |
| DELETE | `/admin/blog/delete/:id` | Delete blog post |
| GET | `/admin/services` | Service management |

> Note: HTML form updates/deletes use method override (`?_method=PUT` / `?_method=DELETE`).
