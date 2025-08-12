import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  adjustFontFallback: true,
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
});

export const metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  title: {
    default: 'Adan - Full Stack Developer',
    template: '%s | Adan - Full Stack Developer'
  },
  description: 'Full Stack Developer passionate about creating innovative digital solutions and building user-centric applications with React, Node.js, and modern web technologies.',
  keywords: ['full stack developer', 'web developer', 'react developer', 'node.js developer', 'javascript', 'typescript', 'portfolio', 'software engineer'],
  authors: [{ name: 'Adan', url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000' }],
  creator: 'Adan',
  publisher: 'Adan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000',
    title: 'Adan - Full Stack Developer',
    description: 'Full Stack Developer passionate about creating innovative digital solutions and building user-centric applications.',
    siteName: 'Adan Portfolio',
    images: [
      {
        url: '/Project.jpg',
        width: 1200,
        height: 630,
        alt: 'Adan - Full Stack Developer Portfolio'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adan - Full Stack Developer',
    description: 'Full Stack Developer passionate about creating innovative digital solutions and building user-centric applications.',
    images: ['/Project.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={`${inter.variable} ${inter.className} antialiased`}>
        <noscript>
          <div style={{padding: '20px', textAlign: 'center', backgroundColor: '#1a1a1a', color: '#fff'}}>
            Please enable JavaScript to view this portfolio website.
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}
