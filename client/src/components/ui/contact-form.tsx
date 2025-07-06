import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await apiRequest("POST", "/api/contact", data);
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "We will get back to you soon.",
        });
        reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-neutral p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-semibold mb-6 text-primary">Send Message</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-gray-700 text-sm font-medium">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            className="mt-2"
            {...register("name")}
            error={errors.name?.message}
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="text-gray-700 text-sm font-medium">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Your email"
            className="mt-2"
            {...register("email")}
            error={errors.email?.message}
          />
        </div>
        
        <div>
          <Label htmlFor="message" className="text-gray-700 text-sm font-medium">Message</Label>
          <Textarea
            id="message"
            rows={4}
            placeholder="Your message"
            className="mt-2 resize-none"
            {...register("message")}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-accent/90 text-white"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  );
}
