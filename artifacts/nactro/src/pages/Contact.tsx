import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useSubmitContact } from "@/hooks/use-contact";

export default function Contact() {
  const { toast } = useToast();
  const { mutate: submitContact, isPending } = useSubmitContact();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Fields",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }

    submitContact(formData, {
      onSuccess: () => {
        toast({
          title: "Message Sent",
          description: "We've received your inquiry and will be in touch shortly.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
      onError: () => {
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again.",
          variant: "destructive"
        });
      }
    });
  };

  return (
    <PageWrapper 
      title="Contact Us" 
      description="Get in touch with Nactro's sales or engineering teams."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex-grow">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Let's Secure Your Infrastructure</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you need to discuss enterprise licensing or request a product demo, our team is ready to help.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <FadeIn direction="right" className="lg:col-span-1 space-y-8">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6 border-b border-border/50 pb-4">Direct Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-xl text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm">hello@nactro.com</p>
                    <p className="text-muted-foreground text-sm">security@nactro.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-xl text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Headquarters</h4>
                    <p className="text-muted-foreground text-sm">
                      100 Cyber Way, Suite 400<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-xl text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground text-sm">+1 (800) 555-0199</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="left" delay={0.2} className="lg:col-span-2">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <MessageSquare className="w-48 h-48" />
              </div>
              
              <h3 className="text-2xl font-bold mb-6 relative z-10">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="Jane Doe" 
                      className="bg-background border-border/50 focus-visible:ring-primary h-12"
                      disabled={isPending}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Work Email *</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="jane@company.com" 
                      className="bg-background border-border/50 focus-visible:ring-primary h-12"
                      disabled={isPending}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    placeholder="How can we help you?" 
                    className="bg-background border-border/50 focus-visible:ring-primary h-12"
                    disabled={isPending}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message *</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Tell us about your infrastructure and security needs..." 
                    className="bg-background border-border/50 focus-visible:ring-primary min-h-[150px] resize-y"
                    disabled={isPending}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isPending}
                  className="w-full sm:w-auto h-12 px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold text-base rounded-xl transition-all"
                >
                  {isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageWrapper>
  );
}
