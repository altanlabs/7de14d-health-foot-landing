import { Card } from "@/components/ui/card";

export const ValueProposition = () => {
  return (
    <div className="bg-lime-100/50 dark:bg-lime-950/50 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seek diversity, seasonality, transparency & find flavour
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
            <div className="h-12 w-12 bg-lime-500 rounded-full mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Diverse Selection</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Experience a wide variety of seasonal produce, carefully curated for maximum nutrition and taste.
            </p>
          </Card>

          <Card className="p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
            <div className="h-12 w-12 bg-lime-500 rounded-full mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Full Transparency</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Know exactly where your food comes from, how it's grown, and who grows it.
            </p>
          </Card>

          <Card className="p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
            <div className="h-12 w-12 bg-lime-500 rounded-full mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Peak Freshness</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Enjoy produce at its prime, harvested and delivered at the perfect moment.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};