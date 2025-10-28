import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { EnhancedPerformanceMonitor } from "@/components/EnhancedPerformanceMonitor";
import { DeferredAnalytics } from "@/components/DeferredAnalytics";
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";
import "./globals.css";

// Optimized font loading - only essential fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "sans-serif"
  ],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Only load when needed
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Monaco",
    "Consolas",
    "monospace"
  ],
});

export const metadata: Metadata = {
  title: "Smit Desai - Full-Stack Developer | Enterprise Solutions Expert | Django & React Specialist",
  description: "🚀 Full-stack developer who turns coffee into code and complex business problems into elegant solutions. Specializing in Django, React, Next.js, and enterprise applications. Building the future, one line of code at a time.",
  keywords: [
    "Full-Stack Developer", "Django Expert", "React Specialist", "Next.js Developer", 
    "Next.js 15", "TypeScript", "Python Developer", "Enterprise Software", "ERP Systems", 
    "Web Development", "Software Engineer", "Smit Desai", "Jewelry ERP", 
    "E-commerce Solutions", "Civic Engagement", "Performance Optimization",
    "Database Design", "API Development", "Frontend Development", "Backend Development",
    "Project Management", "Product Owner", "Agile Scrum", "Problem Solving",
    "Stakeholder Management", "Technical Leadership", "Business Analysis",
    "Tailwind CSS", "Framer Motion", "Vercel", "AWS", "MySQL", "Redis",
    "SEO Optimization", "Accessibility", "DevOps", "Freelance Developer",
    "Available for Hire", "Remote Developer", "Consulting", "Technical Consulting",
    "Enterprise Solutions", "SaaS Development", "Portfolio Websites"
  ],
  authors: [{ name: "Smit Desai", url: "https://smitdesai.com" }],
  creator: "Smit Desai",
  publisher: "Smit Desai",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smitdesai.vercel.app",
    title: "Smit Desai - Full-Stack Developer | Enterprise Solutions Expert",
    description: "🚀 Full-stack developer who turns coffee into code and complex business problems into elegant solutions. Specializing in Django, React, Next.js, and enterprise applications.",
    siteName: "Smit Desai Portfolio",
    images: [
      {
        url: "https://smitdesai.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Smit Desai - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smit Desai - Full-Stack Developer | Enterprise Solutions Expert",
    description: "🚀 Full-stack developer who turns coffee into code and complex business problems into elegant solutions. Specializing in Django, React, Next.js, and enterprise applications.",
    images: ["https://smitdesai.vercel.app/og-image.jpg"],
    creator: "@smssmit",
  },
  alternates: {
    canonical: "https://smitdesai.vercel.app",
  },
  category: "Technology",
  other: {
    // Additional meta tags for better search engine discovery
    "google-site-verification": "ETPhzKqmwypLoVWnxuoknHnLa9aSSPEr1WIunZLlr2A",
    "msvalidate.01": "your-bing-verification-code", // Replace with actual code
    "yandex-verification": "your-yandex-verification-code", // Replace with actual code
    "baidu-site-verification": "your-baidu-verification-code", // Replace with actual code
    
    // Additional SEO meta tags
    "rating": "general",
    "distribution": "global",
    "language": "en",
    "geo.region": "US",
    "geo.placename": "United States",
    "geo.position": "39.8283;-98.5795",
    "ICBM": "39.8283, -98.5795",
    
    // Mobile and device optimization
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Smit Desai Portfolio",
    
    // Additional search engine hints
    "revisit-after": "7 days",
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    
    // Professional and business meta tags
    "author": "Smit Desai",
    "copyright": "Smit Desai",
    "designer": "Smit Desai",
    "reply-to": "smssmit@gmail.com",
    "owner": "Smit Desai",
    "url": "https://smitdesai.vercel.app",
    "identifier-URL": "https://smitdesai.vercel.app",
    "coverage": "Worldwide",
    "target": "all",
    "audience": "all",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Resource hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vercel.com" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />
        <link rel="preload" href="/_next/static/chunks/main.js" as="script" />
        
        {/* Critical CSS */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical above-the-fold CSS */
            body { margin: 0; font-family: var(--font-inter), system-ui, sans-serif; }
            .hero-section { min-height: 100vh; display: flex; align-items: center; }
            .hero-content { text-align: center; max-width: 64rem; margin: 0 auto; padding: 0 1rem; }
            .hero-title { font-size: 2.5rem; font-weight: 700; line-height: 1.2; margin-bottom: 1.5rem; }
            @media (min-width: 640px) { .hero-title { font-size: 3.75rem; } }
            @media (min-width: 1024px) { .hero-title { font-size: 4.5rem; } }
          `
        }} />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <EnhancedPerformanceMonitor />
        <DeferredAnalytics />
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
