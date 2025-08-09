JobTrack — Job Listing Platform (Readme Content)
JobTrack is a responsive, user-friendly job listing SPA that lets job seekers browse companies, view multiple job openings per company, and apply directly on the company website. It includes private profile & company pages, email/password + Google auth, forget-password flow, and an admin-friendly layout for a polished UX.

Main Technologies Used
Frontend: React (Vite), React Router, Tailwind CSS

Authentication / Auth Provider: Firebase Authentication (Email + Google)

Backend: Node.js, Express.js

Database: MongoDB (Atlas or local)

State / Forms / Animations: react-hook-form, Framer Motion (or GSAP / React Spring)

HTTP / API: Axios

Deployment / Hosting: Netlify / Vercel / Firebase Hosting (frontend), Render / Railway / Heroku (backend)

Core Features
Responsive layout with a shared header/footer across pages

Company listing (grid) — each company can have multiple jobs

Company Details page (private route) with list of jobs and job detail modal (Apply → company site)

Authentication: Register / Login (Email + Google) and protected private routes

Forget Password flow (redirects user to email client as required)

My Profile (private): view & update name and photo-URL

Dynamic page titles and a custom 404 page

Password validation (uppercase, lowercase, min length) on registration

Modal-based Job details with Apply button opening the company website in a new tab

Extra route related to jobs (e.g., Saved Jobs / Search)

Smooth UI animations (Framer Motion / GSAP / React Spring)

Secure configuration using environment variables and Firebase authorized domain setting

Dependencies (example split by client/server)
Client (frontend)
Package	Purpose
react, react-dom	UI library
vite	Dev server / bundler
react-router-dom	Routing
axios	HTTP client
tailwindcss	Styling & responsive utilities
react-hook-form	Form handling & validation
firebase	Firebase Auth
framer-motion (or gsap / react-spring)	UI animations
react-icons	Icons

Server (backend)
Package	Purpose
express	Web framework
mongoose	MongoDB modeling
dotenv	Environment variables
cors	Cross-origin requests
bcryptjs	Password hashing
jsonwebtoken	JWT tokens (if used for API protection)
nodemon (dev)	Auto-restart server in dev

Adjust package versions/names to match your actual package.json.

How to run the project locally
Paste this directly in your README. This assumes a two-folder repo layout client/ and server/ (adjust names if yours differ).

1. Clone the repo
bash
Copy
Edit
git clone https://github.com/your-username/your-repo.git
cd your-repo
2. Server setup
bash
Copy
Edit
cd server
npm install
Create a .env file in the server/ folder and add (example):

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_here
# (optional) CLIENT_URL=http://localhost:5173
Start the backend:

bash
Copy
Edit
npm run dev
# or
node index.js
npm run dev expects a dev script (e.g. using nodemon). If you only have a start script, use npm start.

3. Client setup
Open a new terminal:

bash
Copy
Edit
cd ../client
npm install
Create a .env file in the client/ folder and add your Firebase variables and client URL. Using Vite, prefix with VITE_:

env
Copy
Edit
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_CLIENT_URL=http://localhost:5173
Important: Add http://localhost:5173 (or your dev origin) as an authorized domain in your Firebase Console → Authentication → Authorized domains.

Start the frontend:

bash
Copy
Edit
npm run dev
If your project uses CRA instead of Vite: npm start (and your .env keys may use REACT_APP_ prefix).

4. Open the app
Open your browser at:

arduino
Copy
Edit
http://localhost:5173
(Or http://localhost:3000 if using CRA)
