# Jahirul's Portfolio - React/Next.js Frontend

A modern, responsive portfolio website built with **React** and **Next.js 15**. Features a terminal-like interface showcasing backend development skills, projects, and experience.

## 🎯 Features

- ⚡ **Next.js 15** - Latest React framework with App Router
- 🎨 **Custom CSS** - Dark theme with GitHub-style color palette
- ⌨️ **Terminal UI** - Interactive command-line interface
- 🔌 **Backend Ready** - API integration layer with Axios
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- 🎯 **Fast Performance** - Optimized bundle, minimal dependencies
- 🚀 **Easy Deployment** - Works on Vercel, AWS EC2, and Docker

## 📂 Project Structure

```
portfolio/
├── app/                      # Next.js App Router
│   ├── layout.jsx           # Root layout with metadata
│   └── page.jsx             # Main portfolio page
├── components/              # React components
│   ├── TitleBar.jsx         # Browser-like title bar
│   ├── Sidebar.jsx          # File explorer sidebar
│   ├── Terminal.jsx         # Terminal input/output
│   ├── TerminalOutput.jsx   # Output display
│   └── StatusBar.jsx        # System status bar
├── data/                    # Data files (easily updatable)
│   └── portfolioData.js     # All portfolio content
├── lib/                     # Utilities and hooks
│   ├── api.js               # Backend API endpoints
│   ├── apiClient.js         # Axios instance with interceptors
│   ├── hooks.js             # Custom React hooks
│   └── terminalContent.js   # Terminal rendering functions
├── styles/                  # Global CSS
│   └── globals.css          # Main stylesheet
├── public/                  # Static assets
├── .env.local               # Local environment (development)
├── .env.production          # Production environment
├── package.json             # Dependencies and scripts
├── next.config.js           # Next.js configuration
├── jsconfig.json            # JS path aliases
├── Dockerfile               # Docker configuration
├── docker-compose.yml       # Multi-container setup
└── README.md                # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## 🔧 Configuration

### Environment Variables

Edit `.env.local` for development:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
```

Edit `.env.production` for production:
```env
NEXT_PUBLIC_API_BASE_URL=https://your-backend-api.com/api
```

### Update Portfolio Data

Edit `data/portfolioData.js` to customize:
- Personal information
- Skills and technologies
- Work experience
- Projects
- Education
- Certificates

All data is centralized for easy maintenance.

## 🔌 Backend Integration

The frontend is ready to connect with any backend. API endpoints are defined in `lib/api.js`:

```javascript
// Example: Fetch portfolio data from backend
const data = await portfolioAPI.getPortfolio();

// Or fetch specific sections
const skills = await portfolioAPI.getSkills();
const projects = await portfolioAPI.getProjects();
```

### API Endpoints Expected (Optional)

```
GET  /api/portfolio     - Full portfolio data
GET  /api/about         - About section
GET  /api/skills        - Technical skills
GET  /api/experience    - Work experience
GET  /api/projects      - Projects list
GET  /api/education     - Education
GET  /api/certificates  - Certificates
POST /api/contact       - Contact form submission
```

Currently, the app uses static data from `data/portfolioData.js`. To enable backend, uncomment the API calls in components.

## 📦 Available Scripts

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
npm run export   # Static export (for static hosting)
```

## 🌐 Deployment

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Connect your repository
4. Set environment variable: `NEXT_PUBLIC_API_BASE_URL`
5. Deploy (automatic on git push)

```bash
# Or deploy via CLI
npm i -g vercel
vercel
```

### Option 2: AWS EC2

1. **SSH into your instance:**
   ```bash
   ssh -i your-key.pem ec2-user@your-instance-ip
   ```

2. **Install Node.js:**
   ```bash
   curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
   sudo yum install -y nodejs
   ```

3. **Clone and setup:**
   ```bash
   git clone https://github.com/jahir010/portfolio.git
   cd portfolio
   npm install
   npm run build
   ```

4. **Use PM2 to keep it running:**
   ```bash
   sudo npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 startup
   pm2 save
   ```

5. **Set up Nginx reverse proxy:**
   ```bash
   sudo yum install -y nginx
   sudo systemctl start nginx
   ```

   Edit `/etc/nginx/nginx.conf`:
   ```nginx
   location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
   }
   ```

### Option 3: Docker

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 -e NEXT_PUBLIC_API_BASE_URL=http://your-backend.com/api portfolio

# Or use docker-compose
docker-compose up -d
```

## 🎨 Customization

### Colors & Theme
Edit CSS variables in `styles/globals.css`:
```css
:root {
  --bg: #0a0b10;
  --green: #3fb950;
  --blue: #58a6ff;
  --cyan: #39c5cf;
  /* ... more colors */
}
```

### Terminal Commands
Add new commands in `app/page.jsx` `handleCommand()` function:
```javascript
case 'custom':
  newOutput = [
    createPromptLine(cmd),
    { text: 'Your custom output', className: '' },
  ];
  break;
```

## 🔐 Security

- API keys should be in `.env.local` and `.env.production`
- Never commit `.env.local` to git (added to `.gitignore`)
- Use HTTPS in production
- Validate user input before API calls

## 📊 Performance

- Built with Next.js for optimal performance
- CSS is minimal and scoped
- No heavy libraries (uses vanilla JS where possible)
- Optimized images and assets
- Fast deployment with Vercel or Docker

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 📧 Support

For questions or issues:
- Email: jahirulislam92134@gmail.com
- GitHub: [@jahir010](https://github.com/jahir010)
- LinkedIn: [Md Jahirul Islam](https://www.linkedin.com/in/jahirul-islam-5b448a245/)

---

**Made with ❤️ by Md Jahirul Islam**
