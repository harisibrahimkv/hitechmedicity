import { Globe } from "lucide-react";

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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            When renowned Egyptian journalist and TV presenter Mona Iraqi visited our facility,
            she called it a standout representation of India's excellence in holistic healthcare.
          </p>
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

              <p className="text-foreground/80 leading-relaxed">
                With millions of followers across the Arab world, Mona Iraqi is one of Egypt's
                most prominent investigative journalists and TV presenters. Her visit to our
                facility in November 2025 was a moment of pride — she specifically highlighted
                how our approach to holistic healing stands out as a beacon of India's
                contribution to global wellness.
              </p>
            </div>
          </div>
        </div>

        {/* Instagram Reel — centered, nicely contained */}
        <div className="flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium mb-6">
            Watch the Reel
          </p>
          <div className="w-full max-w-[400px] rounded-3xl overflow-hidden border border-primary/10 bg-primary/[0.03] shadow-lg">
            <iframe
              src="https://www.instagram.com/reel/DQrPP9-FQ97/embed/"
              className="w-full border-0"
              style={{ minHeight: "580px" }}
              allow="autoplay; encrypted-media"
              allowFullScreen
              loading="lazy"
              title="Mona Iraqi visits the facility — Instagram Reel"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverageSection;
