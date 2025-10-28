import { Suspense } from "react";
import { Navigation } from "@/components/Navigation";
import { LazyAnimation, HeroOptimized, AboutOptimized } from "@/components/LazyComponents";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { StructuredData } from "@/components/StructuredData";

// Loading fallback for lazy components
function SectionFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg w-full h-32"></div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative">
      <StructuredData />
      <Navigation />
      <main>
        {/* Critical above-the-fold content loads immediately */}
        <Suspense fallback={<SectionFallback />}>
          <HeroOptimized />
        </Suspense>
        
        {/* Non-critical content loads lazily */}
        <LazyAnimation>
          <Suspense fallback={<SectionFallback />}>
            <AboutOptimized />
          </Suspense>
        </LazyAnimation>
        
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
