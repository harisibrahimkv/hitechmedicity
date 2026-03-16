import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, Quote, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const ease = [0.4, 0, 0.2, 1] as const;

type VideoTestimonial = {
  id: string;
  name: string;
  location: string;
  youtubeId: string;
};

type TextTestimonial = {
  name: string;
  location: string;
  quote: string;
};

const videoTestimonials: VideoTestimonial[] = [
  { id: "1", name: "Deepak Darmadom", location: "Kerala", youtubeId: "iQuwI1Dww9c" },
  { id: "2", name: "Ahmed Mareeth", location: "Qatif, Saudi Arabia", youtubeId: "QjQXsIlZ98M" },
  { id: "3", name: "Naufal", location: "Kannur, Kerala", youtubeId: "Nf4aCyYUa8w" },
  { id: "4", name: "Abdul Azeez Ibnu Fahad", location: "Saudi Arabia", youtubeId: "vEZTz0xIV-c" },
  { id: "5", name: "Naseena", location: "Kerala", youtubeId: "eTQ8w7yfDM0" },
  { id: "6", name: "Arab Patient", location: "Middle East", youtubeId: "Ac6boNNHRP4" },
];

const textTestimonials: TextTestimonial[] = [
  {
    name: "Ahmed Mareeth",
    location: "Qatif, Saudi Arabia",
    quote: "The treatment I received at Hitech Medicity was world-class. Dr. Febina and her team provided exceptional care that I couldn't find elsewhere. The combination of modern and traditional treatments made all the difference.",
  },
  {
    name: "Naufal",
    location: "Kannur, Kerala",
    quote: "I came for physiotherapy and was amazed by the holistic approach. The facility feels like a premium retreat, not a hospital. The staff treats you like family.",
  },
  {
    name: "Deepak Darmadom",
    location: "Kerala",
    quote: "Hitech Medicity changed my perspective on healthcare. The integration of Ayurveda with modern medicine under one roof is remarkable. Truly a unique facility in Calicut.",
  },
];

const TestimonialsSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [textIndex, setTextIndex] = useState(0);

  const nextText = () => setTextIndex((i) => (i + 1) % textTestimonials.length);
  const prevText = () => setTextIndex((i) => (i - 1 + textTestimonials.length) % textTestimonials.length);
  const current = textTestimonials[textIndex];

  return (
    <section id="testimonials" className="py-32 lg:py-40 bg-champagne/30">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="max-w-2xl mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
            Stories
          </p>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
            Voices of <em className="text-display italic">healing</em>
          </h2>
        </motion.div>

        {/* Featured text testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="relative bg-background rounded-3xl p-10 md:p-14 shadow-soft mb-16 max-w-4xl"
        >
          <Quote className="w-10 h-10 text-primary/20 mb-6" />
          <AnimatePresence mode="wait">
            <motion.div
              key={textIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease }}
            >
              <blockquote className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-8">
                "{current.quote}"
              </blockquote>
              <div>
                <p className="text-display text-lg text-foreground">{current.name}</p>
                <p className="text-sm text-muted-foreground">{current.location}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-10 right-10 md:right-14 flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevText}
              className="h-10 w-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextText}
              className="h-10 w-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Video testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videoTestimonials.map((video, i) => (
            <motion.button
              key={video.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.08 * i }}
              onClick={() => setActiveVideo(video.youtubeId)}
              className="group relative rounded-2xl overflow-hidden aspect-video bg-foreground/5 cursor-pointer text-left"
            >
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                alt={`${video.name} testimonial`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-background/90 flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-5 h-5 text-foreground ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm font-medium text-white">{video.name}</p>
                <p className="text-xs text-white/70">{video.location}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Video modal */}
        <Dialog open={!!activeVideo} onOpenChange={() => setActiveVideo(null)}>
          <DialogContent className="max-w-4xl p-0 bg-black border-none overflow-hidden rounded-2xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Close video"
            >
              <X className="w-4 h-4 text-white" />
            </button>
            {activeVideo && (
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                  title="Patient testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default TestimonialsSection;
