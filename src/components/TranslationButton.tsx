import { Button } from "@/components/ui/button";
import { Globe, Loader2 } from "lucide-react";

interface TranslationButtonProps {
  onTranslate: () => void;
  isTranslating?: boolean;
  isTranslated?: boolean;
}

const TranslationButton = ({ onTranslate, isTranslating = false, isTranslated = false }: TranslationButtonProps) => {
  return (
    <Button
      variant="glass"
      size="sm"
      onClick={onTranslate}
      disabled={isTranslating}
      className="relative"
    >
      {isTranslating ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Globe className="w-4 h-4" />
      )}
      <span className="ml-2">{isTranslated ? "English" : "العربية"}</span>
    </Button>
  );
};

export default TranslationButton;