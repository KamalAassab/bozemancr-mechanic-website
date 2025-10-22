# 🚗 Bozeman Car Repair - Professional Automotive Services

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

> **Professional automotive repair and performance modification services in Bozeman, Montana**

## 🌟 Overview

Bozeman Car Repair is a modern, responsive website built for a professional automotive service business. The website showcases comprehensive car repair services, performance modifications, and custom fabrication with an engaging user experience.

## ✨ Features

### 🎨 **Modern Design**
- **Responsive Layout** - Optimized for all devices (mobile, tablet, desktop)
- **Professional UI/UX** - Clean, modern interface with automotive theme
- **Interactive Elements** - Engaging animations and hover effects
- **Custom Graphics** - Professional SVG icons and imagery

### 🚀 **Performance & Technical**
- **Next.js 14** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **SEO Optimized** - Meta tags and structured data
- **Image Optimization** - Next.js Image component for fast loading

### 🔧 **Business Features**
- **Service Showcase** - Comprehensive automotive services
- **Performance Mods** - Custom performance modifications
- **Gallery** - Professional work examples
- **Contact Forms** - Lead generation and customer inquiries
- **Testimonials** - Customer reviews and feedback
- **Team Section** - Meet the professionals

## 🛠️ Services Offered

### **🔧 Core Services**
- **Performance Modifications** - Engine tuning, exhaust systems, suspension upgrades
- **Custom Fabrication** - Bespoke automotive solutions
- **Maintenance Services** - Regular upkeep and preventive care
- **Repair Diagnostics** - Advanced computer diagnostics
- **Brake Services** - Complete brake system maintenance
- **Alignment Services** - Precision wheel alignment
- **Oil Changes** - Regular maintenance services

### **⚡ Performance Specialties**
- **Engine Tuning** - ECU remapping and performance optimization
- **Exhaust Systems** - Custom exhaust fabrication and installation
- **Suspension Upgrades** - Performance suspension systems
- **Air Flow Modifications** - Intake and cooling system upgrades
- **Transmission Services** - Manual and automatic transmission work

## 🏗️ Project Structure

```
bozemancr-mechanic-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles
│   │   └── ClientBody.tsx     # Client-side wrapper
│   ├── components/          # React components
│   │   ├── Navigation.tsx     # Header navigation
│   │   ├── HeroSection.tsx    # Hero section
│   │   ├── PartnersSection.tsx # Partners showcase
│   │   ├── PerformanceModsSection.tsx # Performance services
│   │   ├── AdditionalServices.tsx # Service listings
│   │   ├── ServiceModal.tsx   # Service detail modals
│   │   ├── TestimonialsSection.tsx # Customer reviews
│   │   ├── TeamSection.tsx    # Team members
│   │   ├── ContactSection.tsx # Contact forms
│   │   ├── InstagramSection.tsx # Social media integration
│   │   ├── Footer.tsx         # Footer
│   │   └── ui/                # UI components
│   │       ├── button.tsx     # Shadcn button
│   │       ├── button-rotate.tsx # Custom rotating button
│   │       └── card-stack.tsx  # Image gallery
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/                     # Static assets
│   ├── svg/                   # SVG icons
│   ├── gallery/               # Image gallery
│   └── *.jpg, *.png          # Images
├── package.json               # Dependencies
├── tailwind.config.ts         # Tailwind configuration
├── next.config.js            # Next.js configuration
└── README.md                  # This file
```

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/KamalAassab/bozemancr-mechanic-website.git
   cd bozemancr-mechanic-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### **Build for Production**

```bash
npm run build
npm start
```

## 🎨 Design System

### **Color Palette**
- **Primary**: Red (#f0083b) - Automotive theme
- **Secondary**: Yellow (#fbbf24) - Call-to-action accents
- **Background**: Black/Gray gradients
- **Text**: White/Black contrast

### **Typography**
- **Headings**: Roboto Condensed (Bold, Italic)
- **Body**: Roboto (Regular)
- **Sizes**: Responsive scaling (text-sm to text-9xl)

### **Components**
- **Buttons**: Custom rotating CTA buttons
- **Cards**: Service cards with hover effects
- **Modals**: Animated service detail popups
- **Navigation**: Responsive mobile-first design

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Tablet** - Enhanced layout for medium screens
- **Desktop** - Full-featured desktop experience
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)

## 🔧 Custom Features

### **Rotating Button Component**
- **Interactive CTA** - "START HERE NOW" rotating text
- **Brake Icons** - Automotive-themed center icons
- **Counter-rotation** - Icons rotate opposite to text
- **Hover Effects** - Smooth color transitions

### **Image Gallery**
- **Card Stack** - Layered image presentation
- **Navigation** - Custom arrow controls
- **Animations** - Smooth transitions between images
- **Responsive** - Adapts to all screen sizes

### **Service Modals**
- **Animated Popups** - Framer Motion animations
- **Service Details** - Comprehensive service information
- **Interactive** - Click outside to close
- **Mobile Optimized** - Touch-friendly interface

## 🚀 Deployment

### **Netlify (Recommended)**
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `out`
4. Deploy automatically on push

### **Vercel**
1. Import from GitHub
2. Framework: Next.js
3. Deploy automatically

### **Manual Deployment**
```bash
npm run build
npm run export
# Deploy the 'out' directory
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for Google ranking
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Bundle Size**: Optimized for fast loading

## 🔒 Security

- **TypeScript** - Type safety and error prevention
- **ESLint** - Code quality and consistency
- **Biome** - Fast linting and formatting
- **Dependencies** - Regular security updates

## 📈 SEO Features

- **Meta Tags** - Comprehensive meta information
- **Structured Data** - Schema.org markup
- **Sitemap** - Automatic sitemap generation
- **Robots.txt** - Search engine directives
- **Open Graph** - Social media sharing optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📞 Contact

**Bozeman Car Repair**
- **Location**: Bozeman, Montana
- **Phone**: (406) 555-0123
- **Email**: info@bozemancr.com
- **Website**: [bozemancr.com](https://bozemancr.com)

---

<div align="center">

**Built with ❤️ for Bozeman Car Repair**

*Professional automotive services in the heart of Montana*

</div>