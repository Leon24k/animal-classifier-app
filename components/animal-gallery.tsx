'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Animal {
  name: string;
  image: string;
  description: string;
  info: string;
}

// Sample of featured animals with beautiful stock photos and information
const featuredAnimals: Animal[] = [
  { 
    name: 'Lion', 
    image: 'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg',
    description: 'The King of the Jungle',
    info: 'Lions are large feline carnivores known for their majestic manes. They are social animals that live in prides and are found primarily in African savannas. Male lions can weigh up to 250kg and are known for their powerful roars that can be heard up to 9km away.'
  },
  { 
    name: 'Tiger', 
    image: 'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg',
    description: 'Striped Predator',
    info: 'Tigers are the largest cats in the world with distinctive orange and black stripes. They are solitary hunters and are found primarily in Asia. Each tiger has a unique stripe pattern, much like human fingerprints.'
  },
  { 
    name: 'Elephant', 
    image: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg',
    description: 'The Gentle Giant',
    info: 'Elephants are the largest land animals and are known for their intelligence and memory. They have a complex social structure and communicate through infrasound frequencies. Elephants can live up to 70 years in the wild.'
  },
  { 
    name: 'Giraffe', 
    image: 'https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg',
    description: 'Tallest Land Animal',
    info: 'Giraffes can reach heights of up to 5.5 meters (18 feet) and are the tallest land animals. Their long necks and legs are perfectly adapted for reaching leaves high in acacia trees. They are found in African savannas and are herbivores.'
  },
  { 
    name: 'Zebra', 
    image: 'https://images.pexels.com/photos/750539/pexels-photo-750539.jpeg',
    description: 'Striped Equine',
    info: 'Zebras are wild equines native to Africa, recognizable by their distinctive black and white stripes. Each zebra has a unique stripe pattern. These herbivores live in herds and are prey animals for lions and other predators.'
  },
  { 
    name: 'Panda', 
    image: 'https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg',
    description: 'Gentle Bear',
    info: 'Giant pandas are endangered bears native to central China. Despite being carnivores, they primarily eat bamboo, consuming up to 40kg per day. They are symbols of wildlife conservation and are known for their playful and gentle nature.'
  },
];

export default function AnimalGallery() {
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Explore the Animal Kingdom</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our classifier can identify 90 different animal species. Here are a few examples from our collection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredAnimals.map((animal, index) => (
            <div 
              key={index}
              onClick={() => setSelectedAnimal(animal)}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] shadow-md transition-all duration-500 hover:shadow-xl cursor-pointer"
            >
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-semibold">{animal.name}</h3>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-white/80">
                  Click to learn more about {animal.name.toLowerCase()}s
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Animal Information Dialog */}
        <Dialog open={!!selectedAnimal} onOpenChange={() => setSelectedAnimal(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedAnimal?.name}</DialogTitle>
              <DialogDescription className="text-base">{selectedAnimal?.description}</DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                {selectedAnimal && (
                  <Image
                    src={selectedAnimal.image}
                    alt={selectedAnimal.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">About</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {selectedAnimal?.info}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        
        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            And many more species! Upload your animal photos to see our classifier in action.
          </p>
        </div>
      </div>
    </section>
  );
}