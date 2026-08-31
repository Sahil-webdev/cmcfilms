import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type LightboxItem = {
  src: string;
  alt: string;
  title?: string;
  category?: string;
  location?: string;
  year?: string;
};

type LightboxProps = {
  items: LightboxItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ items, currentIndex, onClose, onNavigate }: LightboxProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const item = isOpen ? items[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prev = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    onNavigate(prev);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const next = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    onNavigate(next);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-cinema/95 backdrop-blur-xl transition-all duration-300 animate-in fade-in"
      onClick={onClose}
    >
      {/* Top Header Controls */}
      <div
        className="absolute top-0 inset-x-0 flex items-center justify-between p-6 md:p-8 z-10 bg-gradient-to-b from-cinema/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
          <span className="font-display text-lg tracking-widest text-ivory/90 uppercase">
            {item.category || "CMC Editorial"}
          </span>
          <span className="text-ivory/40">/</span>
          <span className="label-xs text-taupe font-mono">
            {String(currentIndex + 1).padStart(2, "0")} of {String(items.length).padStart(2, "0")}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close Lightbox"
          className="flex items-center justify-center w-11 h-11 rounded-full border border-ivory/20 text-ivory hover:bg-ivory hover:text-cinema hover:border-ivory transition-all duration-300 cursor-pointer"
        >
          <X className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </div>

      {/* Navigation Buttons */}
      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous Image"
            className="absolute left-4 md:left-8 z-10 flex items-center justify-center w-12 h-12 rounded-full border border-ivory/20 text-ivory hover:bg-ivory hover:text-cinema hover:border-ivory transition-all duration-300 cursor-pointer backdrop-blur-md"
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next Image"
            className="absolute right-4 md:right-8 z-10 flex items-center justify-center w-12 h-12 rounded-full border border-ivory/20 text-ivory hover:bg-ivory hover:text-cinema hover:border-ivory transition-all duration-300 cursor-pointer backdrop-blur-md"
          >
            <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </>
      )}

      {/* Main Image Container */}
      <div
        className="relative max-w-[90vw] max-h-[82vh] flex flex-col items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-[75vh] max-w-full object-contain rounded-sm shadow-2xl transition-all duration-300"
        />

        {/* Caption Metadata */}
        <div className="mt-4 text-center max-w-2xl px-4">
          {item.title && (
            <h3 className="font-display text-xl md:text-2xl text-ivory font-light tracking-wide">
              {item.title}
            </h3>
          )}
          <div className="mt-1 flex items-center justify-center gap-3 text-xs tracking-widest text-taupe uppercase font-sans">
            {item.location && <span>{item.location}</span>}
            {item.location && item.year && <span className="text-gold">•</span>}
            {item.year && <span>{item.year}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
