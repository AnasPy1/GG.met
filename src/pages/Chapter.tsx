import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslation } from "@/contexts/TranslationContext";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Clock, 
  Eye,
  Settings,
  Menu,
  Bookmark,
  Share
} from "lucide-react";
import  Chapter1Data  from "./Chapter1";

const Chapter = () => {
  const { chapterNumber } = useParams();
  const { translate, isTranslating, isTranslated } = useTranslation();
  const { toast } = useToast();
  const [fontSize, setFontSize] = useState(18);
  const [showSettings, setShowSettings] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [showTableOfContents, setShowTableOfContents] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

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
    "1": Chapter1Data,
    "2": {
      title: "soon",
      subtitle: "Coming Soon",
      readingTime: "Coming soon",
      content: "This chapter will be available soon. The journey continues..."
    }
  };

  // Fallback: Extract chapter number from URL if useParams fails
  const urlPath = window.location.pathname;
  const urlChapterMatch = urlPath.match(/\/chapter\/(\d+)/);
  const fallbackChapterNumber = urlChapterMatch ? urlChapterMatch[1] : null;
  
  // Use the parameter from useParams or fallback to URL parsing
  const effectiveChapterNumber = chapterNumber || fallbackChapterNumber;
  const normalizedChapterNumber = effectiveChapterNumber?.trim();
  const currentChapter = normalizedChapterNumber ? chapters[normalizedChapterNumber as keyof typeof chapters] : null;

  // Debug logging
  console.log('Chapter Number from params:', chapterNumber);
  console.log('URL path:', urlPath);
  console.log('Fallback chapter number:', fallbackChapterNumber);
  console.log('Effective chapter number:', effectiveChapterNumber);
  console.log('Normalized Chapter Number:', normalizedChapterNumber);
  console.log('Available chapters:', Object.keys(chapters));
  console.log('Current chapter found:', !!currentChapter);

  // Simulate reading progress
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setReadingProgress(Math.min(scrolled, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast({
      title: isBookmarked ? "Bookmark Removed" : "Chapter Bookmarked",
      description: isBookmarked 
        ? "Bookmark has been removed from this chapter."
        : "Chapter has been added to your bookmarks.",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: "Chapter link has been copied to clipboard.",
    });
  };

  // Show debug info if no chapter found
  if (!currentChapter) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation onTranslate={handleTranslate} isTranslating={isTranslating} isTranslated={isTranslated} />
        
        <div className="container mx-auto px-6 pt-32 pb-20">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card p-8">
              <h1 className="text-3xl font-bold text-destructive mb-6">Chapter Not Found</h1>
              
              <div className="mb-6 p-4 bg-muted rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Debug Information:</h2>
                <div className="space-y-2 text-sm font-mono">
                  <p><strong>useParams() result:</strong> "{chapterNumber}"</p>
                  <p><strong>URL path:</strong> {urlPath}</p>
                  <p><strong>Fallback extraction:</strong> "{fallbackChapterNumber}"</p>
                  <p><strong>Effective chapter:</strong> "{effectiveChapterNumber}"</p>
                  <p><strong>Type:</strong> {typeof chapterNumber}</p>
                  <p><strong>Available chapters:</strong> [{Object.keys(chapters).map(k => `"${k}"`).join(', ')}]</p>
                  <p><strong>Lookup result:</strong> {currentChapter ? 'Found' : 'Not found'}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Link to="/book">
                  <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Book
                  </Button>
                </Link>
                <Link to="/chapter/1">
                  <Button variant="default">
                    Try Chapter 1
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/e5308cdf-d60c-41fc-93f6-19f666eb5953.png')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="fixed inset-0 z-10 bg-hero-overlay/90" />
      
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-primary/20">
        <div 
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>
      
      {/* Navigation */}
      <Navigation onTranslate={handleTranslate} isTranslating={isTranslating} isTranslated={isTranslated} />
      
      {/* Table of Contents Sidebar */}
      {showTableOfContents && (
        <div className="fixed left-0 top-20 z-40 w-80 h-full bg-card/95 backdrop-blur-md border-r border-border p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Table of Contents</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowTableOfContents(false)}
            >
              ✕
            </Button>
          </div>
          <div className="space-y-2">
            {Object.entries(chapters).map(([num, chapter]) => (
              <Link
                key={num}
                to={`/chapter/${num}`}
                className={`block p-3 rounded-lg transition-colors ${
                  num === effectiveChapterNumber 
                    ? 'bg-primary/20 text-primary' 
                    : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                <div className="font-medium">Chapter {num}</div>
                <div className="text-sm opacity-75">{chapter.title}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Reading Settings Panel */}
      {showSettings && (
        <div className="fixed right-0 top-20 z-40 w-80 bg-card/95 backdrop-blur-md border-l border-border p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Reading Settings</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSettings(false)}
            >
              ✕
            </Button>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-foreground mb-3 block">
                Font Size
              </label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFontSize(Math.max(14, fontSize - 2))}
                  disabled={fontSize <= 14}
                >
                  -
                </Button>
                <span className="text-sm text-muted-foreground min-w-12 text-center">
                  {fontSize}px
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                  disabled={fontSize >= 24}
                >
                  +
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <div className="relative z-20">
        <div className="container mx-auto px-6 pt-32 pb-20">
          <div className="max-w-4xl mx-auto">
            
            {/* Chapter Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-primary/60" />
                <span className="text-primary/60 font-medium">Chapter {effectiveChapterNumber}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4 tracking-tight">
                {currentChapter.title}
              </h1>
              
              {currentChapter.subtitle && (
                <h2 className="text-xl md:text-2xl text-primary-foreground/70 font-light mb-6">
                  {currentChapter.subtitle}
                </h2>
              )}
              
              <div className="flex items-center justify-center gap-6 text-sm text-primary-foreground/60">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {currentChapter.readingTime}
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  {Math.ceil(readingProgress)}% read
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <Button
                variant="glass"
                size="sm"
                onClick={() => setShowTableOfContents(!showTableOfContents)}
                className="flex items-center gap-2"
              >
                <Menu className="w-4 h-4" />
                Contents
              </Button>
              
              <Button
                variant="glass"
                size="sm"
                onClick={() => setShowSettings(!showSettings)}
                className="flex items-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Settings
              </Button>
              
              <Button
                variant="glass"
                size="sm"
                onClick={handleBookmark}
                className="flex items-center gap-2"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                {isBookmarked ? 'Saved' : 'Save'}
              </Button>
              
              <Button
                variant="glass"
                size="sm"
                onClick={handleShare}
                className="flex items-center gap-2"
              >
                <Share className="w-4 h-4" />
                Share
              </Button>
            </div>
            
            {/* Chapter Content */}
            <Card className="bg-card/20 backdrop-blur-sm border-border/50 shadow-2xl">
              <div className="p-8 md:p-16">
                <div className="prose prose-lg prose-invert max-w-none">
                  {currentChapter.content.split('\n\n').map((paragraph, index) => (
                    <p 
                      key={index} 
                      className="text-primary-foreground/90 leading-relaxed mb-8 first-letter:text-6xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-2"
                      style={{ 
                        fontSize: `${fontSize}px`,
                        lineHeight: '1.8'
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Card>

            {/* Navigation between chapters */}
            <div className="flex justify-between items-center mt-16">
              <div>
                {parseInt(effectiveChapterNumber!) > 1 && (
                  <Link to={`/chapter/${parseInt(effectiveChapterNumber!) - 1}`}>
                    <Button variant="hero" size="lg" className="flex items-center gap-3">
                      <ArrowLeft className="w-5 h-5" />
                      <div className="text-left">
                        <div className="text-sm opacity-75">Previous</div>
                        <div>Chapter {parseInt(effectiveChapterNumber!) - 1}</div>
                      </div>
                    </Button>
                  </Link>
                )}
              </div>
              
              <div className="text-center">
                <Link to="/book">
                  <Button variant="glass" size="lg" className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Back to Book
                  </Button>
                </Link>
              </div>
              
              <div>
                {parseInt(effectiveChapterNumber!) < Object.keys(chapters).length && (
                  <Link to={`/chapter/${parseInt(effectiveChapterNumber!) + 1}`}>
                    <Button variant="hero" size="lg" className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-sm opacity-75">Next</div>
                        <div>Chapter {parseInt(effectiveChapterNumber!) + 1}</div>
                      </div>
                      <ArrowRight className="w-5 h-5" />
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