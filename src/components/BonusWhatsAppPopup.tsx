import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BonusWhatsAppPopupProps {
  whatsappUrl: string;
}

const BonusWhatsAppPopup = ({ whatsappUrl }: BonusWhatsAppPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a short delay to ensure page is loaded
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/20 transition-opacity duration-300"
        onClick={() => setIsVisible(false)}
        aria-hidden="true"
      />

      {/* Popup container */}
      <div
        className="fixed bottom-4 right-4 z-50 w-full max-w-xs sm:bottom-6 sm:right-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
        role="dialog"
        aria-labelledby="popup-title"
        aria-modal="true"
      >
        <div className="rounded-lg bg-card shadow-panel">
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-3 top-3 inline-flex items-center justify-center rounded-md p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Close popup"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Content */}
          <div className="space-y-4 p-5 pr-10 sm:p-6">
            {/* Main heading with emoji */}
            <div className="space-y-2">
              <div className="text-4xl font-black text-primary sm:text-5xl">
                🎁
              </div>
              <h2
                id="popup-title"
                className="text-2xl font-black text-primary sm:text-3xl"
              >
                100% BONUS
              </h2>
            </div>

            {/* Supporting text */}
            <p className="text-sm leading-6 text-foreground/90 sm:text-base">
              Claim your 100% bonus now!
            </p>

            {/* WhatsApp CTA Button */}
            <Button
              asChild
              variant="whatsapp"
              className="w-full h-11 text-sm font-black sm:h-12 sm:text-base"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                CLICK HERE — WHATSAPP
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BonusWhatsAppPopup;
