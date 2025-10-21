# Portfolio Setup & Deployment Guide

## 🎨 Customization Guide

### 1. Update Personal Information

#### Contact Information
Edit `/components/sections/Contact.tsx`:
```typescript
const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "YOUR_EMAIL@example.com", // Update this
    href: "mailto:YOUR_EMAIL@example.com", // Update this
  },
  // ... other contact methods
];
```

#### Social Links
Update in `/components/Navigation.tsx` and `/components/sections/Footer.tsx`:
- GitHub: `https://github.com/YOUR_USERNAME`
- LinkedIn: `https://www.linkedin.com/in/YOUR_PROFILE`

### 2. Add Your Photos/Images

Place your professional photos in `/public/` folder:
- Profile photo: `public/profile.jpg`
- Project screenshots: `public/projects/`

### 3. Update Project Links

Edit `/components/sections/Projects.tsx`:
- Update `link` and `github` URLs for each project
- Add live demo links when available

### 4. Customize Content

#### Bio & Description
Edit `/components/sections/About.tsx` to personalize your story.

#### Projects
In `/components/sections/Projects.tsx`:
- Update project descriptions
- Add/remove projects as needed
- Update metrics and highlights

#### Skills
In `/components/sections/Skills.tsx`:
- Adjust skill levels (percentages)
- Add/remove technologies

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Free)

1. **Push to GitHub:**
   ```bash
   cd /home/smitdesai/Coding/smitdesai
   git remote add origin YOUR_GITHUB_REPO_URL
   git add .
   git commit -m "Initial smitdesai"
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Custom Domain (Optional):**
   - Go to project settings
   - Add your custom domain (e.g., smitdesai.com)
   - Update DNS records as instructed

### Option 2: Netlify

1. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy:**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Option 3: Self-Hosted

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Run with PM2:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "smitdesai" -- start
   pm2 save
   pm2 startup
   ```

3. **Nginx Configuration:**
   ```nginx
   server {
       listen 80;
       server_name smitdesai.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

## 🎨 Customizing Steel Blue Theme

The website uses **Steel Blue (#4682B4)** as the primary color. To change:

Edit `/app/globals.css`:
```css
:root {
  /* Change these values */
  --primary: oklch(0.55 0.12 245); /* Light mode */
}

.dark {
  --primary: oklch(0.65 0.14 245); /* Dark mode */
}
```

**Color Conversion Tool:** https://oklch.com/

---

## 📱 Testing

### Local Development
```bash
npm run dev
# Visit http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
# Test production version
```

### Performance Testing
1. Build for production
2. Open in Chrome Incognito
3. Run Lighthouse audit (DevTools > Lighthouse)
4. Target: 95+ score on all metrics

---

## 🔧 Common Customizations

### Adding a Blog Section

1. Create `/app/blog` directory
2. Add MDX support:
   ```bash
   npm install @next/mdx @mdx-js/loader @mdx-js/react
   ```
3. Create blog posts in `/content/blog/`

### Adding a Resume Download Button

In `/components/sections/Contact.tsx`:
```tsx
<Button asChild>
  <a href="/resume.pdf" download>
    Download Resume
  </a>
</Button>
```

### Adding Analytics

In `/app/layout.tsx`, add Google Analytics:
```tsx
import Script from 'next/script'

// In the layout component:
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
lsof -i :3000
kill -9 [PID]
# Or use different port:
PORT=3001 npm run dev
```

### Build Errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Module Not Found
```bash
npm install
# Check package.json for missing dependencies
```

---

## 📊 Performance Optimization Tips

1. **Images:** Use Next.js Image component with proper sizes
2. **Fonts:** Already optimized with `display: swap`
3. **Animations:** Framer Motion is configured for 60fps
4. **Code Splitting:** Automatic with Next.js App Router
5. **Caching:** Vercel provides automatic edge caching

---

## 🔐 Environment Variables

Create `.env.local` (optional):
```env
NEXT_PUBLIC_SITE_URL=https://smitdesai.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 📝 Content Checklist

Before going live:
- [ ] Update all personal information
- [ ] Replace placeholder email addresses
- [ ] Add real project links
- [ ] Upload professional photo
- [ ] Test all links
- [ ] Run Lighthouse audit
- [ ] Test on mobile devices
- [ ] Set up Google Search Console
- [ ] Add Google Analytics (optional)

---

## 🎯 Next Steps

1. **Customize Content**: Update all sections with your information
2. **Add Images**: Professional photo and project screenshots
3. **Test Locally**: Ensure everything works
4. **Deploy**: Push to Vercel or your preferred platform
5. **SEO**: Submit sitemap to Google Search Console
6. **Share**: Update LinkedIn, resume, and other profiles

---

## 💡 Tips for Success

- Keep content concise and impactful
- Use high-quality project screenshots
- Regularly update with new projects
- Monitor analytics to see what resonates
- Keep dependencies updated: `npm update`

---

Built with ❤️ and ☕ by Smit Desai

