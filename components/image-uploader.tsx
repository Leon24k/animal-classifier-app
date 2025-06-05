'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Upload, X, ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageUploaderProps {
  onUpload: (file: File) => void;
  isLoading: boolean;
  imagePreview: string | null;
  resetClassifier: () => void;
}

export function ImageUploader({ onUpload, isLoading, imagePreview, resetClassifier }: ImageUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        onUpload(file);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onUpload(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-6">
      <input 
        type="file" 
        accept="image/*" 
        ref={fileInputRef} 
        onChange={handleFileSelect} 
        className="hidden" 
      />
      
      <div 
        className={cn(
          "border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200",
          isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/20",
          imagePreview ? "aspect-auto" : "aspect-video"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {imagePreview ? (
          <div className="relative aspect-video max-h-[400px]">
            <Image 
              src={imagePreview} 
              alt="Preview" 
              fill
              className="object-contain rounded-md"
            />
            <Button 
              variant="destructive" 
              size="icon" 
              className="absolute top-2 right-2 h-8 w-8"
              onClick={resetClassifier}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <ImageIcon className="h-16 w-16 text-muted-foreground/60" />
            <div>
              <p className="text-lg font-medium">Drag and drop an animal image here</p>
              <p className="text-sm text-muted-foreground mt-1">or click to browse files</p>
            </div>
            <Button onClick={triggerFileInput} variant="outline" className="mt-4">
              <Upload className="h-4 w-4 mr-2" /> Select Image
            </Button>
          </div>
        )}
      </div>
      
      {imagePreview && (
        <div className="flex justify-center">
          <Button 
            onClick={() => onUpload(fileInputRef.current?.files?.[0] as File)} 
            disabled={isLoading || !imagePreview}
            className="w-full max-w-md"
          >
            {isLoading ? 'Classifying...' : 'Classify Animal'}
            {isLoading && (
              <div className="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            )}
          </Button>
        </div>
      )}
    </div>
  );
}