# 🌟 SheCan Foundation Intern Portal

A full-stack intern management platform for SheCan Foundation built using **Django** (backend) and **React + Tailwind CSS** (frontend). It provides intern registration, donation tracking, and a leaderboard ranking system.

---

## 🚀 Features

- 📝 Intern login (name & email)
- 💼 Personalized Dashboard: referral code, donations raised, rewards
- 🏆 Leaderboard page with live rankings
- 🎨 Fully responsive UI with Tailwind CSS and dark theme
- 🔗 Backend API with Django REST Framework
- 🧠 Global React context for data access across pages

---

## 🛠️ Tech Stack

| Part       | Tech                   |
|------------|------------------------|
| Frontend   | React, Tailwind CSS    |
| Backend    | Django, Django REST Framework |
| Deployment | Vercel (frontend), Render (backend) |

---

## 📁 Project Structure

shecanfoundation/
├── intern-portal/ # Django backend
│ ├── api/ # Django app
│ ├── intern_portal/ # Django project
│ └── manage.py
├── intern-frontend/ # React frontend
│ ├── public/
│ └── src/
└── README.md

yaml
Copy
Edit

---

## ⚙️ Local Setup

### 1️⃣ Backend Setup – `intern-portal`

''bash
cd intern-portal
python -m venv env
env\Scripts\activate      # On Windows
# source env/bin/activate  # On macOS/Linux

pip install -r requirements.txt

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Run server
python manage.py runserver
📌 Make sure CORS and CSRF settings are configured properly for development.

2️⃣ Frontend Setup – intern-frontend
cd intern-frontend
npm install
npm run start
This runs the frontend at http://localhost:3000 and connects to the backend API.

🌐 API Routes
Endpoint	Method	Description
/api/intern/	GET	Get current intern data
/api/leaderboard/	GET	Get list of all interns ranked

🧠 React Context API
Intern data (name, email, referral code, donations) is passed from the login page and stored globally using React Context, accessible on the Dashboard and Leaderboard.

File: intern-frontend/src/context/interncontext.js

const { intern } = useIntern();
console.log(intern.name);
🧪 Example URLs (Local)
Page	URL
Login	http://localhost:3000/
Dashboard	/dashboard
Leaderboard	/leaderboard
Backend API	http://127.0.0.1:8000/

🧾 Deployment
🌍 Backend on Render
Push your full project to GitHub.

Go to https://render.com

Create new Web Service:

Root Directory: intern-portal/

Build Command: pip install -r requirements.txt

Start Command: gunicorn intern_portal.wsgi

Add Environment Variables:

ALLOWED_HOSTS=*

CORS_ORIGIN_ALLOW_ALL=True

Add static file support and render.yaml if needed.

⚛️ Frontend on Vercel
Push intern-frontend/ to a separate GitHub repo or same mono-repo.

Go to https://vercel.com

Import Git repo:

Framework: React

Build Command: npm run build

Output: build

Set environment variables (if using .env)

📦 Optional Files for Production
Create a runtime.txt in intern-portal/:

Copy
Edit
python-3.11.8
👥 Contributing
Pull requests and suggestions are welcome! Please fork the repo and open a PR.

📄 License
This project is licensed under the MIT License.



---

You can now paste this directly into your project’s `README.md` on GitHub. Let me know if you'd like me to cr
