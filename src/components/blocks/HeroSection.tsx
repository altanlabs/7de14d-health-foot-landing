import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Fresh vegetables and fruits"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 container mx-auto h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">Peak Season Box</h1>
          <p className="text-xl mb-8">Fresh, seasonal produce delivered directly from our farms to your doorstep.</p>
          <Button size="lg" className="bg-lime-500 hover:bg-lime-600">
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};