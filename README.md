# 🚀 Modern React Portfolio

A beautiful, responsive portfolio website built with React, TypeScript, and Framer Motion.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional layout with smooth animations
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Performance Optimized** - Fast loading with lazy animations
- ♿ **Accessibility** - WCAG compliant with proper focus states
- 🎯 **SEO Ready** - Optimized for search engines
- 🔧 **Easy to Customize** - Well-structured code for easy modifications

## 🛠️ Technologies Used

- **React 18** - Latest React features
- **TypeScript** - Type safety and better development experience
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Beautiful icon library
- **React Scroll** - Smooth scrolling navigation
- **CSS3** - Modern styling with Grid and Flexbox

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 Customization Guide

### 1. Personal Information

Update your personal details in the following files:

#### Hero Section (`src/components/Hero.tsx`)
```typescript
// Update these lines
Hi, I'm <span className="highlight">Your Name</span>
Full Stack Developer

// Update social links
const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: FaEnvelope, url: 'mailto:your.email@example.com', label: 'Email' }
];
```

#### About Section (`src/components/About.tsx`)
```typescript
// Update skills array
const skills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL',
  'HTML/CSS', 'Git', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL'
];

// Update experience
const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Your Company',
    period: '2022 - Present',
    description: 'Your description here.'
  }
];
```

#### Contact Section (`src/components/Contact.tsx`)
```typescript
// Update contact information
const contactInfo = [
  {
    icon: FaEnvelope,
    title: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com'
  },
  {
    icon: FaPhone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Location',
    value: 'Your City, State',
    link: '#'
  }
];
```

### 2. Projects

Update your projects in `src/components/Projects.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description here.',
    image: '/project1.jpg', // Add your project image
    category: 'web', // 'web', 'mobile', or 'fullstack'
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project',
    live: 'https://your-project.com',
    featured: true // Set to true for featured projects
  }
];
```

### 3. Styling

#### Colors
Update the color scheme in `src/App.css`:
```css
:root {
  --primary-color: #007bff;
  --secondary-color: #0056b3;
  --accent-color: #ffd700;
}
```

#### Fonts
Change the font in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');
```

### 4. Images

1. Add your profile photo to the `public` folder
2. Add project screenshots to the `public` folder
3. Update image paths in the components

### 5. Resume

1. Add your resume PDF to the `public` folder
2. Update the download link in `src/components/About.tsx`:
```typescript
<a href="/your-resume.pdf" className="btn btn-primary" download>
  <FaDownload /> Download Resume
</a>
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── App.css             # Global styles
└── index.css           # Base styles
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 🎯 Performance Tips

- Optimize images before adding them
- Use WebP format for better compression
- Minimize bundle size by removing unused dependencies
- Enable gzip compression on your hosting provider

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

Made with ❤️ using React and TypeScript
