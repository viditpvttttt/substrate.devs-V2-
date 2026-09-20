import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ParticleGlobe } from "./ParticleGlobe";
import { ScrollExpandVideo } from "./ScrollExpandVideo";
import { Magnetic } from "./Magnetic";
import { openWaitlist } from "./WaitlistDialog";
import { sfx } from "@/lib/sound";
import { usePointerSprings } from "@/lib/pointer";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const { nx, ny } = usePointerSprings();
  const markDriftX = useTransform(nx, [0, 1], [-22, 22]);
  const markDriftZ = useTransform(ny, [0, 1], [1.5, -1.5]);

  return (
    <section ref={ref} id="top" className="relative z-10 overflow-hidden pt-28 pb-16">
      {/* Spectral ambient backglow */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 blur-[110px]">
        <div className="animate-drift absolute left-[8%] top-[10%] h-80 w-80 rounded-full bg-spectrum-1/40" />
        <div
          className="animate-drift absolute right-[10%] top-[24%] h-96 w-96 rounded-full bg-spectrum-4/35"
          style={{ animationDelay: "-8s" }}
        />
        <div
          className="animate-drift absolute left-[38%] top-[0%] h-72 w-72 rounded-full bg-spectrum-3/35"
          style={{ animationDelay: "-4s" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column — Title & Action */}
          <motion.div style={{ y: copyY, opacity: fade }} className="text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground"
            >
              Substrate AI Labs — Research & Product Studio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-display mt-6 text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.98]"
            >
              <span className="block">We build the ground</span>
              <span className="block spectrum-text">software grows on.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-lg text-[17px] leading-relaxed text-muted-foreground"
            >
              A research and product studio for ambient computing. Building Kernel, Folio, and Gridline on one shared substrate runtime.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Magnetic pull={8}>
                <button
                  onClick={openWaitlist}
                  onMouseEnter={sfx.hover}
                  className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-lg transition-transform hover:scale-105"
                >
                  Meet Substrate
                </button>
              </Magnetic>
              <Magnetic pull={8}>
                <a
                  href="#capabilities"
                  onMouseEnter={sfx.hover}
                  className="inline-block rounded-full border border-border bg-card/70 px-7 py-3.5 text-sm font-medium backdrop-blur transition-colors hover:bg-accent"
                >
                  Explore Studio
                </a>
              </Magnetic>
            </motion.div>
          </motion.div>

          {/* Right Column — Revolving 3D Dot-Matrix Globe matching Image 1 */}
          <motion.div
            style={{ x: markDriftX, rotate: markDriftZ }}
            className="relative flex justify-center items-center h-[420px] sm:h-[480px]"
          >
            <ParticleGlobe className="w-full h-full" />
          </motion.div>
        </div>

        {/* Scroll To Expand Video Component ("Human Expression") */}
        <div className="mt-12">
          <ScrollExpandVideo />
        </div>
      </div>
    </section>
  );
}
