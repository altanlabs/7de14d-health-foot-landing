import { HeroSection } from "@/components/blocks/HeroSection";
import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { SeasonalProducts } from "@/components/blocks/SeasonalProducts";
import { Mission } from "@/components/blocks/Mission";
import { LatestStories } from "@/components/blocks/LatestStories";
import { ValueProposition } from "@/components/blocks/ValueProposition";
import { CallToAction } from "@/components/blocks/CallToAction";
import { Newsletter } from "@/components/blocks/Newsletter";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Grid */}
      <FeaturesGrid />
      
      {/* Value Proposition */}
      <ValueProposition />

      {/* Seasonal Products */}
      <SeasonalProducts />

      {/* Mission Statement */}
      <Mission />

      {/* Call to Action */}
      <CallToAction />

      {/* Latest Stories */}
      <LatestStories />

      {/* Newsletter */}
      <Newsletter />
      
      {/* App Download Section */}
      <div className="container mx-auto py-16">
        <div className="bg-gradient-to-r from-lime-100 to-green-100 dark:from-lime-900 dark:to-green-900 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Get more on the app</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Download our app to access exclusive offers, track your deliveries in real-time, 
            and discover seasonal recipes curated by our chefs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 12.3c-.1-1.2.5-2.3 1.4-3.1-.5-.6-1.2-1.1-2-1.4-1.6-.6-3.1-.3-4 .2-.9.5-1.7.5-2.6 0-.9-.5-2.4-.8-4-.2-.8.3-1.5.8-2 1.4-.9.9-1.5 2.1-1.7 3.3-.2 1.2-.2 2.4 0 3.6.3 1.2.8 2.3 1.5 3.3.7 1 1.5 1.9 2.4 2.6.9.7 1.9 1.3 3 1.7 1.1.4 2.2.6 3.4.6 1.2 0 2.3-.2 3.4-.6 1.1-.4 2.1-1 3-1.7.9-.7 1.7-1.6 2.4-2.6.7-1 1.2-2.1 1.5-3.3.2-1.2.2-2.4 0-3.6z"/>
              </svg>
              App Store
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.8.7-1.5 1.5-1.5h15c.8 0 1.5.7 1.5 1.5v17c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5zm16.5-17h-15v17h15v-17z"/>
                <path d="M8.7 17.2l-3.4-3.4c-.4-.4-.4-1 0-1.4l3.4-3.4c.4-.4 1-.4 1.4 0s.4 1 0 1.4L7.4 12l2.7 2.7c.4.4.4 1 0 1.4s-1 .4-1.4.1zM15.3 17.2c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l2.7-2.7-2.7-2.7c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l3.4 3.4c.4.4.4 1 0 1.4l-3.4 3.4z"/>
              </svg>
              Play Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}