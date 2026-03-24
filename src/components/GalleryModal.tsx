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
      <DialogContent className="grid h-[min(92vh,920px)] w-[min(96vw,1200px)] max-w-none grid-rows-[auto,minmax(0,1fr),auto] gap-0 overflow-hidden rounded-2xl border border-background/10 bg-foreground p-0 text-background [&>button:last-child]:hidden">
        <VisuallyHidden>
          <DialogTitle>{title} Gallery</DialogTitle>
        </VisuallyHidden>

        <div className="flex items-start justify-between gap-4 border-b border-background/10 px-4 py-4 sm:px-6">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-background/90">{title}</p>
            <p className="mt-0.5 text-xs text-background/60">{activeIdx + 1} of {images.length}</p>
          </div>

          <button
            onClick={() => onOpenChange(false)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20"
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative min-h-0 px-3 py-3 sm:px-6 sm:py-5">
          <div className="flex h-full min-h-0 items-center justify-center overflow-hidden rounded-xl bg-background/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.22 }}
                className="flex h-full w-full items-center justify-center p-2 sm:p-4"
              >
                <img
                  src={images[activeIdx]}
                  alt={`${alt} – view ${activeIdx + 1}`}
                  className="block h-auto max-h-full w-auto max-w-full select-none object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-1 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-foreground/80 text-background shadow-lg transition-colors hover:bg-foreground/90 sm:left-4 sm:h-11 sm:w-11"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-1 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-foreground/80 text-background shadow-lg transition-colors hover:bg-foreground/90 sm:right-4 sm:h-11 sm:w-11"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="border-t border-background/10 px-4 py-4 sm:px-6">
            <div className="flex gap-2 overflow-x-auto pb-1 sm:justify-center">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-10 w-14 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                    i === activeIdx
                      ? "border-background opacity-100"
                      : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
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
