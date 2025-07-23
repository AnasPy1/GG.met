import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { useTranslation } from "@/contexts/TranslationContext";
import { useToast } from "@/hooks/use-toast";

const Book = () => {
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
    <div className="min-h-screen bg-background text-text-primary flex flex-col items-center">
      {/* Navigation */}
      <div className="w-full absolute top-0 left-0">
        <Navigation onTranslate={handleTranslate} isTranslating={isTranslating} isTranslated={isTranslated} />
      </div>
      {/* Content */}
      <div className="flex-1 w-full flex items-center justify-center px-4 pt-32 animate-fadeIn">
        <div className="max-w-4xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Book Cover Placeholder */}
          <Card className="bg-card border border-border shadow-glass p-8 flex flex-col items-center justify-center animate-slideUp">
            <div className="aspect-[3/4] w-48 bg-gradient-to-br from-white/10 to-black/60 rounded-lg flex items-center justify-center">
              <div className="text-center text-text-primary">
                <div className="w-20 h-20 mx-auto mb-4 opacity-50">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2H6ZM13 3.5L18.5 9H13V3.5Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">THE OTHER SIDE</h3>
              </div>
            </div>
          </Card>
          {/* Book Information */}
          <Card className="bg-card border border-border shadow-glass p-8 animate-slideUp">
            <h1 className="text-5xl font-extrabold mb-6 text-white">THE NOVEL</h1>
            <p className="text-lg text-text-secondary mb-6">
              Dive into the depths of knowledge and discover the secrets hidden within these pages.
            </p>
            <div className="space-y-3 text-text-secondary mb-8">
              <div className="flex justify-between">
                <span>Pages:</span>
                <span className="font-semibold text-white">342</span>
              </div>
              <div className="flex justify-between">
                <span>Genre:</span>
                <span className="font-semibold text-white">Dark Fantasy</span>
              </div>
              <div className="flex justify-between">
                <span>Publication:</span>
                <span className="font-semibold text-white">2025</span>
              </div>
            </div>
            <a href="/chapter/1" className="inline-block px-8 py-3 bg-white text-black rounded-lg font-semibold shadow-lg hover:scale-105 hover:bg-opacity-90 transition-transform duration-300 animate-fadeIn">
              Read Chapter 1
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Book;