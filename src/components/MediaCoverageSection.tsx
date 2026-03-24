import { Globe, Play, Instagram, Youtube } from "lucide-react";

const MediaCoverageSection = () => {
  return (
    <section id="media" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium mb-4">
            International Recognition
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Putting India on the Map
          </h2>
        </div>

        {/* Main content: Video + Text side by side */}
        <div className="rounded-3xl border border-primary/10 bg-primary/[0.03] overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Video */}
            <div className="relative overflow-hidden bg-foreground/5">
              <video
                src="/videos/mona_iraqi.mp4"
                controls
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content side */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  Featured Visit · November 2025
                </p>
              </div>

              <h3 className="font-serif text-3xl md:text-4xl tracking-tight mb-4">
                Mona Iraqi
              </h3>

              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
                Egyptian TV Presenter · Investigative Journalist · Documentary Producer
              </p>

              <p className="text-foreground/80 leading-relaxed mb-6">
                With millions of followers across the Arab world, Mona Iraqi is one of Egypt&apos;s
                most prominent investigative journalists and TV presenters. Her stay at our facility was a moment of pride for us and for Indian Ayurveda.
              </p>

              <a
                href="https://www.youtube.com/@HitechMedicity"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <Youtube className="h-5 w-5" />
                Watch the complete report
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row: Reel video + View on Instagram */}
        <div className="flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium mb-6">
            Watch the Reel
          </p>
          <div className="w-full max-w-md rounded-3xl overflow-hidden border border-primary/10 bg-primary/[0.03] shadow-lg">
            <video
              src="/videos/mona_reel.mp4"
              controls
              preload="metadata"
              className="w-full"
            />
          </div>
          <a
            href="https://www.instagram.com/reel/DQrPP9-FQ97/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <Instagram className="h-5 w-5" />
            View on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverageSection;
