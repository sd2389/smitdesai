import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Smit Desai - Full-Stack Developer Portfolio',
    short_name: 'Smit Desai',
    description: 'Full-stack developer specializing in Django, React, Next.js, and enterprise web applications. Building scalable solutions for jewelry, e-commerce, and civic engagement platforms.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    orientation: 'portrait-primary',
    categories: ['technology', 'developer', 'portfolio', 'web-development'],
    lang: 'en',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-192-maskable.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
    scope: '/',
    id: 'smit-desai-portfolio',
    shortcuts: [
      {
        name: 'About Me',
        short_name: 'About',
        description: 'Learn more about Smit Desai and his expertise',
        url: '/#about',
        icons: [{ src: '/icon-192.png', sizes: '192x192' }],
      },
      {
        name: 'Projects',
        short_name: 'Projects',
        description: 'View Smit Desai\'s portfolio projects',
        url: '/#projects',
        icons: [{ src: '/icon-192.png', sizes: '192x192' }],
      },
      {
        name: 'Contact',
        short_name: 'Contact',
        description: 'Get in touch with Smit Desai',
        url: '/#contact',
        icons: [{ src: '/icon-192.png', sizes: '192x192' }],
      },
      {
        name: 'Resume',
        short_name: 'Resume',
        description: 'Download Smit Desai\'s resume',
        url: '/resume.pdf',
        icons: [{ src: '/icon-192.png', sizes: '192x192' }],
      },
    ],
  }
}