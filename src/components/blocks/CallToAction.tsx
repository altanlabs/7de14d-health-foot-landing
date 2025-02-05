import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <div className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/cta-bg.jpg"
          alt="Fresh vegetables background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Join the fight for a better food system
          </h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            Get started with our seasonal box delivery and taste the difference of truly fresh, 
            sustainably grown produce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-lime-500 hover:bg-lime-600">
              Start Your Subscription
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};