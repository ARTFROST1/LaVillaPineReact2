"use client";

import { Phone, MessageCircle, Send, ExternalLink, type LucideIcon } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ContactButtonsProps {
  className?: string;
  size?: "sm" | "md" | "lg"; // visual size
  showLabels?: boolean;
  direction?: "row" | "col";
}

// Minimalist, site-consistent contact buttons (gold accent, glassy background)
export default function ContactButtons({
  className,
  size = "md",
  showLabels = false,
  direction = "row",
}: ContactButtonsProps) {
  const sizes: Record<string, string> = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base",
  };

  const iconSizes: Record<string, string> = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  type Btn = { id: string; label: string; icon: LucideIcon; href: string; target?: string; aria: string };

  const buttons: Btn[] = [
    { id: "phone", label: "", icon: Phone, href: `tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`, aria: "Позвонить по телефону" },
    { id: "whatsapp", label: "", icon: MessageCircle, href: SITE_CONFIG.socialLinks.whatsapp, target: "_blank", aria: "Написать в WhatsApp" },
    { id: "telegram", label: "", icon: Send, href: SITE_CONFIG.socialLinks.telegram, target: "_blank", aria: "Написать в Telegram" },
  ];

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        direction === "col" ? "flex-col sm:flex-row" : "flex-row",
        "gap-3 sm:gap-4",
        className
      )}
    >
      {buttons.map((b) => {
        const Icon = b.icon;
        return (
          <a
            key={b.id}
            href={b.href}
            target={b.target}
            rel={b.target === "_blank" ? "noopener noreferrer" : undefined}
            aria-label={b.aria}
            title={b.label}
            className={cn(
              "loft-nav-button inline-flex items-center justify-center",
              sizes[size],
              "rounded-lg",
              "text-foreground",
              "transition-all duration-200",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
            )}
          >
            <Icon className={cn(iconSizes[size], "text-primary")} />
            <span className={cn(showLabels ? "ml-3 font-semibold text-foreground" : "hidden sm:inline-block ml-3 font-semibold text-foreground")}>{b.label || b.aria}</span>
          </a>
        );
      })}
    </div>
  );
}
