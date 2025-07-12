import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslation } from "@/contexts/TranslationContext";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Instagram } from "lucide-react";

const Contact = () => {
  const { translate, isTranslating, isTranslated } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
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
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-7xl font-bold text-primary-foreground mb-6">
                CONTACT
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            
              </p>
            </div>
            
            {/* Contact Content */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-glass-bg border-glass-border backdrop-blur-glass p-8 shadow-glass">
                <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-foreground/80 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-glass-bg/50 border border-glass-border rounded-lg text-primary-foreground placeholder-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-foreground/80 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-glass-bg/50 border border-glass-border rounded-lg text-primary-foreground placeholder-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-primary-foreground/80 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-glass-bg/50 border border-glass-border rounded-lg text-primary-foreground placeholder-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Subject of your message"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-foreground/80 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-glass-bg/50 border border-glass-border rounded-lg text-primary-foreground placeholder-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
              
              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="bg-glass-bg border-glass-border backdrop-blur-glass p-8 shadow-glass">
                  <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-primary-foreground/80 leading-relaxed mb-8">
                    Whether you seek answers, wish to share your thoughts, we're here to listen.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary-foreground">Email</h3>
                        <p className="text-primary-foreground/60">fakiryahya78@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary-foreground">Phone</h3>
                        <p className="text-primary-foreground/60">+212 684 933 054</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Instagram className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary-foreground text-white">Instagram</h3>
                        <p className="text-primary-foreground/60 text-white"><a href="https://www.instagram.com/_snowyy_7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">_snowyy_7</a><br /></p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-glass-bg border-glass-border backdrop-blur-glass p-8 shadow-glass">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                    Response Time
                  </h3>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    Messages sent through the shadows typically receive a response within 24-48 hours. For urgent matters, the darkness responds more swiftly.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;