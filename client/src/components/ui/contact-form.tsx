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
  name: z.string().min(2, "Имя должно содержать не менее 2 символов"),
  phone: z.string()
    .min(10, "Номер телефона должен содержать не менее 10 цифр")
    .regex(/^[\+]?[0-9\s\-\(\)]{10,}$/, "Пожалуйста, введите корректный номер телефона"),
  message: z.string().min(10, "Сообщение должно содержать не менее 10 символов")
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
          title: "Сообщение успешно отправлено!",
          description: "Мы скоро свяжемся с вами.",
        });
        reset();
      } else {
        throw new Error(result.message || "Не удалось отправить сообщение");
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: error instanceof Error ? error.message : "Не удалось отправить сообщение. Пожалуйста, попробуйте снова.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-foreground text-sm font-medium">Имя</Label>
        <Input
          id="name"
          type="text"
          placeholder="Ваше имя"
          className="mt-2"
          data-testid="input-name"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
        )}
      </div>
      
      <div>
        <Label htmlFor="phone" className="text-foreground text-sm font-medium">Номер телефона</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+7 (XXX) XXX-XX-XX"
          className="mt-2"
          data-testid="input-phone"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>
      
      <div>
        <Label htmlFor="message" className="text-foreground text-sm font-medium">Сообщение</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Ваше сообщение"
          className="mt-2 resize-none"
          data-testid="textarea-message"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
        )}
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full loft-booking-button text-primary-foreground font-display font-semibold text-base"
        data-testid="button-submit-contact"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Отправка...
          </>
        ) : (
          "Отправить сообщение"
        )}
      </Button>
    </form>
  );
}
