# Crux Vision

A Next.js-powered web application that provides AI-driven image analysis capabilities. 

## Live Demo

Visit our live application: [https://crux-vision.vercel.app/](https://crux-vision.vercel.app/)

Scan the QR code below to open the application on your mobile device:

<img src="/public/crux-vision-vercel-app.png" alt="Crux Vision QR Code" width="200"/>

### Demo Recording
Watch our application demo: [Crux Vision Demo](https://www.loom.com/share/d932d509314642a0b3d879e5876e5173?sid=5af3eb25-16be-4a29-8119-482429c180d5)

## Technical Documentation

For detailed information about the application's architecture, design decisions, and technical implementation, please refer to our [Design Documentation](./DESIGN.md).

## Local Development Setup

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm package manager
- Git

### Installation Steps

1. **Clone the Repository**
```bash
   git clone https://github.com/yourusername/crux-vision.git
   cd crux-vision
```

2. **Install Dependencies**
```npm install
# or
yarn install
# or
pnpm install
```

3. **Environment Setup Create a new `.env.local` file in the root directory:**
```
NEXT_PUBLIC_CRUX_API_KEY=google_crux_api_key
```

4. **Start Development Server:**
```
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Access the Application
- Open your browser and navigate to http://localhost:3000
- The application will automatically reload when you make changes
- Hot-module replacement is enabled for faster development

### Project Structure
```
crux-vision/
├── app/              # Next.js app directory
├── components/       # Reusable React components
├── public/           # Static assets
├── styles/           # Global styles and CSS modules
├── .env.local        # Environment variables (create this)
└── package.json      # Project dependencies and scripts
```