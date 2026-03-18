import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  speed?: number;
}

const CarouselCard = ({ item }: { item: CarouselItem }) => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const hasMultiple = item.images.length > 1;

  return (
    <>
      <article
        className="group w-[280px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 sm:w-[320px]"
        onClick={() => setGalleryOpen(true)}
      >
        <div className="relative aspect-[3/2] overflow-hidden">
          <img
            src={item.images[0]}
            alt={item.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {hasMultiple && (
            <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-border/60 bg-background/75 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm">
              <Images className="h-3.5 w-3.5" />
              {item.images.length}
            </span>
          )}
        </div>

        <div className="p-5">
          <h3 className="text-display mb-1.5 text-lg">{item.name}</h3>
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
  const firstSetRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const progressThumbRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const setWidthRef = useRef(0);
  const hoverPausedRef = useRef(false);
  const dragPausedRef = useRef(false);

  const applyOffset = useCallback((nextOffset: number) => {
    const setWidth = setWidthRef.current;
    const track = trackRef.current;

    if (!track || !setWidth) {
      return;
    }

    const normalizedOffset = ((nextOffset % setWidth) + setWidth) % setWidth;
    const progress = (normalizedOffset / setWidth) * 100;

    offsetRef.current = normalizedOffset;
    track.style.transform = `translate3d(-${normalizedOffset}px, 0, 0)`;

    if (progressFillRef.current) {
      progressFillRef.current.style.width = `${progress}%`;
    }

    if (progressThumbRef.current) {
      progressThumbRef.current.style.left = `${progress}%`;
    }
  }, []);

  useEffect(() => {
    const measure = () => {
      setWidthRef.current = firstSetRef.current?.scrollWidth ?? 0;
      applyOffset(offsetRef.current);
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    if (firstSetRef.current) {
      resizeObserver.observe(firstSetRef.current);
    }

    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [applyOffset, items]);

  const animate = useCallback(
    (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const delta = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;

      if (!hoverPausedRef.current && !dragPausedRef.current && setWidthRef.current > 0) {
        applyOffset(offsetRef.current + (speed * delta) / 1000);
      }

      animationFrameRef.current = window.requestAnimationFrame(animate);
    },
    [applyOffset, speed],
  );

  useEffect(() => {
    animationFrameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animate]);

  const seekToClientX = useCallback(
    (clientX: number) => {
      const progressBar = progressBarRef.current;
      const setWidth = setWidthRef.current;

      if (!progressBar || !setWidth) {
        return;
      }

      const { left, width } = progressBar.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (clientX - left) / width));

      applyOffset(ratio * setWidth);
      lastTimestampRef.current = null;
    },
    [applyOffset],
  );

  const handleSeekStart = (event: React.PointerEvent<HTMLDivElement>) => {
    dragPausedRef.current = true;
    seekToClientX(event.clientX);

    const handlePointerMove = (moveEvent: PointerEvent) => {
      seekToClientX(moveEvent.clientX);
    };

    const handlePointerUp = () => {
      dragPausedRef.current = false;
      lastTimestampRef.current = null;
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  const duplicatedItems = useMemo(() => [items, items], [items]);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        hoverPausedRef.current = true;
      }}
      onMouseLeave={() => {
        hoverPausedRef.current = false;
        lastTimestampRef.current = null;
      }}
    >
      <div className="overflow-hidden">
        <div ref={trackRef} className="flex will-change-transform">
          {duplicatedItems.map((group, groupIndex) => (
            <div
              key={`service-group-${groupIndex}`}
              ref={groupIndex === 0 ? firstSetRef : undefined}
              className="flex shrink-0 gap-5 pr-5"
              aria-hidden={groupIndex === 1}
            >
              {group.map((item) => (
                <CarouselCard key={`${groupIndex}-${item.name}`} item={item} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-md px-2">
        <div
          ref={progressBarRef}
          className="relative flex h-6 cursor-pointer touch-none items-center"
          onPointerDown={handleSeekStart}
          aria-label="Seek through services"
        >
          <div className="h-0.5 w-full overflow-hidden rounded-full bg-primary-foreground/10">
            <div ref={progressFillRef} className="h-full w-0 rounded-full bg-primary-foreground/45" />
          </div>
          <div
            ref={progressThumbRef}
            className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-foreground/20 bg-background shadow-sm"
            style={{ left: "0%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AutoScrollCarousel;
