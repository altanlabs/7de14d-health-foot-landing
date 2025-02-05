import { HeroSection } from "@/components/blocks/HeroSection";
import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { SeasonalProducts } from "@/components/blocks/SeasonalProducts";
import { Mission } from "@/components/blocks/Mission";
import { LatestStories } from "@/components/blocks/LatestStories";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesGrid />
      
      {/* Values Section */}
      <div className="bg-lime-50 dark:bg-lime-950 py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Go beyond four seasons</h3>
            <p className="text-gray-600 dark:text-gray-300">Experience nature's true calendar</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Know where your food comes from</h3>
            <p className="text-gray-600 dark:text-gray-300">Direct from trusted farmers</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Make your diet diverse</h3>
            <p className="text-gray-600 dark:text-gray-300">Explore seasonal variety</p>
          </div>
        </div>
      </div>

      <SeasonalProducts />
      <Mission />
      <LatestStories />
      
      {/* App Download Section */}
      <div className="container mx-auto py-16">
        <div className="bg-lime-100 dark:bg-lime-900 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get more on the app</h2>
          <p className="text-lg mb-6">Download our app to access exclusive offers and track your deliveries</p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="gap-2">
              <img src="/images/app-store.svg" alt="App Store" className="w-6 h-6" />
              App Store
            </Button>
            <Button variant="outline" className="gap-2">
              <img src="/images/play-store.svg" alt="Play Store" className="w-6 h-6" />
              Play Store
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}