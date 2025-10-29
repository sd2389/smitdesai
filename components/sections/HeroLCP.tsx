"use client";

/**
 * Ultra-optimized Hero component specifically designed for LCP performance
 * - No animations or complex state
 * - Minimal JavaScript execution
 * - Critical CSS inline
 * - Immediate render without delays
 */
export function HeroLCP() {
  return (
    <section 
      id="home"
      className="hero-lcp-section pt-20 sm:pt-0"
    >
      {/* Simple Grid Background - CSS only */}
      <div className="hero-lcp-grid" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="hero-lcp-content">
          {/* Floating Icons - Static, no animations */}
          <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-4 sm:mb-6 md:mb-8">
            <div className="p-1.5 sm:p-2 md:p-3 bg-primary/10 rounded-full">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="p-1.5 sm:p-2 md:p-3 bg-primary/10 rounded-full">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <div className="p-1.5 sm:p-2 md:p-3 bg-primary/10 rounded-full">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>

          {/* Main Heading - Critical LCP element */}
          <h1 className="hero-lcp-title">
            Hey there! I&apos;m Smit Desai
          </h1>

          <div className="mb-4 sm:mb-6">
            <h2 className="hero-lcp-subtitle">
              Full-Stack Developer & Code Whisperer
            </h2>
          </div>

          {/* LCP Text Element - This is likely the LCP element causing the delay */}
          <p className="hero-lcp-description">
            I turn coffee into code and complex business problems into{" "}
            <span className="text-primary font-semibold" style={{ color: '#4682B4', fontWeight: 600 }}>
              elegant solutions
            </span>. 
            When I&apos;m not debugging at 2 AM or optimizing database queries, 
            I&apos;m building enterprise-grade applications that actually{" "}
            <span className="text-primary font-semibold" style={{ color: '#4682B4', fontWeight: 600 }}>
              work
            </span>.
          </p>

          {/* CTA Buttons */}
          <div className="hero-lcp-buttons">
            <a href="#projects" className="hero-lcp-button hero-lcp-button-primary">
              See My Magic ✨
            </a>
            <a href="#contact" className="hero-lcp-button hero-lcp-button-secondary">
              Let&apos;s Chat 💬
            </a>
          </div>

          {/* Tech Stack Preview */}
          <div className="hero-lcp-tech-stack">
            {["Django", "React", "Next.js", "TypeScript", "Python", "MySQL", "Redis", "AWS"].map(
              (tech) => (
                <span key={tech} className="hero-lcp-tech-item">
                  {tech}
                </span>
              )
            )}
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 sm:mt-16">
            <a
              href="#about"
              className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              style={{
                color: '#6b7280',
                textDecoration: 'none',
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'color 0.2s ease'
              }}
            >
              <span className="text-xs sm:text-sm">Scroll to explore</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}