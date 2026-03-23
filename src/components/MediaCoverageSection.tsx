import { ExternalLink, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

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

        {/* Featured visit card */}
        <div className="rounded-3xl border border-primary/10 bg-primary/[0.03] overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Instagram Reel Embed */}
            <div className="aspect-[9/16] md:aspect-auto md:min-h-[600px] bg-foreground/5 relative overflow-hidden">
              <iframe
                src="https://www.instagram.com/reel/DQrPP9-FQ97/embed"
                className="w-full h-full absolute inset-0"
                frameBorder="0"
                scrolling="no"
                allowTransparency
                loading="lazy"
                title="Mona Iraqi visits the facility"
              />
            </div>

            {/* Content side */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                    Featured Visit · November 2025
                  </p>
                </div>
              </div>

              <h3 className="font-serif text-3xl md:text-4xl tracking-tight mb-4">
                Mona Iraqi
              </h3>

              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
                Egyptian TV Presenter · Investigative Journalist · Filmmaker
              </p>

              <p className="text-foreground/80 leading-relaxed mb-6">
                With millions of followers across the Arab world, Mona Iraqi is one of Egypt's
                most prominent investigative journalists and TV presenters. Her visit to our
                facility in November 2025 was a moment of pride — she specifically highlighted
                how our approach to holistic healing stands out as a beacon of India's
                contribution to global wellness.
              </p>

              <div className="flex items-center gap-3 mb-8 p-4 rounded-2xl bg-primary/[0.05] border border-primary/10">
                <Award className="h-5 w-5 text-primary shrink-0" />
                <p className="text-sm text-foreground/70 italic">
                  "This facility represents the best of what India has to offer in holistic healthcare."
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild variant="default" size="lg">
                  <a
                    href="https://www.instagram.com/reel/DQrPP9-FQ97/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch the Reel
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a
                    href="https://www.instagram.com/mona_iraqi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow Mona Iraqi
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverageSection;
