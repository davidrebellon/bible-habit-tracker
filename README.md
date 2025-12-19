# bible-habit-tracker
Build the habit of reading the Bible by keeping track of how much you've read, how many times you've completed the Bible, and receive recommendations on how to stay on track to complete reading it within a certain amount of time.

# Bible Habit Tracker

A habit tracking application designed to help users maintain consistent Bible reading habits with flexible reading plans.

## Project Structure

```
bible-habit-tracker/
├── app/
│   ├── frontend/          # React application
│   └── backend/           # Flask API
├── README.md
└── .gitignore
```

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Python** (v3.9 or higher) - [Download here](https://www.python.org/downloads/)
- **Git** - [Download here](https://git-scm.com/downloads/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/davidrebellon/bible-habit-tracker.git
cd bible-habit-tracker
```

### 2. Backend Setup

#### Install Python Dependencies

```bash
# Navigate to backend directory
cd app/backend

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

#### Run the Backend

```bash
# Make sure you're in app/backend with venv activated
python app.py
```

The Flask server will start on **http://localhost:5001**

You should see:
```
* Running on http://127.0.0.1:5001
* Debug mode: on
```

#### Verify Backend is Running

Open your browser and visit:
- http://localhost:5001/ - Should show "Bible Habit Tracker API is running!"
- http://localhost:5001/api/health - Should show `{"status":"healthy"}`

### 3. Frontend Setup

Open a **new terminal** (keep the backend running in the first terminal)

#### Install Node Dependencies

```bash
# Navigate to frontend directory from project root
cd app/frontend

# Install dependencies
npm install
```

#### Create Environment File

Create a file named `.env.local` in the `app/frontend` directory:

```bash
# In app/frontend
touch .env.local
```

Add the following content to `.env.local`:
```
VITE_API_URL=http://localhost:5001
```

#### Run the Frontend

```bash
# Make sure you're in app/frontend
npm run dev
```

The React app will start on **http://localhost:5173**

You should see:
```
VITE v7.2.4  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### 4. Access the Application

Open your browser and visit **http://localhost:5173**

You should see:
- "Bible Habit Tracker" heading
- "Backend status: healthy"

If you see "Backend status: error connecting", make sure both frontend and backend are running.

## Development Workflow

### Running Both Services

You'll need **two terminal windows** open:

**Terminal 1 - Backend:**
```bash
cd app/backend
source venv/bin/activate  # On Windows: venv\Scripts\activate
python app.py
```

**Terminal 2 - Frontend:**
```bash
cd app/frontend
npm run dev
```

### Stopping the Services

- Press **CTRL+C** in each terminal to stop the servers
- To deactivate the Python virtual environment: `deactivate`

## Common Issues & Troubleshooting

### Port 5001 Already in Use

If you see an error about port 5001 being in use:

```bash
# Find what's using the port
lsof -i :5001

# Kill the process (replace <PID> with the actual process ID)
kill -9 <PID>
```

Or change the port in `backend/app.py`:
```python
port = int(os.environ.get('PORT', 5002))  # Changed from 5001 to 5002
```

Then update `frontend/.env.local`:
```
VITE_API_URL=http://localhost:5002
```

### CORS Errors in Browser Console

If you see CORS errors, verify:
1. Backend is running on port 5001
2. Frontend `.env.local` has correct `VITE_API_URL`
3. Both services are running

### Module Not Found Errors (Python)

Make sure your virtual environment is activated:
```bash
# You should see (venv) at the start of your terminal prompt
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows
```

Then reinstall dependencies:
```bash
pip install -r requirements.txt
```

### Module Not Found Errors (JavaScript)

Delete `node_modules` and reinstall:
```bash
cd app/frontend
rm -rf node_modules package-lock.json
npm install
```

### Permission Errors

If you encounter permission errors:
```bash
# Fix ownership of project files (macOS/Linux)
cd ~/Documents/code/bible-habit-tracker
sudo chown -R $(whoami) .
chmod -R u+w .
```

Never use `sudo` with `npm install` in your project directory.

## Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **React Router** - Navigation

### Backend
- **Flask** - Python web framework
- **Flask-CORS** - Cross-origin resource sharing
- **Flask-SQLAlchemy** - Database ORM
- **Flask-JWT-Extended** - Authentication

## Project Team

David Rebellon - Product Management & Frontend Development
Dean Torovich - Backend Development & Security
Lucas Torovich - Backend Development & Design 

## License

GNU AFFERO GENERAL PUBLIC LICENSE
Version 3, 19 November 2007

## Contributing

[Add contribution guidelines if applicable]

---

**Need help?** Open an issue or reach out to the team!
