'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { HomeIcon, AlertTriangle, RefreshCcw } from 'lucide-react';
import Link from 'next/link';

interface ResultDisplayProps {
  result: any;
  error: string | null;
  imagePreview: string | null;
  resetClassifier: () => void;
}

export function ResultDisplay({ result, error, imagePreview, resetClassifier }: ResultDisplayProps) {
  if (error) {
    return (
      <Alert variant="destructive" className="mb-6">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          {error}
          <div className="mt-4 flex space-x-4">
            <Button variant="outline" onClick={resetClassifier} size="sm">
              <RefreshCcw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    );
  }
  
  if (!result) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">No results to display yet.</p>
        <p className="text-sm text-muted-foreground mt-2">Upload an image to classify an animal.</p>
      </div>
    );
  }
  
  const { predicted_animal, probability, animal_details } = result;
  const confidencePercentage = (probability * 100).toFixed(2);
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {imagePreview && (
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image 
              src={imagePreview} 
              alt={`Image of ${predicted_animal}`} 
              fill
              className="object-cover"
            />
          </div>
        )}
        
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">{predicted_animal}</h2>
            <div className="mt-2 space-y-2">
              <p className="text-sm text-muted-foreground">Confidence Score</p>
              <div className="flex items-center space-x-4">
                <Progress value={parseFloat(confidencePercentage)} className="flex-grow" />
                <span className="text-sm font-medium">{confidencePercentage}%</span>
              </div>
            </div>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">Habitat</h3>
              <p className="text-muted-foreground">{animal_details.habitat}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">{animal_details.description}</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
        <Button onClick={resetClassifier} variant="outline">
          <RefreshCcw className="mr-2 h-4 w-4" />
          Classify Another Image
        </Button>
        <Button asChild variant="secondary">
          <Link href="/">
            <HomeIcon className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}