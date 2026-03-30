import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, Quote, Pause } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import YouTubeTestimonialsCarousel from "@/components/YouTubeTestimonialsCarousel";

const ease = [0.4, 0, 0.2, 1] as const;

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [textIndex, setTextIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const textTestimonials = [
    { name: "Ahmed Mareeth", location: t("testimonials.ahmedQuote").includes("عالمي") ? "القطيف، المملكة العربية السعودية" : "Qatif, Saudi Arabia", quote: t("testimonials.ahmedQuote") },
    { name: "Naufal", location: t("testimonials.ahmedQuote").includes("عالمي") ? "كانور، كيرالا" : "Kannur, Kerala", quote: t("testimonials.naufalQuote") },
    { name: "Deepak Darmadom", location: t("testimonials.ahmedQuote").includes("عالمي") ? "كيرالا" : "Kerala", quote: t("testimonials.deepakQuote") },
  ];

  const nextText = () => setTextIndex((i) => (i + 1) % textTestimonials.length);
  const prevText = () => setTextIndex((i) => (i - 1 + textTestimonials.length) % textTestimonials.length);
  const current = textTestimonials[textIndex];

  const toggleVideo = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;
    if (playingVideo === id) { video.pause(); setPlayingVideo(null); }
    else {
      if (playingVideo && videoRefs.current[playingVideo]) videoRefs.current[playingVideo]!.pause();
      video.play(); setPlayingVideo(id);
    }
  };

  return (
    <section id="testimonials" className="py-32 lg:py-40 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }} className="max-w-2xl mb-20">
          <p className="text-xs uppercase tracking-[0.2em] opacity-60 font-medium mb-4">{t("testimonials.label")}</p>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
            {t("testimonials.heading")} <em className="text-display italic">{t("testimonials.headingItalic")}</em>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }} className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-auto lg:h-full bg-primary-foreground/10">
            <video ref={(el) => { videoRefs.current["1"] = el; }} src="/videos/testimonial1.mkv" className="w-full h-full object-cover" playsInline onEnded={() => setPlayingVideo(null)} onClick={() => toggleVideo("1")} />
            {playingVideo !== "1" && (
              <button onClick={() => toggleVideo("1")} className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300" aria-label="Play video">
                <div className="w-16 h-16 rounded-full bg-primary-foreground/90 flex items-center justify-center shadow-soft"><Play className="w-6 h-6 text-primary ml-0.5" /></div>
              </button>
            )}
            {playingVideo === "1" && (
              <button onClick={() => toggleVideo("1")} className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary-foreground/80 flex items-center justify-center shadow-soft opacity-0 hover:opacity-100 transition-opacity duration-300" aria-label="Pause video">
                <Pause className="w-4 h-4 text-primary" />
              </button>
            )}
          </div>
          <div className="flex flex-col justify-center">
            <Quote className="w-8 h-8 text-primary-foreground/20 mb-4" />
            <blockquote className="text-base md:text-lg leading-relaxed opacity-70 mb-6">"{t("testimonials.muneerQuote")}"</blockquote>
            <div>
              <a href="https://niyamasabha.nic.in/index.php/content/member_homepage/2402" target="_blank" rel="noopener noreferrer" className="text-display text-lg hover:opacity-80 transition-opacity">Dr. MK Muneer</a>
              <p className="text-sm opacity-60">{t("testimonials.muneerTitle")}</p>
              <p className="text-sm opacity-60">Calicut, Kerala</p>
            </div>
          </div>
        </motion.div>

        <YouTubeTestimonialsCarousel />

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }} className="relative bg-background rounded-3xl p-10 md:p-14 shadow-soft max-w-4xl mx-auto mt-16">
          <Quote className="w-10 h-10 text-primary/20 mb-6" />
          <AnimatePresence mode="wait">
            <motion.div key={textIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3, ease }}>
              <blockquote className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-8">"{current.quote}"</blockquote>
              <div>
                <p className="text-display text-lg text-foreground">{current.name}</p>
                <p className="text-sm text-muted-foreground">{current.location}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-10 right-10 md:right-14 flex gap-2 rtl:right-auto rtl:left-10 rtl:md:left-14">
            <Button variant="outline" size="icon" onClick={prevText} className="h-10 w-10" aria-label="Previous testimonial"><ChevronLeft className="w-4 h-4" /></Button>
            <Button variant="outline" size="icon" onClick={nextText} className="h-10 w-10" aria-label="Next testimonial"><ChevronRight className="w-4 h-4" /></Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
