'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Cat } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-center mx-auto w-full max-w-5xl px-4">
        <div className="flex w-full max-w-5xl items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Cat className="h-6 w-6" />
            <span className="font-bold text-xl">Animal Classifier</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link 
              href="/" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/" ? "text-foreground" : "text-muted-foreground"
              )}
            >
              Home
            </Link>
            <Link 
              href="/classify" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/classify" ? "text-foreground" : "text-muted-foreground"
              )}
            >
              Classify
            </Link>
            
            <Link href="/classify">
              <Button size="sm" variant={pathname === "/classify" ? "outline" : "default"}>
                Try Now
              </Button>
            </Link>
            
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}