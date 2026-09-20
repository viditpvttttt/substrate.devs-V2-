import { createFileRoute, Link } from "@tanstack/react-router";
import { LatticeDiagram } from "@/components/LatticeDiagram";
import { SpectralMark } from "@/components/SpectralMark";
import { SignalDoodle } from "@/components/SignalDoodle";
import { ParticleGlobe } from "@/components/site/ParticleGlobe";
import { ScrollExpandVideo } from "@/components/site/ScrollExpandVideo";
import { LovableStripeShowcase } from "@/components/site/LovableStripeShowcase";
import { GridlineSection } from "@/components/site/GridlineSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Substrate — Kernel, VOID & Folio" },
      {
        name: "description",
        content:
          "Substrate is a research and product studio building Kernel, a multimodal LLM, VOID, a minimalist browser, and Folio, a quiet operating surface for your day.",
      },
      { property: "og:title", content: "Substrate — Kernel, VOID & Folio" },
      {
        property: "og:description",
        content:
          "A research and product studio for the ambient computer: a multimodal model, a browser, and the surface you work on.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-12">
        <div className="spectral-field" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Column — Title & Action */}
            <div className="flex flex-col items-start text-left">
              <SpectralMark variant="substrate" className="rise-in mb-6 h-16 w-16 shadow-md" />
              <p className="rule-label rise-in">The layer underneath</p>
              <h1 className="rise-in mt-6 text-5xl leading-[1.02] text-foreground sm:text-6xl font-semibold">
                We build the ground
                <br />
                <span className="spectrum-text">software grows on.</span>
              </h1>
              <p className="rise-in mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                A research and product studio for the ambient computer. Three products underway:{" "}
                <span className="text-foreground font-medium">Kernel</span>, a multimodal LLM,{" "}
                <span className="text-foreground font-medium">VOID</span>, a minimalist browser, and{" "}
                <span className="text-foreground font-medium">Folio</span>, the surface you work on.
              </p>
              <SignalDoodle
                className="rise-in mt-6 h-8 w-48 text-muted-foreground sm:w-64"
                aria-hidden="true"
              />
              <div className="rise-in mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/kernel"
                  className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 shadow-md"
                >
                  Meet Kernel
                </Link>
                <Link
                  to="/void"
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm text-foreground backdrop-blur hover:bg-accent"
                >
                  VOID Browser
                  <span className="text-muted-foreground transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Column — Revolving 3D Dot-Matrix Globe matching Image 1 */}
            <div className="relative flex justify-center items-center h-[420px] sm:h-[480px]">
              <ParticleGlobe className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Scroll To Expand Video Showcase ("Human Expression") */}
        <ScrollExpandVideo />
      </section>

      {/* Product Cards Grid */}
      <section className="border-y border-border/70 bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px bg-border/70 sm:grid-cols-3">
          <ProductCard
            to="/kernel"
            label="Kernel"
            status="In training"
            title="One model, every modality"
            body="Text, images, audio and video in a single context — one representation instead of a stack of translators."
            media={<SpectralMark variant="kernel" className="h-16 w-16" />}
          />
          <ProductCard
            to="/void"
            label="VOID Browser"
            status="Pre-production"
            title="Nothing in the way"
            body="The page, the model and your intent on the same surface. No tab sprawl, no chrome you did not ask for."
            media={<SpectralMark variant="void" className="h-16 w-16 text-foreground" />}
          />
          <ProductCard
            to="/folio"
            label="Folio"
            status="Private beta"
            title="The quiet operating surface"
            body="Weather, news, files, memory, agents and deep research on one canvas that already knows your morning."
            media={<SpectralMark variant="folio" className="h-16 w-16" />}
          />
        </div>
      </section>

      {/* Lovable & Stripe Inspired Interactive Bento Cards */}
      <LovableStripeShowcase />

      {/* Gridline Architecture Section */}
      <GridlineSection />

      {/* Lattice Diagram Section */}
      <section className="relative isolate overflow-hidden">
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-5xl items-center gap-14 px-6 py-24 sm:py-32 lg:grid-cols-2">
          <div>
            <p className="rule-label">One substrate</p>
            <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-4xl">
              Three products, one shared ground
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              The same runtime, the same memory, the same notion of context runs under all of it.
              Drag the lattice — every node is a shared slot, every edge a route between the pieces.
            </p>
            <Link
              to="/studio"
              className="group mt-8 inline-flex items-center gap-2 text-sm text-foreground"
            >
              How we build
              <span className="text-muted-foreground transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
          <LatticeDiagram className="aspect-square rounded-2xl border border-border/70 bg-card/50" />
        </div>
      </section>

      {/* Early / Contact Section */}
      <section className="relative isolate overflow-hidden border-t border-border/70">
        <div className="relative mx-auto max-w-2xl px-6 py-28 text-center sm:py-32">
          <h2 className="text-4xl leading-tight text-foreground sm:text-5xl">
            Early, and open to company
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            If you are building at the same layer — models, runtimes, browsers — we would like to
            hear from you.
          </p>
          <a
            href="mailto:hello@substrate.dev"
            className="mt-10 inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 shadow-md"
          >
            Get in touch
          </a>
        </div>
      </section>
    </>
  );
}

function ProductCard({
  to,
  label,
  status,
  title,
  body,
  media,
}: {
  to: "/kernel" | "/void" | "/folio";
  label: string;
  status: string;
  title: string;
  body: string;
  media: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="group flex flex-col bg-card px-8 py-12 transition-colors hover:bg-accent/40"
    >
      {media}
      <div className="mt-8 flex items-center gap-3">
        <p className="rule-label">{label}</p>
        <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-muted-foreground">
          {status}
        </span>
      </div>
      <h3 className="mt-3 text-2xl leading-snug text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm text-foreground">
        Read more
        <span className="text-muted-foreground transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
