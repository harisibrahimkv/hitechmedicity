import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, Quote, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = [0.4, 0, 0.2, 1] as const;

type VideoTestimonial = {
  id: string;
  name: string;
  title: string;
  profileUrl: string;
  location: string;
  videoSrc: string;
  quote: string;
};

type TextTestimonial = {
  name: string;
  location: string;
  quote: string;
};

const videoTestimonials: VideoTestimonial[] = [
  {
    id: "1",
    name: "Dr. MK Muneer",
    title: "The Hon'ble MLA of Kerala",
    profileUrl: "https://niyamasabha.nic.in/index.php/content/member_homepage/2402",
    location: "Calicut, Kerala",
    videoSrc: "/videos/testimonial1.mkv",
    quote:
      "Hitech Medicity, Calicut is a blessing to the city itself. It offers an integrated treatment methodology with state-of-the-art modern facilities. While primarily Ayurveda, they integrate acupuncture, physiotherapy along with a combination of allopathy. I've made multiple visits where I've had long stays and taken treatments of due course. As far as I am concerned — it is a rejuvenation. Moreover, I've found cure to my diseases from here. I am a chronic diabetic patient. Besides the fact that my diabetes came down, such was the case for my creatinine count as well. As I mentioned, when I was leaving here, it was a literal feeling of rejuvenation — the energy of which I still carry with me to this day. I would even go so far as to say that it is not just about treatment here, but a real lifestyle change is what you can expect. Naturopathy is also a part of the treatments available here. As I mentioned already, this place is indeed a blessing.",
  },
];

const textTestimonials: TextTestimonial[] = [
  {
    name: "Ahmed Mareeth",
    location: "Qatif, Saudi Arabia",
    quote:
      "The treatment I received at Hitech Medicity was world-class. Dr. Febina and her team provided exceptional care that I couldn't find elsewhere. The combination of modern and traditional treatments made all the difference.",
  },
  {
    name: "Naufal",
    location: "Kannur, Kerala",
    quote:
      "I came for physiotherapy and was amazed by the holistic approach. The facility feels like a premium retreat, not a hospital. The staff treats you like family.",
  },
  {
    name: "Deepak Darmadom",
    location: "Kerala",
    quote:
      "Hitech Medicity changed my perspective on healthcare. The integration of Ayurveda with modern medicine under one roof is remarkable. Truly a unique facility in Calicut.",
  },
];

const TestimonialsSection = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const nextText = () =>
    setTextIndex((i) => (i + 1) % textTestimonials.length);
  const prevText = () =>
    setTextIndex(
      (i) => (i - 1 + textTestimonials.length) % textTestimonials.length
    );
  const current = textTestimonials[textIndex];

  const toggleVideo = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;
    if (playingVideo === id) {
      video.pause();
      setPlayingVideo(null);
    } else {
      // Pause any other playing video
      if (playingVideo && videoRefs.current[playingVideo]) {
        videoRefs.current[playingVideo]!.pause();
      }
      video.play();
      setPlayingVideo(id);
    }
  };

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

        {/* Video testimonial */}
        {videoTestimonials.map((video) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="grid lg:grid-cols-2 gap-8 mb-16"
          >
            {/* Video player */}
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-foreground/5">
              <video
                ref={(el) => {
                  videoRefs.current[video.id] = el;
                }}
                src={video.videoSrc}
                className="w-full h-full object-cover"
                playsInline
                onEnded={() => setPlayingVideo(null)}
                onClick={() => toggleVideo(video.id)}
              />
              {playingVideo !== video.id && (
                <button
                  onClick={() => toggleVideo(video.id)}
                  className="absolute inset-0 flex items-center justify-center bg-foreground/20 hover:bg-foreground/30 transition-colors duration-300"
                  aria-label="Play video"
                >
                  <div className="w-16 h-16 rounded-full bg-background/90 flex items-center justify-center shadow-soft">
                    <Play className="w-6 h-6 text-foreground ml-0.5" />
                  </div>
                </button>
              )}
              {playingVideo === video.id && (
                <button
                  onClick={() => toggleVideo(video.id)}
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center shadow-soft opacity-0 hover:opacity-100 transition-opacity duration-300"
                  aria-label="Pause video"
                >
                  <Pause className="w-4 h-4 text-foreground" />
                </button>
              )}
            </div>

            {/* Transcription */}
            <div className="flex flex-col justify-center">
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <blockquote className="text-base md:text-lg leading-relaxed text-foreground/70 mb-6">
                "{video.quote}"
              </blockquote>
              <div>
                <a
                  href={video.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-display text-lg text-foreground hover:text-primary transition-colors"
                >
                  {video.name}
                </a>
                <p className="text-sm text-muted-foreground">
                  {video.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {video.location}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Written testimonials carousel */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="relative bg-background rounded-3xl p-10 md:p-14 shadow-soft max-w-4xl"
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
                <p className="text-display text-lg text-foreground">
                  {current.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {current.location}
                </p>
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
