import { Button } from "@/components/ui/button";

export const Mission = () => {
  return (
    <div className="bg-lime-100 dark:bg-lime-900 py-16">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-6">We exist to fix the food system</h2>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-200">
          Through our direct partnerships with farmers and sustainable practices, 
          we're building a better food future. Join us in our mission to make 
          healthy, sustainable food accessible to everyone.
        </p>
        <Button size="lg" variant="outline">
          Learn About Our Mission
        </Button>
      </div>
    </div>
  );
};