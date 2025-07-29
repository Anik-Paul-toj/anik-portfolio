# 🎨 Quick Customization Guide

## 🚀 Your Portfolio is Ready!

Your React portfolio is now running at `http://localhost:3000`

## 📝 Quick Updates (5 minutes)

### 1. Update Your Name & Title
**File:** `src/components/Hero.tsx`
```typescript
// Line 25: Change "Your Name" to your actual name
Hi, I'm <span className="highlight">Your Name</span>

// Line 30: Change "Full Stack Developer" to your title
Full Stack Developer

// Line 33-35: Update the description
I create beautiful, functional, and user-centered digital experiences. 
Passionate about clean code and innovative solutions.
```

### 2. Update Social Links
**File:** `src/components/Hero.tsx`
```typescript
// Lines 8-12: Update with your actual social links
const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/YOUR_USERNAME', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://linkedin.com/in/YOUR_USERNAME', label: 'LinkedIn' },
  { icon: FaEnvelope, url: 'mailto:your.email@example.com', label: 'Email' }
];
```

### 3. Update About Section
**File:** `src/components/About.tsx`
```typescript
// Lines 7-11: Update your skills
const skills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL',
  'HTML/CSS', 'Git', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL'
];

// Lines 13-30: Update your experience
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Your Company',
    period: '2022 - Present',
    description: 'Your job description here.'
  }
];
```

### 4. Update Contact Information
**File:** `src/components/Contact.tsx`
```typescript
// Lines 25-40: Update contact details
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

## 🎯 Add Your Projects

**File:** `src/components/Projects.tsx`
```typescript
// Replace the projects array (lines 15-70) with your actual projects
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Description of your project and what it does.',
    image: '/project1.jpg', // Add image to public folder
    category: 'web', // 'web', 'mobile', or 'fullstack'
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project',
    live: 'https://your-project.com',
    featured: true
  }
];
```

## 🖼️ Add Images

1. **Profile Photo:** Add your photo to `public/` folder
2. **Project Screenshots:** Add project images to `public/` folder
3. **Resume:** Add your resume PDF to `public/` folder

## 🎨 Customize Colors

**File:** `src/App.css`
```css
/* Update these colors to match your brand */
.btn-primary {
  background: linear-gradient(45deg, #YOUR_COLOR, #YOUR_COLOR_DARK);
}

.highlight {
  background: linear-gradient(45deg, #YOUR_ACCENT_COLOR, #YOUR_ACCENT_COLOR_LIGHT);
}
```

## 🚀 Deploy Your Portfolio

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify (Free):**
   - Push to GitHub
   - Connect to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `build`

## 💡 Pro Tips

- **Save changes** and the page will automatically reload
- **Test on mobile** - your portfolio is fully responsive
- **Optimize images** before adding them (use WebP format)
- **Add meta tags** for better SEO in `public/index.html`

## 🆘 Need Help?

- Check the main `README.md` for detailed instructions
- All components are well-commented for easy customization
- The code is structured for easy modifications

---

**Your portfolio is now live at `http://localhost:3000`** 🎉 