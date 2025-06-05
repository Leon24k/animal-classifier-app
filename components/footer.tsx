import Link from 'next/link';
import { Cat, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center py-8 md:py-12 px-4">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center space-x-2">
              <Cat className="h-5 w-5" />
              <span className="font-bold text-lg">Animal Classifier</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Identifying 90 different animal species with advanced AI technology.
              Upload an image and get instant, accurate classifications.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/classify" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Classify
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              This animal classifier uses a state-of-the-art ResNet50 model trained on 90 animal classes to accurately identify animals from images.
            </p>
            <div className="mt-4">
              <a 
                href="https://github.com/never-treated/animal-classifier" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground w-full">
          <p>© {new Date().getFullYear()} Animal Classifier. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}