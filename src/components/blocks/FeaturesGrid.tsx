import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Diaspora co Spices",
    description: "Ethically sourced spices from around the world",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070",
  },
  {
    title: "Our Farm Fund",
    description: "Supporting sustainable farming practices",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070",
  },
  {
    title: "Seasonal Products",
    description: "Fresh produce aligned with nature's rhythm",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2087",
  },
];

export const FeaturesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto py-16">
      {features.map((feature) => (
        <Card key={feature.title} className="overflow-hidden hover-card-effect">
          <div className="relative h-48">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {feature.description}
            </p>
            <Button variant="outline">Learn More</Button>
          </div>
        </Card>
      ))}
    </div>
  );
};