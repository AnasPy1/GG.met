import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslation } from "@/contexts/TranslationContext";
import { useToast } from "@/hooks/use-toast";

const Maps = () => {
  const { translate, isTranslating, isTranslated } = useTranslation();
  const { toast } = useToast();

  const handleTranslate = async () => {
    try {
      await translate();
      toast({
        title: isTranslated ? "Translation Reset" : "Translation Complete",
        description: isTranslated 
          ? "Page content has been restored to English."
          : "Page content has been translated to Arabic.",
      });
    } catch (error) {
      toast({
        title: "Translation Failed",
        description: "Unable to translate the page. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/2291e679-4d89-4e4a-93b8-06683e063d89.png')`
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-hero-overlay" />
      {/* Navigation */}
      <Navigation onTranslate={handleTranslate} isTranslating={isTranslating} isTranslated={isTranslated} />
      {/* Content */}
      <div className="relative z-20 pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-7xl font-bold text-primary-foreground mb-6">
                MAPS OF THE OTHER SIDE
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                Explore the mysterious lands, kingdoms, and hidden realms of The Other Side. Navigate through ancient territories and discover the secrets each map holds.
              </p>
            </div>
            {/* Maps Gallery */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Map Image Placeholder */}
              <div className="relative">
                <Card className="bg-glass-bg border-glass-border backdrop-blur-glass p-8 shadow-glass">
                  <div className="aspect-[3/4] bg-gradient-dark rounded-lg flex items-center justify-center">
                    <img src="/public/Image/Maps/BeyondtheValley.jpg" alt="Map of The Other Side" className="rounded-lg object-cover w-full h-full" />
                  </div>
                </Card>
              </div>
              {/* Map Information */}
              <div className="space-y-8">
                <Card className="bg-glass-bg border-glass-border backdrop-blur-glass p-6 shadow-glass">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-4">About These Maps</h3>
                  <p className="text-primary-foreground/80 leading-relaxed mb-6">
                    Each map reveals a different aspect of The Other Side, from the haunted Black Castle to the enchanted forests and forgotten ruins. Use these maps to guide your journey and uncover hidden lore.
                  </p>
                  <div className="space-y-3 text-primary-foreground/80">
                    <div className="flex justify-between">
                      <span>Maps Available:</span>
                      <span className="font-semibold">1</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Regions:</span>
                      <span className="font-semibold">Beyond the Valley</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Last Updated:</span>
                      <span className="font-semibold">2025</span>
                    </div>
                  </div>
                </Card>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" className="flex-1">
                    View Full Map
                  </Button>
                  <Button variant="glass" className="flex-1">
                    Download
                  </Button>
                </div>
              </div>
            </div>
            {/* Regions Preview */}
            <div className="mt-20">
              <h2 className="text-4xl font-bold text-primary-foreground mb-10 text-center">
                Places
              </h2>
              <div className="grid gap-4">
                {[
                  { title: "The Black Castle", description: "The Black Castle appeared on the horizon during the storm, illuminated by thunder for a moment before disappearing again into the darkness. No one approached it, and no one knows what it hides within its walls." },
                ].map((region, index) => (
                  <Card key={index} className="bg-glass-bg border-glass-border backdrop-blur-glass p-6 shadow-glass hover:bg-glass-bg/20 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-primary-foreground">
                          {region.title}
                        </h3>
                        <p className="text-primary-foreground/60 mt-1">
                          {region.description}
                        </p>
                      </div>
                      <div className="text-primary-foreground/40">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
