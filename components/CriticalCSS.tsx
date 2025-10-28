"use client";

import { useEffect } from 'react';

export function CriticalCSS() {
  useEffect(() => {
    // Inject critical CSS inline for above-the-fold content
    const criticalCSS = `
      /* Critical CSS for above-the-fold content */
      .hero-section {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
        position: relative;
        overflow: hidden;
      }
      
      .hero-content {
        text-align: center;
        max-width: 64rem;
        margin: 0 auto;
        padding: 0 1rem;
        position: relative;
        z-index: 10;
      }
      
      .hero-title {
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 1.5rem;
        color: #1f2937;
      }
      
      .hero-subtitle {
        font-size: 1.25rem;
        color: #6b7280;
        margin-bottom: 2rem;
        font-weight: 500;
      }
      
      .hero-description {
        font-size: 1.125rem;
        color: #6b7280;
        margin-bottom: 2rem;
        max-width: 48rem;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.6;
      }
      
      .tech-stack {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 2rem;
      }
      
      .tech-item {
        padding: 0.5rem 1rem;
        background: rgba(59, 130, 246, 0.1);
        color: #1d4ed8;
        border-radius: 9999px;
        font-size: 0.875rem;
        font-weight: 500;
        border: 1px solid rgba(59, 130, 246, 0.2);
      }
      
      .cta-buttons {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        margin-bottom: 3rem;
      }
      
      @media (min-width: 640px) {
        .cta-buttons {
          flex-direction: row;
        }
        
        .hero-title {
          font-size: 3.75rem;
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
        }
      }
      
      @media (min-width: 1024px) {
        .hero-title {
          font-size: 4.5rem;
        }
        
        .hero-subtitle {
          font-size: 1.875rem;
        }
      }
      
      /* Background elements */
      .bg-element-1 {
        position: absolute;
        top: -10rem;
        right: -10rem;
        width: 20rem;
        height: 20rem;
        background: rgba(59, 130, 246, 0.1);
        border-radius: 50%;
        filter: blur(3rem);
      }
      
      .bg-element-2 {
        position: absolute;
        bottom: -10rem;
        left: -10rem;
        width: 20rem;
        height: 20rem;
        background: rgba(59, 130, 246, 0.1);
        border-radius: 50%;
        filter: blur(3rem);
      }
    `;

    // Inject critical CSS
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    document.head.appendChild(style);

    // Cleanup
    return () => {
      const criticalStyle = document.querySelector('style[data-critical="true"]');
      if (criticalStyle) {
        criticalStyle.remove();
      }
    };
  }, []);

  return null;
}

