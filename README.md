💼 JobTrack — Job Listing Platform
JobTrack is a responsive, user-friendly Single Page Application (SPA) that enables job seekers to browse companies, view multiple job openings, and apply directly on company websites.
It features private profile & company pages, email/password + Google authentication, forget-password flow, and an admin-friendly layout for a polished UX.

🛠 Main Technologies Used

| **Area**                          | **Tech Stack**                                                                      |
| --------------------------------- | ----------------------------------------------------------------------------------- |
| 🎨 **Frontend**                   | React (Vite), React Router, Tailwind CSS                                            |
| 🔐 **Authentication**             | Firebase Authentication (Email + Google)                                            |
| 🖥 **Backend**                    | Node.js, Express.js                                                                 |
| 🗄 **Database**                   | MongoDB (Atlas or local)                                                            |
| 📝 **State / Forms / Animations** | react-hook-form, Framer Motion / GSAP / React Spring                                |
| 🌐 **HTTP / API**                 | Axios                                                                               |
| ☁ **Deployment / Hosting**        | Netlify / Vercel / Firebase Hosting (frontend), Render / Railway / Heroku (backend) |


🚀 Core Features
📱 Responsive layout with a shared header/footer across all pages
🏢 Company listing in a grid view — each company can have multiple jobs
🔒 Private routes for Company Details & Profile pages
👤 Authentication: Email + Google sign-in / sign-up
🔑 Forget Password flow (redirect to email client)
🖼 My Profile: View & update name and photo-URL
📝 Dynamic page titles & custom 404 page
🛡 Password validation (uppercase, lowercase, min length)
📄 Modal-based Job Details with "Apply" button (opens company site in new tab)
🔍 Extra route for Saved Jobs / Search
🎞 Smooth animations (Framer Motion / GSAP / React Spring)
🔐 Secure environment variables & Firebase authorized domain settings





📦 Dependencies
| Package                                   | Purpose                        |
| ----------------------------------------- | ------------------------------ |
| `react`, `react-dom`                      | UI library                     |
| `vite`                                    | Dev server / bundler           |
| `react-router-dom`                        | Routing                        |
| `axios`                                   | HTTP client                    |
| `tailwindcss`                             | Styling & responsive utilities |
| `react-hook-form`                         | Form handling & validation     |
| `firebase`                                | Firebase Authentication        |
| `framer-motion` / `gsap` / `react-spring` | UI animations                  |
| `react-icons`                             | Icons                          |


🖥 How to Run the Project Locally
This assumes a two-folder repo: client/ and server/ (adjust paths if different).

1️⃣ Clone the repo
bash
Copy
Edit
git clone https://github.com/your-username/your-repo.git
cd your-repo

2️⃣ Backend Setup
bash
Copy
Edit
cd server
npm install
📄 Create .env in server/

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_here
# Optional
CLIENT_URL=http://localhost:5173
▶ Start the backend

bash
Copy
Edit
npm run dev
# or
node index.js

3️⃣ Frontend Setup
Open a new terminal:

bash
Copy
Edit
cd ../client
npm install
📄 Create .env in client/ (Vite requires VITE_ prefix)

env
Copy
Edit
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_CLIENT_URL=http://localhost:5173
⚠ Important: Add http://localhost:5173 to Firebase → Authentication → Authorized domains.

▶ Start the frontend
bash
Copy
Edit
npm run dev
(If using CRA: npm start)

4️⃣ Open in Browser
arduino
Copy
Edit
http://localhost:5173
(Or http://localhost:3000 for CRA)

📝 Notes


