# DECO Construction Company - Landing Page

A modern, professional, fully responsive static construction company landing page built with **React + Vite** and **Tailwind CSS**.

## 🏗️ About the Project

This is a professional single-page website for **DECO Construction Company**, a family-owned construction business with over 22 years of industry experience, specializing in residential and commercial construction projects.

## ✨ Features

- **Modern Design** - Clean, professional construction-themed UI
- **Fully Responsive** - Mobile-first design that works on all devices
- **Smooth Navigation** - Sticky navbar with smooth scroll behavior
- **Performance Optimized** - Fast load times with minimal dependencies
- **Accessible** - Semantic HTML and proper ARIA labels
- **No Backend Required** - Completely static, ready to deploy

## 🎨 Design Highlights

- **Color Palette:**
  - Primary: Dark Blue/Charcoal (Slate-900)
  - Secondary: Construction Yellow/Orange (Amber-500)
  - Accent: White/Light Gray
  
- **Typography:** Inter font family from Google Fonts
- **Icons:** React Icons library
- **Animations:** Subtle hover effects and smooth transitions

## 📋 Page Sections

1. **Navbar** - Sticky navigation with logo and smooth scroll links
2. **Hero Section** - Strong headline with CTA and quick stats
3. **About Us** - Company background and credibility
4. **Services** - Card-based layout showcasing all services
5. **Machinery & Workforce** - Equipment and staff showcase
6. **Experience Stats** - Large numeric counters highlighting achievements
7. **Contact Section** - Contact information and CTAs
8. **Footer** - Company info and social links

## 🛠️ Tech Stack

- **Framework:** React 19.2.0
- **Build Tool:** Vite 7.2.4
- **Styling:** Tailwind CSS 4.1.18
- **Icons:** React Icons 5.5.0
- **Language:** JavaScript (ES6+)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd decoconstruction
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
decoconstruction/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Machinery.jsx
│   │   ├── Stats.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🏢 Company Information

**Company Name:** DECO Construction Company

**Experience:**
- 22+ Years in Construction Business
- 11+ Years of Active Owner Involvement
- 7 Heavy Machines (2 JCBs, 3 Dumpers, 2 Tractors)
- 13 Skilled Staff Members

**Services:**
- Residential Construction
- Commercial Construction
- Labour Contract Work
- Site Development & Earthwork

## 📝 Customization

To customize the content:

1. **Contact Information** - Edit `src/components/Contact.jsx`
2. **Services** - Modify the services array in `src/components/Services.jsx`
3. **Colors** - Update Tailwind classes throughout components
4. **Company Info** - Edit text in respective component files

## 🌐 Deployment

This static site can be deployed to:
- **Vercel** - `npm run build` then deploy `dist/` folder
- **Netlify** - Connect repository or drag-and-drop `dist/` folder
- **GitHub Pages** - Push `dist/` to gh-pages branch
- **Any static hosting service**

## 📄 License

This project is created for DECO Construction Company.

## 🤝 Support

For any questions or support, please contact the development team.

---

**Built with ❤️ using React + Vite + Tailwind CSS**
