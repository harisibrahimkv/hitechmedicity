import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const youtubeVideos = [
  "zaUXKPMiWDA",
  "XKgEPqBcaKk",
  "S1KaS3pUQLE",
  "KZtgiJ_GOhI",
  "_aSVzrpU2SI",
  "iQuwI1Dww9c",
  "QjQXsIlZ98M",
  "Nf4aCyYUa8w",
  "vEZTz0xIV-c",
  "ezkA4c9jmBg",
  "eTQ8w7yfDM0",
  "Ac6boNNHRP4",
  "sy7SRLJ2WsU",
  "RHwke8l_3Pg",
];

const YouTubeTestimonialsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="relative mt-12">
      <p className="text-xs uppercase tracking-[0.2em] opacity-60 font-medium mb-6">
        More patient stories
      </p>

      {/* Scroll buttons */}
      {canScrollLeft && (
        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-primary-foreground/90 text-primary shadow-soft backdrop-blur-sm border-primary-foreground/20"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}
      {canScrollRight && (
        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-primary-foreground/90 text-primary shadow-soft backdrop-blur-sm border-primary-foreground/20"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {youtubeVideos.map((id) => (
          <div
            key={id}
            className="w-[320px] sm:w-[360px] shrink-0 rounded-2xl overflow-hidden border border-primary-foreground/10 bg-primary-foreground/5"
          >
            <div className="aspect-video pointer-events-none sm:pointer-events-auto">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${id}`}
                title="Patient testimonial video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="h-full w-full pointer-events-none sm:pointer-events-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeTestimonialsCarousel;
