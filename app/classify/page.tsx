'use client';

import { useState } from 'react';
import { ImageUploader } from '@/components/image-uploader';
import { ResultDisplay } from '@/components/result-display';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ClassifyPage() {
  const [result, setResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('upload');

  const handleImageUpload = async (file: File) => {
    if (!file) {
      setError('No file selected. Please upload an image.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);
    
    // Create preview URL
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);

    console.log('File:', file);
    console.log('Image Preview URL:', imagePreview);
    
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/predict', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        const errorMessage = `Error: ${response.status} - ${response.statusText}`;
        setError(errorMessage);
        console.error(errorMessage);
        return;
      }

      const data = await response.json();
      console.log('API Response:', data); // Debugging
      setResult(data);
      setActiveTab('result');
    } catch (err) {
      console.error('Error during fetch:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setActiveTab('upload');
    } finally {
      setIsLoading(false);
    }
  };

  const resetClassifier = () => {
    setResult(null);
    setError(null);
    setImagePreview(null);
    setActiveTab('upload');
  };

  return (
    <div className="container mx-auto max-w-4xl py-8 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Animal Classifier</h1>
      <p className="text-lg text-muted-foreground mb-8 text-center">
        Upload an image of an animal and our AI will identify the species
      </p>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upload">Upload Image</TabsTrigger>
          <TabsTrigger value="result" disabled={!result && !error}>Results</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload">
          <Card>
            <CardContent className="pt-6">
              <ImageUploader 
                onUpload={handleImageUpload} 
                isLoading={isLoading}
                imagePreview={imagePreview}
                resetClassifier={resetClassifier}
              />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="result">
          <Card>
            <CardContent className="pt-6">
              <ResultDisplay 
                result={result} 
                error={error} 
                imagePreview={imagePreview}
                resetClassifier={resetClassifier}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}