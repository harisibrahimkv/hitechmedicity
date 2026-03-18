import { useState, useRef, useEffect, useCallback } from "react";
import { Images } from "lucide-react";
import GalleryModal from "@/components/GalleryModal";

interface CarouselItem {
  name: string;
  description: string;
  images: string[];
  alt: string;
}

interface AutoScrollCarouselProps {
  items: CarouselItem[];
  speed?: number; // pixels per second
}

const CarouselCard = ({ item }: { item: CarouselItem }) => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const hasMultiple = item.images.length > 1;

  return (
    <>
      <article
        className="group rounded-2xl overflow-hidden bg-primary-foreground/5 border border-primary-foreground/10 flex-shrink-0 w-[280px] sm:w-[320px] cursor-pointer"
        onClick={() => setGalleryOpen(true)}
      >
        <div className="aspect-[3/2] overflow-hidden relative">
          <img
            src={item.images[0]}
            alt={item.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {hasMultiple && (
            <span className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-medium pl-2.5 pr-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Images className="w-3.5 h-3.5" />
              {item.images.length}
            </span>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-display text-lg mb-1.5">{item.name}</h3>
          <p className="text-xs leading-relaxed opacity-60">{item.description}</p>
        </div>
      </article>

      <GalleryModal
        open={galleryOpen}
        onOpenChange={setGalleryOpen}
        images={item.images}
        title={item.name}
        alt={item.alt}
      />
    </>
  );
};

const AutoScrollCarousel = ({ items, speed = 40 }: AutoScrollCarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>();
  const lastTimeRef = useRef<number>();
  const singleSetWidth = useRef(0);
  const [progress, setProgress] = useState(0);

  // Measure the width of one set of items
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Each set has items.length cards; total children = items.length * 3
    const cardCount = items.length;
    let totalWidth = 0;
    for (let i = 0; i < cardCount; i++) {
      const child = track.children[i] as HTMLElement;
      if (child) {
        totalWidth += child.offsetWidth + 20; // 20px gap
      }
    }
    singleSetWidth.current = totalWidth;
  }, [items]);

  const animate = useCallback(
    (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (!isPaused && singleSetWidth.current > 0) {
        offsetRef.current += (speed * delta) / 1000;

        // Reset when we've scrolled one full set
        if (offsetRef.current >= singleSetWidth.current) {
          offsetRef.current -= singleSetWidth.current;
        }

        setProgress((offsetRef.current / singleSetWidth.current) * 100);

        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    },
    [isPaused, speed],
  );

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  // Triple the items for seamless looping
  const tripled = [...items, ...items, ...items];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel track */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-5 will-change-transform"
          style={{ transform: "translateX(0px)" }}
        >
          {tripled.map((item, i) => (
            <CarouselCard key={`${item.name}-${i}`} item={item} />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-8 mx-auto max-w-xs h-0.5 bg-primary-foreground/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary-foreground/40 rounded-full transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default AutoScrollCarousel;
