import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TranslationProvider } from "@/contexts/TranslationContext";
import Index from "./pages/Index";
import Book from "./pages/Book";
import NotFound from "./pages/NotFound";
import Maps from "./pages/maps";
import Characters from "./pages/characters";
import Chapter from "./pages/Chapter";
import ContactSection from "./pages/ContactSection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TranslationProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/book" element={<Book />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/chapter/:chapterId" element={<Chapter />} />
            <Route path="/ContactSection" element={<ContactSection/>}/>
            
            {/* ADD ALL CUSTOM ROUTES BELOW THIS LINE */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </TranslationProvider>
  </QueryClientProvider>
);

export default App;
