import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface GalleryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  images: string[];
  title: string;
  alt: string;
}

const GalleryModal = ({ open, onOpenChange, images, title, alt }: GalleryModalProps) => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (open) setActiveIdx(0);
  }, [open]);

  const goNext = useCallback(() => {
    setActiveIdx((p) => (p + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setActiveIdx((p) => (p - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, goNext, goPrev]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-[95vw] h-[85vh] p-0 bg-black border-none rounded-2xl overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>{title} Gallery</DialogTitle>
        </VisuallyHidden>

        {/* Close button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Close gallery"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title bar */}
        <div className="absolute top-4 left-4 z-20">
          <p className="text-white/90 text-sm font-medium">{title}</p>
          <p className="text-white/50 text-xs mt-0.5">{activeIdx + 1} of {images.length}</p>
        </div>

        {/* Main image area */}
        <div className="relative w-full h-full flex items-center justify-center px-16 py-16">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIdx}
              src={images[activeIdx]}
              alt={`${alt} – view ${activeIdx + 1}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="max-w-full max-h-full object-contain select-none"
            />
          </AnimatePresence>
        </div>

        {/* Prev/Next — fixed to viewport center of the dialog */}
        {images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-8">
            <div className="flex gap-2 justify-center overflow-x-auto">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`flex-shrink-0 w-14 h-10 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    i === activeIdx
                      ? "border-white opacity-100"
                      : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GalleryModal;
