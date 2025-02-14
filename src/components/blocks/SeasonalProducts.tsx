import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const seasonalProducts = [
  {
    title: "Winter Tomatoes",
    description: "Vine-ripened and bursting with flavor",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=2070",
  },
  {
    title: "Blood Oranges",
    description: "Sweet and vibrant citrus in season now",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=2070",
  },
];

export const SeasonalProducts = () => {
  return (
    <div className="bg-lime-50 dark:bg-lime-950 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Season Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {seasonalProducts.map((product) => (
            <Card key={product.title} className="overflow-hidden hover-card-effect">
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {product.description}
                </p>
                <Button>Shop Now</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};