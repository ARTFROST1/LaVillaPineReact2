import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/use-language";
import { apiRequest } from "@/lib/queryClient";
import { Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Имя должно содержать не менее 2 символов"),
  email: z.string().email("Пожалуйста, введите действительный адрес электронной почты"),
  message: z.string().min(10, "Сообщение должно содержать не менее 10 символов")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const { t } = useLanguage();
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
          title: t.contactForm.success,
          description: "Мы скоро свяжемся с вами.",
        });
        reset();
      } else {
        throw new Error(result.message || "Не удалось отправить сообщение");
      }
    } catch (error) {
      toast({
        title: t.contactForm.error,
        description: error instanceof Error ? error.message : t.contactForm.error,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-gray-700 text-sm font-medium">{t.contactForm.name}</Label>
        <Input
          id="name"
          type="text"
          placeholder={t.contactForm.name}
          className="mt-2"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>
      
      <div>
        <Label htmlFor="email" className="text-gray-700 text-sm font-medium">{t.contactForm.email}</Label>
        <Input
          id="email"
          type="email"
          placeholder={t.contactForm.email}
          className="mt-2"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <Label htmlFor="message" className="text-gray-700 text-sm font-medium">{t.contactForm.message}</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder={t.contactForm.message}
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
        className="w-full bg-accent hover:bg-white/20 hover:backdrop-blur-sm hover:text-accent text-white border-2 border-accent hover:border-white transition-all duration-300 shadow-lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t.contactForm.submit}...
          </>
        ) : (
          t.contactForm.submit
        )}
      </Button>
    </form>
  );
}
