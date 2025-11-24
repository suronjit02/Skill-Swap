# SkillSwap – A Local Skill Exchange Platform

A single-page web application where users can offer, learn, and exchange skills within their local community.

---

### Live Demo

👉 **Live URL:** https://skillswap-88219.web.app/

---

## Project Purpose

SkillSwap is a platform where people in a local area can share their skills or learn new skills from others.  
Examples: guitar lessons, language practice, coding help, yoga training, etc.

---

## Key Features

### Authentication

- Email & Password Login
- Signup with Name, Email, Photo URL
- Social Login (Google Authentication)
- Protected Routes (cannot access without login)
- Forgot Password with Email Reset
- Password Validation (Uppercase, Lowercase, 6+ characters)

### Navigation

- Dynamic Navbar
- User Avatar (hover shows displayName)
- Login / Signup / Logout buttons
- SPA (Single Page Application) → No errors on page reload

### Home Page Sections

- Hero Slider (Swiper / DaisyUI)
- Popular Skills Section (Cards)
- "Top Rated Providers" Section
- "How It Works" Section
- "What Learners Say" Section

### Skill Listings

- 6 JSON skill items
- Each card shows: image, skill name, rating, price
- View Details button

### Skill Details Page

- Protected page (Login required)
- Shows all JSON data fields
- “Book Session” Form
- Submission shows a success toast

### My Profile Page

- User Name
- Email
- Photo
- Update Profile button (update Name & Photo)

---

## Tech Stack

- **React.js**
- **React Router**
- **Firebase Authentication**
- **Tailwind CSS / DaisyUI**
- **Swiper.js**
- **React Hot Toast**
- **AOS Package**

---
