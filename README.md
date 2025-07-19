# 🚀 Modern Portfolio Website

A stunning, responsive portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Features a modern design with smooth animations, dark/light theme support, and a fully customizable data structure.

![Portfolio Preview](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.1-purple?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.11-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🌙 **Dark/Light Theme** - Automatic theme switching with system preference detection
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎯 **SEO Optimized** - Meta tags and structured data for better search visibility
- 🔧 **Easy Customization** - Simple data structure for quick personalization
- 🎭 **Smooth Animations** - Framer Motion inspired animations and transitions
- 📧 **Contact Form** - Functional contact section with form validation
- 🚀 **Deployment Ready** - Optimized for Vercel, Netlify, and other platforms

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui components
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)
- **Theme**: next-themes for dark/light mode
- **Forms**: React Hook Form with Zod validation
- **Animations**: CSS animations and transitions

## 🚀 Quick Start

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** or **bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/codewithkd77/MyPortfolio.git
   cd MyPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to see your portfolio!

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── HeroSection.tsx # Hero section component
│   ├── AboutSection.tsx # About section component
│   ├── SkillsSection.tsx # Skills section component
│   ├── ProjectsSection.tsx # Projects section component
│   ├── ContactSection.tsx # Contact section component
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   └── ThemeToggle.tsx # Theme toggle component
├── data/
│   └── portfolioData.ts # Your portfolio data
├── pages/
│   ├── Index.tsx       # Main page component
│   └── NotFound.tsx    # 404 page component
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── App.tsx             # Main app component
└── main.tsx            # App entry point
```

## 🎨 Customization Guide

### 1. Personal Information

Edit `src/data/portfolioData.ts` to update your personal information:

```typescript
export const portfolioData: PortfolioData = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio description...",
  skills: ["Skill 1", "Skill 2", "Skill 3"],
  projects: [
    {
      name: "Project Name",
      description: "Project description...",
      technologies: ["Tech 1", "Tech 2"],
      github: "https://github.com/yourusername/project",
      demo: "https://demo-link.com"
    }
  ],
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  }
};
```

### 2. Styling Customization

- **Colors**: Modify `tailwind.config.ts` for custom color schemes
- **Fonts**: Update font families in `tailwind.config.ts`
- **Animations**: Customize animations in `src/index.css`

### 3. Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/pages/Index.tsx`
3. Update the navigation in `src/components/Navbar.tsx`

### 4. Theme Customization

The project uses `next-themes` for theme management. You can:
- Modify theme colors in `tailwind.config.ts`
- Add custom CSS variables in `src/index.css`
- Update the theme toggle component in `src/components/ThemeToggle.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the Vite configuration
   - Click "Deploy"

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository for automatic deployments

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add scripts to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages (if configured)

## 🎯 Performance Optimization

The project includes several performance optimizations:

- **Code Splitting**: Automatic code splitting with React Router
- **Lazy Loading**: Images and components are lazy-loaded
- **Optimized Builds**: Vite's optimized build process
- **Caching**: Proper cache headers for static assets
- **Minification**: CSS and JS are minified in production

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `vercel.json` - Vercel deployment configuration
- `components.json` - shadcn/ui configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Vite](https://vitejs.dev/) for fast build tooling
- [Lucide](https://lucide.dev/) for beautiful icons
- [Framer Motion](https://www.framer.com/motion/) for animation inspiration

## 📞 Support

If you have any questions or need help with customization:

- 📧 Email: [your.email@example.com](mailto:rathodkuldeep999.com)
- 🐛 Issues: [GitHub Issues](https://github.com/codewithkd77/MyPortfolio/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/codewithkd77/MyPortfolio/discussions)

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by [Your Name](https://github.com/codewithkd77)
