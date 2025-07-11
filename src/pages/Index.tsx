import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslation } from "@/contexts/TranslationContext";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
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
          backgroundImage: `url('/lovable-uploads/e5308cdf-d60c-41fc-93f6-19f666eb5953.png')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-hero-overlay" />
      
      {/* Navigation */}
      <Navigation onTranslate={handleTranslate} isTranslating={isTranslating} isTranslated={isTranslated} />
      
      {/* Main Content */}
      <main>
      
      {/* Hero Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground mb-8 tracking-tight">
              THE OTHER SIDE 
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero" size="lg">
                Enter the Other Side
              </Button>
              {/* <Button variant="glass" size="lg">
                Discover More
              </Button> */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="relative z-20 py-20 bg-gradient-light">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
             Contact Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
             
              ].map((feature, index) => (
                <Card key={index} className="bg-card border shadow-glass hover:shadow-dark transition-all duration-300 group cursor-pointer">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url('${feature.image}')` }}
                    />
                    <div className="absolute inset-0 bg-hero-overlay group-hover:bg-hero-overlay/50 transition-colors duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
};

export default Index;
