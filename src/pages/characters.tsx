import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useTranslation } from "@/contexts/TranslationContext";
import { useToast } from "@/hooks/use-toast";

const characters = [
  {
    name: "The Wanderer",
    role: "",
    description: "A nameless figure walking the path, carrying the burden of the past and the future, facing the unknown alone.",
    image: "/public/Image/Characters/TheWanderer.jpg",
  },
  // {
  //   name: "Lady Seraphine",
  //   role: "Guardian of the Black Castle",
  //   description: "Protector of ancient secrets, her presence is both a blessing and a curse.",
  //   image: "/lovable-uploads/819db236-7c8c-4c82-8148-c3d2476ca5e3.png",
  // },
  // {
  //   name: "Thorn of the Wilds",
  //   role: "Forest Outlaw",
  //   description: "A mysterious figure who defends the enchanted woods from intruders.",
  //   image: "/lovable-uploads/e5308cdf-d60c-41fc-93f6-19f666eb5953.png",
  // },
];

const Characters = () => {
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
          backgroundImage: `url('/lovable-uploads/819db236-7c8c-4c82-8148-c3d2476ca5e3.png')`
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
                CHARACTERS OF THE OTHER SIDE
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                Meet the legendary figures who shape the fate of The Other Side. Each character holds a story, a secret, and a destiny intertwined .
              </p>
            </div>
            {/* Characters List */}
            <div className="grid gap-10 md:grid-cols-2">
              {characters.map((char, idx) => (
                <Card key={idx} className="flex items-center gap-6 bg-glass-bg border-glass-border backdrop-blur-glass p-6 shadow-glass hover:bg-glass-bg/20 transition-all duration-300">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={char.image} alt={char.name} />
                    <AvatarFallback>{char.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-foreground mb-1">{char.name}</h3>
                    <p className="text-primary-foreground/70 mb-2 italic">{char.role}</p>
                    <p className="text-primary-foreground/80 leading-relaxed">{char.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
