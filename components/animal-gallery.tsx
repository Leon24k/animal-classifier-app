import Image from 'next/image';

// Sample of featured animals with beautiful stock photos
const featuredAnimals = [
  { name: 'Lion', image: 'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg' },
  { name: 'Tiger', image: 'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg' },
  { name: 'Elephant', image: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg' },
  { name: 'Giraffe', image: 'https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg' },
  { name: 'Zebra', image: 'https://images.pexels.com/photos/750539/pexels-photo-750539.jpeg' },
  { name: 'Panda', image: 'https://images.pexels.com/photos/1181181/pexels-photo-1181181.jpeg' },
];

export default function AnimalGallery() {
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
              className="group relative overflow-hidden rounded-lg aspect-[4/3] shadow-md transition-all duration-500 hover:shadow-xl"
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
        
        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            And many more species! Upload your animal photos to see our classifier in action.
          </p>
        </div>
      </div>
    </section>
  );
}