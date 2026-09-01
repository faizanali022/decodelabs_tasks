
---


```markdown
# 🧠 Al Noor Maid Services – Backend API

[![GitHub stars](https://img.shields.io/github/stars/faizanali022/decodelabs_tasks)](https://github.com/faizanali022/decodelabs_tasks/stargazers)

## 📌 Overview
**Al Noor Maid Services** is a complete home staff agency platform.  
This is the **backend API** built as Task 2 for DecodeLabs Full Stack Internship.  
It provides RESTful endpoints for managing services, blog posts, cities, and contact inquiries.

## 🛠️ Tech Stack
| Layer | Technology |
|-------|------------|
| **Runtime** | Node.js (v18+) |
| **Framework** | Express.js |
| **Database** | MySQL + Sequelize ORM |
| **Auth** | Passport.js (local) |
| **Templating** | EJS |
| **File Upload** | Multer |
| **Validation** | Custom + Sequelize validations |
| **Environment** | dotenv |

## ✨ Features
- ✅ Complete MVC Architecture
- ✅ RESTful Routes (GET, POST, PUT, DELETE)
- ✅ Admin Panel (Login, Dashboard, Blog CRUD)
- ✅ Service & City Management
- ✅ Contact Form with Validation
- ✅ Blog with Categories & SEO
- ✅ Image Upload (Multer)
- ✅ Server-side Validation (Never Trust the Client)
- ✅ Session-based Authentication
- ✅ Error Handling (404, 500)

## 🔗 API Endpoints (Public)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Home page |
| GET | `/services` | List all services |
| GET | `/services/:slug` | Single service detail |
| GET | `/blog` | Blog listing |
| GET | `/blog/:slug` | Single blog post |
| GET | `/cities/:slug` | City-specific page |
| POST | `/contact` | Submit contact form |

## 🔐 Admin Routes (Protected)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/login` | Login page |
| POST | `/admin/login` | Login authentication |
| GET | `/admin/dashboard` | Admin dashboard |
| GET | `/admin/blog` | List blog posts |
| GET | `/admin/blog/create` | Create new post |
| POST | `/admin/blog/create` | Store new post |
| GET | `/admin/blog/edit/:id` | Edit post |
| POST | `/admin/blog/edit/:id` | Update post |
| GET | `/admin/blog/delete/:id` | Delete post |
| GET | `/admin/logout` | Logout |

## 🚀 How to Run Locally
```bash
# 1. Clone and enter backend folder
cd task-2-backend

# 2. Install dependencies
npm install

# 3. Create .env file (see .env.example)
# 4. Create MySQL database
# 5. Run migrations & seeders
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

# 6. Start server
npm run dev   # (development with nodemon)
# or
npm start     # (production)
