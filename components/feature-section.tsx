import { Camera, Brain, Info, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: '90 Animal Species',
    description: 'Our classifier can recognize 90 different animal species with high accuracy.',
    icon: Database,
  },
  {
    title: 'Advanced AI',
    description: 'Powered by a state-of-the-art ResNet50 model trained on diverse animal images.',
    icon: Brain,
  },
  {
    title: 'Instant Results',
    description: 'Get classifications in seconds with confidence scores and detailed information.',
    icon: Camera,
  },
  {
    title: 'Detailed Information',
    description: 'Learn about the animal\'s habitat, characteristics, and interesting facts.',
    icon: Info,
  },
];

export default function FeatureSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Key Features</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our animal classification system uses cutting-edge technology to provide accurate and detailed results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardHeader className="pb-2">
                <feature.icon className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}