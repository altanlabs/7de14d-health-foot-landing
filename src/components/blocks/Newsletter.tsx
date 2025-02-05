import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  return (
    <div className="bg-lime-50 dark:bg-lime-950 py-16">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Seasonal Offerings
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Subscribe to our newsletter for seasonal recipes, farming updates, and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-sm"
            />
            <Button type="submit" className="bg-lime-500 hover:bg-lime-600">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};