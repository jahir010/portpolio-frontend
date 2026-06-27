# Backend Integration Guide

This guide explains how to connect the portfolio frontend with a Python FastAPI backend.

## 🔗 API Structure

Your FastAPI backend should expose these endpoints:

```python
# Backend routes structure
@app.get("/api/about")
async def get_about():
    return { ... }

@app.get("/api/skills")
async def get_skills():
    return { ... }

@app.get("/api/experience")
async def get_experience():
    return { ... }

@app.get("/api/projects")
async def get_projects():
    return { ... }

@app.get("/api/education")
async def get_education():
    return { ... }

@app.get("/api/certificates")
async def get_certificates():
    return { ... }

@app.post("/api/contact")
async def send_message(message: ContactForm):
    return { "status": "success" }
```

## 🚀 Enabling Backend Integration

### Step 1: Update Environment Variables

In `.env.local`:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
```

In `.env.production`:

```env
NEXT_PUBLIC_API_BASE_URL=https://your-backend-api.com/api
```

### Step 2: Enable API Calls in Components

In `app/page.jsx`, uncomment the API calls:

```javascript
// Import the API
import { portfolioAPI } from '@lib/api';

// In your component, replace static data with API calls:
const handleCommand = async (cmd) => {
  // ... command handling ...

  case 'cat':
    if (target === 'skills') {
      // Fetch from backend instead of static data
      const skillsData = await portfolioAPI.getSkills();
      // ... render with fetched data
    }
    break;
}
```

## 📋 Expected API Response Format

### GET /api/about

```json
{
  "name": "Md Jahirul Islam",
  "title": "Python Backend Developer",
  "email": "jahirulislam92134@gmail.com",
  "bio": "...",
  "stats": {
    "competitiveProgramming": "500+",
    "clientProducts": "6+",
    "experience": "1.5+ years"
  }
}
```

### GET /api/skills

```json
{
  "categories": [
    {
      "name": "Languages",
      "items": ["Python", "SQL", "C/C++"]
    },
    ...
  ]
}
```

### GET /api/projects

```json
{
  "projects": [
    {
      "id": 1,
      "name": "Project Name",
      "tech": "FastAPI, PostgreSQL",
      "highlights": ["Feature 1", "Feature 2"],
      "date": "2024"
    }
  ]
}
```

## 🔄 CORS Configuration

Your FastAPI backend needs CORS enabled:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://yourdomain.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## 🔐 Authentication (Optional)

For protected endpoints, the frontend has built-in JWT support:

```javascript
// In lib/apiClient.js, tokens are automatically added:
const token = localStorage.getItem("token");
if (token) {
  config.headers.Authorization = `Bearer ${token}`;
}
```

Backend should verify the JWT:

```python
from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer

security = HTTPBearer()

@app.get("/api/protected", dependencies=[Depends(security)])
async def protected_route():
    # Only authenticated users
    return {...}
```

## 🧪 Testing the Integration

1. Start your FastAPI backend:

   ```bash
   uvicorn main:app --reload --port 8000
   ```

2. Start the Next.js frontend:

   ```bash
   npm run dev
   # Open http://localhost:3000
   ```

3. Test the connection:
   - Check browser console for API calls
   - Verify no CORS errors
   - Check backend logs for requests

## 🐛 Troubleshooting

### CORS Errors

- Verify backend has CORS middleware
- Check `allow_origins` includes your frontend URL
- In development, use `*` temporarily for testing

### API Not Responding

- Verify backend is running on port 8000
- Check `NEXT_PUBLIC_API_BASE_URL` is correct
- Look at browser Network tab for failed requests

### Authentication Issues

- Ensure JWT token is stored in localStorage
- Check token format: `Bearer <token>`
- Verify backend validates token correctly

## 📝 Example FastAPI Backend

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/about")
async def get_about():
    return {
        "name": "Md Jahirul Islam",
        "title": "Python Backend Developer",
        "email": "jahirulislam92134@gmail.com",
        "bio": "Experienced backend developer..."
    }

@app.get("/api/skills")
async def get_skills():
    return {
        "categories": [
            {
                "name": "Languages",
                "items": ["Python", "SQL", "C/C++"]
            }
        ]
    }

class ContactForm(BaseModel):
    name: str
    email: str
    message: str

@app.post("/api/contact")
async def contact(form: ContactForm):
    # Process contact form
    return {"status": "success", "message": "Email sent"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

## 🚀 Deployment with Backend

### Docker Compose Setup

The `docker-compose.yml` file includes configuration for both frontend and backend. Uncomment the backend and database services:

```yaml
services:
  frontend:
    # ... portfolio service

  backend:
    build: ../your-backend-path
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/portfolio
    depends_on:
      - db

  db:
    image: postgres:16-alpine
    # ... database configuration
```

Then start both:

```bash
docker-compose up -d
```

---

For more help, check the main [README.md](README.md) or contact support.
