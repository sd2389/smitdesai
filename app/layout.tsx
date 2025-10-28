import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Fira_Code, Source_Code_Pro, Space_Mono, Orbitron, Exo_2, Rajdhani, Audiowide } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smit Desai - Full-Stack Developer | Enterprise Solutions Expert | Django & React Specialist",
  description: "🚀 Full-stack developer who turns coffee into code and complex business problems into elegant solutions. Specializing in Django, React, Next.js, and enterprise applications. Building the future, one line of code at a time.",
  keywords: [
    "Full-Stack Developer", "Django Expert", "React Specialist", "Next.js Developer", 
    "TypeScript", "Python Developer", "Enterprise Software", "ERP Systems", 
    "Web Development", "Software Engineer", "Smit Desai", "Jewelry ERP", 
    "E-commerce Solutions", "Civic Engagement", "Performance Optimization",
    "Database Design", "API Development", "Frontend Development", "Backend Development",
    "Project Management", "Product Owner", "Agile Scrum", "Problem Solving",
    "Stakeholder Management", "Technical Leadership", "Business Analysis"
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
    url: "https://smitdesai.com",
    title: "Smit Desai - Full-Stack Developer | Enterprise Solutions Expert",
    description: "🚀 Full-stack developer who turns coffee into code and complex business problems into elegant solutions. Specializing in Django, React, Next.js, and enterprise applications.",
    siteName: "Smit Desai Portfolio",
    images: [
      {
        url: "https://smitdesai.com/og-image.jpg",
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
    images: ["https://smitdesai.com/og-image.jpg"],
    creator: "@smssmit",
  },
  alternates: {
    canonical: "https://smitdesai.com",
  },
  category: "Technology",
  other: {
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
    "yandex-verification": "your-yandex-verification-code",
    "baidu-site-verification": "your-baidu-verification-code",
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "bingbot": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "slurp": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "duckduckbot": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "baiduspider": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "yandexbot": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "gptbot": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "chatgpt-user": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "ccbot": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "anthropic-ai": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "claude-web": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "perplexitybot": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "youbot": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "bard": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${firaCode.variable} ${sourceCodePro.variable} ${spaceMono.variable} ${orbitron.variable} ${exo2.variable} ${rajdhani.variable} ${audiowide.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
