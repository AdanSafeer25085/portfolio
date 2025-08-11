# MERN Stack Developer Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features a clean design with dark/light mode toggle and smooth animations.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient accents
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations and transitions using Framer Motion
- **Interactive Components**: Project modals, contact form, and more
- **SEO Optimized**: Built with Next.js for optimal performance and SEO
- **TypeScript**: Full type safety throughout the application
- **Contact Form**: Working contact form with validation and API integration

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **Theme**: Next Themes for dark/light mode
- **Deployment**: Vercel

## 📱 Sections

1. **Hero**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal information, stats, and professional summary
3. **Skills**: Interactive skill bars showing proficiency levels
4. **Projects**: Featured projects with detailed modals
5. **Experience**: Professional timeline with work history
6. **Blog**: Latest blog posts with tags and read time
7. **Contact**: Contact form and social media links
8. **Footer**: Quick links and additional information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Edit the `src/data/portfolio.ts` file to update:
- Personal details (name, title, bio)
- Contact information
- Social media links
- Skills and proficiency levels
- Work experience
- Projects
- Blog posts

### Styling

- Colors and themes can be customized in `tailwind.config.ts`
- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind classes

### Content

- **Resume**: Replace `public/resume.pdf` with your own resume
- **Images**: Add project images to the `public` folder
- **Blog Posts**: Update the blog data in `src/data/portfolio.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📧 Contact Form

The contact form includes:
- Client-side validation using Zod
- API route for form submission (`/api/contact`)
- Success/error feedback
- Responsive design

To integrate with email services, update the API route in `src/app/api/contact/route.ts`.

## 🎨 Theme Customization

The portfolio supports both light and dark themes:
- Theme toggle in the navigation bar
- Automatic system theme detection
- Smooth transitions between themes
- Persistent theme selection

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Optimized for all screen sizes
- Touch-friendly interactions

## ⚡ Performance

- Next.js 14 with App Router
- Optimized images and fonts
- Code splitting and lazy loading
- SEO optimization
- Fast loading times

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Built with ❤️ and lots of coffee** ☕
