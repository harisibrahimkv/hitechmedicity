import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const youtubeVideos = [
  "zaUXKPMiWDA", "XKgEPqBcaKk", "S1KaS3pUQLE", "KZtgiJ_GOhI", "_aSVzrpU2SI",
  "iQuwI1Dww9c", "QjQXsIlZ98M", "Nf4aCyYUa8w", "vEZTz0xIV-c", "ezkA4c9jmBg",
  "eTQ8w7yfDM0", "Ac6boNNHRP4", "sy7SRLJ2WsU", "RHwke8l_3Pg",
];

const VideoCard = ({ id, isMobile }: { id: string; isMobile: boolean }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const postPlayerCommand = (func: "playVideo" | "pauseVideo") => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "*"
    );
  };

  const openVideo = () => {
    if (!hasLoaded) {
      setHasLoaded(true);
      setIsOpen(true);
      return;
    }

    setIsOpen(true);
    requestAnimationFrame(() => postPlayerCommand("playVideo"));
  };

  const closeVideo = () => {
    postPlayerCommand("pauseVideo");
    setIsOpen(false);
  };

  if (!isMobile) {
    return (
      <div className="w-[320px] sm:w-[360px] shrink-0 rounded-2xl overflow-hidden border border-primary-foreground/10 bg-primary-foreground/5">
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            title="Patient testimonial video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="h-full w-full"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-[320px] sm:w-[360px] shrink-0 rounded-2xl overflow-hidden border border-primary-foreground/10 bg-primary-foreground/5">
      <div className="aspect-video relative">
        {hasLoaded && (
          <iframe
            ref={iframeRef}
            src={`https://www.youtube-nocookie.com/embed/${id}?enablejsapi=1&playsinline=1&rel=0&modestbranding=1`}
            title="Patient testimonial video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            onLoad={() => {
              if (isOpen) postPlayerCommand("playVideo");
            }}
            className={`absolute inset-0 h-full w-full transition-opacity duration-200 ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        )}

        <button
          onClick={openVideo}
          className={`absolute inset-0 flex items-center justify-center bg-primary/20 transition-opacity duration-200 ${
            isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-label="Play video"
        >
          <img
            src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
            alt="Video thumbnail"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="relative z-10 w-14 h-14 rounded-full bg-primary-foreground/90 flex items-center justify-center shadow-soft">
            <Play className="w-5 h-5 text-primary ml-0.5" />
          </div>
        </button>

        {isOpen && (
          <button
            onClick={closeVideo}
            className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-primary/70 text-primary-foreground flex items-center justify-center text-xs font-bold"
            aria-label="Close video"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

const YouTubeTestimonialsCarousel = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
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
      <p className="text-xs uppercase tracking-[0.2em] opacity-60 font-medium mb-6">{t("testimonials.moreStories")}</p>
      {canScrollLeft && (
        <Button variant="outline" size="icon" onClick={() => scroll("left")} className="absolute left-0 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-primary-foreground/90 text-primary shadow-soft backdrop-blur-sm border-primary-foreground/20" aria-label="Scroll left">
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}
      {canScrollRight && (
        <Button variant="outline" size="icon" onClick={() => scroll("right")} className="absolute right-0 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-primary-foreground/90 text-primary shadow-soft backdrop-blur-sm border-primary-foreground/20" aria-label="Scroll right">
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}
      <div ref={scrollRef} onScroll={checkScroll} className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide pb-2" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {youtubeVideos.map((id) => (
          <VideoCard key={id} id={id} isMobile={isMobile} />
        ))}
      </div>
    </div>
  );
};

export default YouTubeTestimonialsCarousel;

