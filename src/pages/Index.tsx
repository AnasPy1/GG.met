import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
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
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-text-primary">
      {/* Navigation */}
      <div className="w-full absolute top-0 left-0">
        <Navigation onTranslate={handleTranslate} isTranslating={isTranslating} isTranslated={isTranslated} />
      </div>
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 animate-fadeIn text-white text-center drop-shadow-lg">
          THE OTHER SIDE
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed text-center animate-slideUp">
          Step into a world of mystery and darkness. Discover the secrets that lie beyond the veil.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeIn">
          <a href="/book" className="px-8 py-4 bg-white text-black rounded-lg text-lg font-semibold shadow-lg hover:scale-105 hover:bg-opacity-90 transition-transform duration-300">
            Enter the Other Side
          </a>
        </div>
      </main>
      {/* Subtle animated accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-gradient-to-t from-white/10 to-transparent rounded-t-full blur-2xl animate-fadeIn" />
    </div>
  );
};

export default Index;
