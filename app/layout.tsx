import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { EnhancedPerformanceMonitor } from "@/components/EnhancedPerformanceMonitor";
import { DeferredAnalytics } from "@/components/DeferredAnalytics";
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";
import { LCPMonitor } from "@/components/LCPMonitor";
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
        
        {/* Preload critical resources for LCP optimization */}
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />
        <link rel="preload" href="/_next/static/chunks/main.js" as="script" />
        
        {/* Preload critical fonts for LCP */}
        <link 
          rel="preload" 
          href="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
        
        {/* Preload hero section critical resources */}
        <link rel="preload" href="/_next/static/chunks/app/page.js" as="script" />
        
        {/* Critical CSS for LCP optimization */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical above-the-fold CSS - LCP optimized */
            * { box-sizing: border-box; }
            body { 
              margin: 0; 
              font-family: var(--font-inter), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
              line-height: 1.6;
              color: #1f2937;
              background: #ffffff;
            }
            
            /* Hero section critical styles */
            .hero-lcp-section {
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #f0f9ff 100%);
              position: relative;
              overflow: hidden;
            }
            
            .hero-lcp-content {
              text-align: center;
              max-width: 64rem;
              margin: 0 auto;
              padding: 0 1rem;
              position: relative;
              z-index: 10;
            }
            
            .hero-lcp-title {
              font-size: clamp(2rem, 5vw, 4.5rem);
              font-weight: 700;
              line-height: 1.2;
              margin-bottom: 1.5rem;
              background: linear-gradient(90deg, #1f2937 0%, #4682B4 50%, #1f2937 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              color: transparent;
            }
            
            .hero-lcp-subtitle {
              font-size: clamp(1.125rem, 3vw, 2.25rem);
              font-weight: 600;
              color: #6b7280;
              margin-bottom: 1.5rem;
            }
            
            .hero-lcp-description {
              font-size: clamp(1rem, 2.5vw, 1.25rem);
              color: #6b7280;
              max-width: 48rem;
              margin: 0 auto 2rem;
              line-height: 1.6;
              opacity: 1;
              transform: none;
            }
            
            .hero-lcp-buttons {
              display: flex;
              flex-direction: column;
              gap: 1rem;
              justify-content: center;
              align-items: center;
              margin-bottom: 3rem;
            }
            
            .hero-lcp-button {
              padding: 1rem 2rem;
              border-radius: 9999px;
              font-weight: 600;
              text-decoration: none;
              display: inline-block;
              transition: all 0.2s ease;
              border: none;
              cursor: pointer;
            }
            
            .hero-lcp-button-primary {
              background-color: #4682B4;
              color: white;
            }
            
            .hero-lcp-button-secondary {
              border: 2px solid #4682B4;
              color: #4682B4;
              background-color: transparent;
            }
            
            .hero-lcp-tech-stack {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 0.5rem;
              margin-top: 3rem;
            }
            
            .hero-lcp-tech-item {
              padding: 0.5rem 1rem;
              background-color: rgba(70, 130, 180, 0.05);
              color: #1d4ed8;
              border-radius: 9999px;
              font-size: 0.875rem;
              font-weight: 500;
              border: 1px solid rgba(70, 130, 180, 0.2);
            }
            
            @media (min-width: 640px) {
              .hero-lcp-buttons {
                flex-direction: row;
              }
            }
            
            /* Grid background */
            .hero-lcp-grid {
              position: absolute;
              inset: 0;
              overflow: hidden;
              pointer-events: none;
              z-index: 0;
              background-image: 
                linear-gradient(rgba(70, 130, 180, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(70, 130, 180, 0.4) 1px, transparent 1px);
              background-size: 30px 30px;
              opacity: 0.3;
            }
          `
        }} />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <LCPMonitor />
        <EnhancedPerformanceMonitor />
        <DeferredAnalytics />
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
