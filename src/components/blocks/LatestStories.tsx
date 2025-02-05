import { Card } from "@/components/ui/card";

const stories = [
  {
    title: "Roasted pumpkin, thyme, and olive oil pasta",
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=2070",
  },
  {
    title: "Fresh fall salad: Garden mix deluxe",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070",
  },
  {
    title: "Green harvest with seasonal vegetables",
    image: "https://images.unsplash.com/photo-1467453678174-768ec283a940?q=80&w=2048",
  },
];

export const LatestStories = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8">Latest Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stories.map((story) => (
          <Card key={story.title} className="overflow-hidden cursor-pointer hover-card-effect">
            <div className="relative h-48">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{story.title}</h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};