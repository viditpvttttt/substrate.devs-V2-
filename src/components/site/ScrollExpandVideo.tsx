import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles } from "lucide-react";

export function ScrollExpandVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Scroll to expand transform
  const scale = useTransform(scrollYProgress, [0, 1], [0.84, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["2.5rem", "1.5rem"]);
  const shadowOpacity = useTransform(scrollYProgress, [0, 1], [0.15, 0.45]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section ref={containerRef} className="relative z-20 mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-spectrum-4" />
          Featured Film — Human Expression
        </span>
      </div>

      <motion.div
        style={{
          scale,
          borderRadius,
        }}
        className="relative mx-auto overflow-hidden border border-border/80 bg-card shadow-2xl transition-all duration-300"
      >
        {/* Glow halo under video */}
        <motion.div
          style={{ opacity: shadowOpacity }}
          aria-hidden
          className="pointer-events-none absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-r from-spectrum-1 via-spectrum-4 to-spectrum-3 blur-3xl opacity-40"
        />

        {/* Generative / Video Canvas Container */}
        <div className="relative aspect-video w-full overflow-hidden bg-ink/90">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="h-full w-full object-cover"
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80"
          />

          {/* Overlay gradient & title */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 sm:p-10 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-black/40 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-white/90 backdrop-blur border border-white/10">
                Substrate Studios · 02
              </span>
              <button
                onClick={toggleMute}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition-transform hover:scale-110 border border-white/10"
                aria-label="Toggle mute"
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h3 className="text-display text-2xl sm:text-4xl text-white tracking-wide">
                  Human Expression
                </h3>
                <p className="mt-1 text-sm text-white/70 max-w-md font-sans leading-relaxed">
                  Exploring the boundary where intelligence becomes ambient and natural to human thought.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition-transform hover:scale-105 shadow-lg"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-3.5 w-3.5 fill-black" /> Pause
                    </>
                  ) : (
                    <>
                      <Play className="h-3.5 w-3.5 fill-black" /> Play
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
