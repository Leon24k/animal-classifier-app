import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary/10 to-transparent" />
      </div>
      
      <div className="relative z-10 px-4 py-16 md:py-24 lg:py-32 flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block">Discover the</span>
                <span className="block text-primary">Animal Kingdom</span>
                <span className="block">with AI</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-prose">
                Our AI can identify 90 different animal species from a single image.
                Upload a photo and instantly get detailed information about the animal.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/classify">
                  <Button size="lg" className="w-full sm:w-auto group">
                    <span>Try It Now</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                  <a href="https://github.com/never-treated/animal-classifier" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl transition-all hover:shadow-2xl duration-300 mx-auto lg:mx-0 max-w-md w-full">
              <Image 
                src="https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg" 
                alt="Wild Lion" 
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
