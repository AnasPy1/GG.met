import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslation } from "@/contexts/TranslationContext";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Chapter = () => {
  const { chapterNumber } = useParams();
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

  // Chapter content data
  const chapters = {
    "1": {
      title: "the crossing",
      content: `The night was darker than any I had ever witnessed, as if the very fabric of reality had been torn and sewn back together with shadow. I stood at the edge of the precipice, watching the Black Castle emerge from the mist like a wound in the world itself.

The crossing had begun.

My wings, once radiant with divine light, now hung heavy with the weight of my fall. Each feather bore the scars of my descent from grace, yet I could not bring myself to regret the choice that had brought me here. For in the darkness, I had found something that the light could never offer—freedom.

The path ahead was treacherous, winding through valleys of forgotten dreams and hills of abandoned hope. But I was no longer the being I once was. The fall had changed me, transformed me into something between angel and demon, between salvation and damnation.

As I took my first step onto the bridge of shadows, I felt the last vestiges of my celestial nature slip away. There was no turning back now. The crossing would either lead me to redemption or to a deeper darkness than I had ever imagined.

But perhaps, in this world of shattered dreams and fallen stars, there was no difference between the two.

The Black Castle loomed closer with each step, its towers reaching toward a sky that had forgotten how to hold stars. Within its walls, I knew, lay the answers I sought—and the price I would have to pay for them.

The crossing had begun, and I was no longer myself.`
    },
    "2": {
      title: "soon",
      content: "This chapter will be available soon..."
    }
  };

  const currentChapter = chapters[chapterNumber as keyof typeof chapters];

  if (!currentChapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-foreground">Chapter not found</p>
      </div>
    );
  }

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
      
      {/* Content */}
      <div className="relative z-20 pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            
            {/* Back Button */}
            <div className="mb-8">
              <Link to="/book">
                <Button variant="glass" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Book
                </Button>
              </Link>
            </div>

            {/* Chapter Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
                Chapter {chapterNumber}
              </h1>
              <h2 className="text-2xl md:text-3xl text-primary-foreground/80 font-light">
                {currentChapter.title}
              </h2>
            </div>
            
            {/* Chapter Content */}
            <Card className="bg-glass-bg border-glass-border backdrop-blur-glass shadow-glass">
              <div className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  {currentChapter.content.split('\n\n').map((paragraph, index) => (
                    <p 
                      key={index} 
                      className="text-primary-foreground/90 leading-relaxed mb-6 text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Card>

            {/* Navigation between chapters */}
            <div className="flex justify-between items-center mt-12">
              <div>
                {parseInt(chapterNumber!) > 1 && (
                  <Link to={`/chapter/${parseInt(chapterNumber!) - 1}`}>
                    <Button variant="glass" className="flex items-center gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      Previous Chapter
                    </Button>
                  </Link>
                )}
              </div>
              
              <div>
                {parseInt(chapterNumber!) < Object.keys(chapters).length && (
                  <Link to={`/chapter/${parseInt(chapterNumber!) + 1}`}>
                    <Button variant="glass" className="flex items-center gap-2">
                      Next Chapter
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter;