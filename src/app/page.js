'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Critical component - load immediately
import Header from '@/components/Header';
import Hero from '@/components/Hero';

// Lazy load non-critical components
const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div className="min-h-screen bg-black flex items-center justify-center"><div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div></div>,
  ssr: true
});

const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="min-h-screen bg-black flex items-center justify-center"><div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div></div>,
  ssr: true
});

const Contacts = dynamic(() => import('@/components/Contacts'), {
  loading: () => <div className="min-h-screen bg-black flex items-center justify-center"><div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div></div>,
  ssr: true
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 bg-black"></div>,
  ssr: true
});

export default function Home() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded z-50">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="min-h-screen bg-black">
        <Hero />
        <Suspense fallback={<div className="min-h-screen bg-black"></div>}>
          <Projects />
          <About />
          <Contacts />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}