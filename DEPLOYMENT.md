# Deployment Guide

This guide will help you deploy your MERN Stack Developer Portfolio to Vercel.

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Complete MERN Stack Portfolio"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

### Option 2: Deploy with Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

## 🔧 Environment Variables

If you add any environment variables later (for email services, databases, etc.), add them in:

- **Vercel Dashboard**: Project Settings → Environment Variables
- **Local Development**: Create `.env.local` file

Example `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
EMAIL_SERVICE_API_KEY=your-api-key
DATABASE_URL=your-database-url
```

## 📧 Email Integration (Optional)

To make the contact form send actual emails, integrate with services like:

### SendGrid
```bash
npm install @sendgrid/mail
```

### Resend
```bash
npm install resend
```

### Nodemailer
```bash
npm install nodemailer
```

Update `src/app/api/contact/route.ts` with your chosen service.

## 🌐 Custom Domain

1. **In Vercel Dashboard**:
   - Go to Project Settings
   - Click "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

2. **DNS Configuration**:
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or add A record pointing to Vercel's IP

## 📊 Analytics (Optional)

### Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to `src/app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Google Analytics
Add Google Analytics ID to environment variables and integrate with `next/script`.

## 🔍 SEO Optimization

The portfolio is already optimized for SEO with:
- Meta tags in `layout.tsx`
- Semantic HTML structure
- Fast loading times
- Mobile responsiveness

To further optimize:
1. Add `sitemap.xml`
2. Add `robots.txt`
3. Implement structured data
4. Add Open Graph images

## 🚀 Performance Tips

1. **Image Optimization**: Use Next.js `Image` component
2. **Font Optimization**: Fonts are already optimized with `next/font`
3. **Code Splitting**: Automatic with Next.js App Router
4. **Caching**: Configured automatically by Vercel

## 🔒 Security

- HTTPS enabled by default on Vercel
- Environment variables are secure
- API routes are protected
- Form validation prevents malicious input

## 📱 PWA (Optional)

To make it a Progressive Web App:
```bash
npm install next-pwa
```

Configure in `next.config.js` and add manifest files.

## 🐛 Troubleshooting

### Build Errors
- Check TypeScript errors: `npm run type-check`
- Check linting: `npm run lint`
- Clear cache: `rm -rf .next`

### Deployment Issues
- Check build logs in Vercel dashboard
- Verify environment variables
- Check function timeout limits

### Performance Issues
- Use Vercel Analytics to identify bottlenecks
- Optimize images and fonts
- Check bundle size with `npm run analyze`

## 📞 Support

If you encounter any issues:
1. Check Vercel documentation
2. Review build logs
3. Test locally with `npm run build && npm start`
4. Contact support if needed

---

**Happy Deploying! 🚀**
