"use client";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Smit Desai",
    "jobTitle": "Full-Stack Developer",
    "description": "Full-stack developer specializing in Django, React, Next.js, and enterprise web applications. Building scalable solutions for jewelry, e-commerce, and civic engagement platforms.",
    "url": "https://smitdesai.com",
    "image": "https://smitdesai.com/profile-image.jpg",
    "email": "smssmit@gmail.com",
    "sameAs": [
      "https://www.linkedin.com/in/smssmit",
      "https://github.com/sd2389"
    ],
    "knowsAbout": [
      "Django",
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "JavaScript",
      "MySQL",
      "Redis",
      "AWS",
      "Enterprise Software Development",
      "API Development",
      "Database Design",
      "Performance Optimization",
      "Project Management",
      "Product Ownership",
      "Agile Development",
      "Scrum",
      "Problem Solving",
      "Stakeholder Management",
      "Business Analysis",
      "Technical Leadership"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full-Stack Developer",
      "description": "Developing enterprise-grade web applications using modern technologies",
      "skills": [
        "Django",
        "React",
        "Next.js",
        "TypeScript",
        "Python",
        "MySQL",
        "Redis",
        "AWS",
        "Project Management",
        "Product Ownership",
        "Agile Development",
        "Problem Solving"
      ]
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "Software Engineering"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance / Available for Hire"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
