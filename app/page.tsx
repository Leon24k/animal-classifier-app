import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/hero-section';
import FeatureSection from '@/components/feature-section';
import AnimalGallery from '@/components/animal-gallery';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover the Power of AI Animal Classification</h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            Our advanced AI model can identify 90 different animal species with remarkable accuracy.
            Simply upload a photo and get instant results with detailed information about the animal.
          </p>
          <Link href="/classify">
            <Button size="lg" className="animate-pulse">
              Try It Now
            </Button>
          </Link>
        </div>
      </section>
      
      <FeatureSection />
      <AnimalGallery />

      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Identify Animals?</h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            Upload your animal photo and let our AI classifier do the rest.
            Get detailed information about species, habitat, and more.
          </p>
          <Link href="/classify">
            <Button size="lg">
              Start Classifying
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}