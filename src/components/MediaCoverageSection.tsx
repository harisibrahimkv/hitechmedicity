import { Globe, Play } from "lucide-react";
import { useEffect } from "react";

const instagramEmbedUrl =
  "https://www.instagram.com/reel/DQrPP9-FQ97/?utm_source=ig_embed&utm_campaign=loading";

const MediaCoverageSection = () => {
  useEffect(() => {
    const processEmbeds = () => {
      (window as any).instgrm?.Embeds?.process();
    };

    if ((window as any).instgrm?.Embeds) {
      processEmbeds();
      return;
    }

    const existingScript = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]',
    ) as HTMLScriptElement | null;

    if (existingScript) {
      existingScript.addEventListener("load", processEmbeds);
      return () => existingScript.removeEventListener("load", processEmbeds);
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = processEmbeds;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, []);

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
            When renowned Egyptian journalist and TV presenter Mona Iraqi came to India
            investigating holistic treatments, she discovered the transformative power of
            Kerala&apos;s Ayurveda at our facility.
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
                With millions of followers across the Arab world, Mona Iraqi is one of Egypt&apos;s
                most prominent investigative journalists and TV presenters. Her month-long
                stay at our facility was a moment of pride for us and for Indian Ayurveda.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row: Reel + Media One link */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Instagram Reel */}
          <div className="flex flex-col items-center text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium mb-6">
              Watch the Reel
            </p>
            <div className="w-full max-w-[540px] rounded-3xl overflow-hidden border border-primary/10 bg-primary/[0.03] p-3 shadow-lg">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={instagramEmbedUrl}
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: 0,
                  borderRadius: "3px",
                  boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px auto",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: 0,
                  width: "calc(100% - 2px)",
                }}
              >
                <div style={{ padding: "16px" }}>
                  <a
                    href={instagramEmbedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "#FFFFFF",
                      lineHeight: 0,
                      padding: 0,
                      textAlign: "center",
                      textDecoration: "none",
                      width: "100%",
                      display: "block",
                    }}
                  >
                    <div style={{ color: "#3897f0", fontSize: "14px", lineHeight: "18px" }}>
                      View this post on Instagram
                    </div>
                  </a>
                </div>
              </blockquote>
            </div>
          </div>

          {/* Media One link */}
          <div className="flex flex-col items-center text-center justify-center h-full">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium mb-6">
              Full Media Coverage
            </p>
            <a
              href="https://www.youtube.com/watch?v=-NeJ3d8XRuc"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-primary/10 bg-primary/[0.03] p-10 md:p-14 flex flex-col items-center gap-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Play className="h-7 w-7 text-primary ml-1" />
              </div>
              <div>
                <h4 className="font-serif text-2xl tracking-tight mb-2">
                  Watch the Complete Report
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  The full interview and feature story on Media One, covering Mona Iraqi&apos;s
                  experience with Ayurveda in Kerala.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverageSection;
