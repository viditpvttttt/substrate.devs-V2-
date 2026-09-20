import { useState } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Code,
  Eye,
  Layers,
  ArrowUpRight,
  Shield,
  CreditCard,
  Globe2,
  Cpu,
  BarChart3,
  Cloud,
  CheckCircle2,
  ShoppingBag,
  Send,
  Zap,
} from "lucide-react";
import { Tilt } from "./Tilt";

export function LovableStripeShowcase() {
  const [activeTab, setActiveTab] = useState<"preview" | "code" | "layers">("preview");
  const [promptText, setPromptText] = useState("Create an online store for minimal desk accessories...");
  const [activeCategory, setActiveCategory] = useState("Connectors");

  return (
    <section className="relative border-t border-border py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Platform Capabilities
          </p>
          <h2 className="text-display mt-5 text-[clamp(2.2rem,5vw,3.8rem)]">
            Built for velocity. <span className="spectrum-text">Engineered for control.</span>
          </h2>
          <p className="mt-6 text-[16.5px] leading-relaxed text-muted-foreground">
            Combine prompt-driven creation with high-performance financial infrastructure and ambient agent runtime.
          </p>
        </div>

        {/* Row 1 — Image 2 Inspired Cards (Lovable Style) */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {/* Card 1: You bring the idea. Substrate brings it to life. */}
          <Tilt strength={6}>
            <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-spectrum-1/30 blur-3xl transition-opacity group-hover:opacity-80" />
              
              <div className="relative pt-4">
                <div className="relative rounded-2xl border border-border/80 bg-background/80 p-5 shadow-inner backdrop-blur">
                  <div className="flex items-center gap-2 border-b border-border/50 pb-3 mb-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[10.5px] text-muted-foreground">Prompt Engine v2.4</span>
                  </div>
                  <div className="relative font-mono text-sm text-foreground">
                    <input
                      type="text"
                      value={promptText}
                      onChange={(e) => setPromptText(e.target.value)}
                      className="w-full bg-transparent outline-none focus:ring-0 text-sm"
                      placeholder="Describe what you want to build..."
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                    <span className="inline-flex items-center gap-1">
                      <Zap className="h-3 w-3 text-spectrum-4" /> Auto-building UI
                    </span>
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] text-primary">
                      Ready
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative mt-8">
                <h3 className="text-display text-xl">You bring the idea. Substrate brings it to life.</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Describe what you want in plain language. Watch as ambient agents build production-grade software with you in real time.
                </p>
              </div>
            </div>
          </Tilt>

          {/* Card 2: Refine your design and deploy */}
          <Tilt strength={6}>
            <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="pointer-events-none absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-spectrum-4/25 blur-3xl" />

              <div className="relative rounded-2xl border border-border/80 bg-background/80 p-4 shadow-sm backdrop-blur">
                <div className="flex items-center justify-between border-b border-border/50 pb-2.5 mb-3">
                  <div className="flex gap-1.5 bg-muted/60 p-1 rounded-lg">
                    <button
                      onClick={() => setActiveTab("preview")}
                      className={`flex items-center gap-1 px-2.5 py-1 text-[10.5px] rounded-md font-mono transition-colors ${
                        activeTab === "preview" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground"
                      }`}
                    >
                      <Eye className="h-3 w-3" /> Preview
                    </button>
                    <button
                      onClick={() => setActiveTab("code")}
                      className={`flex items-center gap-1 px-2.5 py-1 text-[10.5px] rounded-md font-mono transition-colors ${
                        activeTab === "code" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground"
                      }`}
                    >
                      <Code className="h-3 w-3" /> Code
                    </button>
                    <button
                      onClick={() => setActiveTab("layers")}
                      className={`flex items-center gap-1 px-2.5 py-1 text-[10.5px] rounded-md font-mono transition-colors ${
                        activeTab === "layers" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground"
                      }`}
                    >
                      <Layers className="h-3 w-3" /> Layers
                    </button>
                  </div>
                </div>

                <div className="relative rounded-xl border border-dashed border-blue-500/80 bg-blue-50/20 dark:bg-blue-950/20 p-4">
                  <span className="absolute -top-2.5 right-2 rounded-md bg-blue-600 px-1.5 py-0.5 text-[9px] font-mono text-white">
                    h1 selected
                  </span>
                  <h4 className="text-sm font-semibold text-foreground">
                    Bug tracking for teams that ship fast
                  </h4>
                  <p className="mt-1.5 text-[11px] text-muted-foreground leading-snug">
                    Purpose-built for engineering teams. Triage, track, and resolve issues without slowing down.
                  </p>
                  <button className="mt-3 rounded-lg bg-primary px-3 py-1.5 text-[11px] font-medium text-primary-foreground">
                    Get started for free
                  </button>
                </div>
              </div>

              <div className="relative mt-8">
                <h3 className="text-display text-xl">Refine your design and deploy</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Iterate on your creation until you're happy with the finished product. Then ship your idea and start using it immediately.
                </p>
              </div>
            </div>
          </Tilt>

          {/* Card 3: Depend on Substrate, from end to end */}
          <Tilt strength={6}>
            <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-spectrum-3/30 blur-3xl" />

              <div className="relative rounded-2xl border border-border/80 bg-background/80 p-3 shadow-sm backdrop-blur">
                <nav className="space-y-1">
                  {[
                    { label: "Analytics", icon: BarChart3 },
                    { label: "Cloud", icon: Cloud },
                    { label: "Connectors", icon: Cpu, active: true },
                    { label: "Security", icon: Shield },
                    { label: "Agent integrations", icon: Sparkles },
                    { label: "Payments", icon: CreditCard },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isActive = activeCategory === item.label;
                    return (
                      <button
                        key={item.label}
                        onClick={() => setActiveCategory(item.label)}
                        className={`w-full flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-all ${
                          isActive
                            ? "bg-accent text-accent-foreground font-semibold shadow-xs"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/40"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="h-3.5 w-3.5" />
                          <span>{item.label}</span>
                        </div>
                        {isActive && <CheckCircle2 className="h-3.5 w-3.5 text-spectrum-4" />}
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="relative mt-8">
                <h3 className="text-display text-xl">Depend on Substrate, end to end</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Handles your end-to-end infrastructure — from hosting and authentication to payments and agentic integrations.
                </p>
              </div>
            </div>
          </Tilt>
        </div>

        {/* Row 2 — Image 3 Inspired Cards (Stripe Style) */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {/* Card 4: Monetise through agentic commerce */}
          <Tilt strength={6}>
            <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="pointer-events-none absolute -inset-10 bg-radial from-pink-500/10 to-transparent blur-2xl" />

              <div className="relative rounded-2xl border border-border/80 bg-background/90 p-4 shadow-sm backdrop-blur space-y-3">
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-none border border-border bg-muted/70 p-3 text-[12px] text-foreground">
                  I'm refreshing my wardrobe. Can you recommend some cosy, comfortable basics in size M?
                </div>

                <div className="mr-auto max-w-[90%] space-y-3">
                  <div className="rounded-2xl rounded-tl-none border border-border bg-card p-3 text-[12px] text-muted-foreground leading-snug">
                    Absolutely. Here are a few comfy essentials that pair well:
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl border border-border bg-background p-2.5">
                      <div className="aspect-square w-full rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <ShoppingBag className="h-6 w-6" />
                      </div>
                      <p className="mt-2 text-[11px] font-medium text-foreground">Deluxe Shirt</p>
                      <p className="text-[10px] text-muted-foreground">Blue · Medium</p>
                      <p className="mt-1 font-mono text-[11px] font-semibold">₹2,470.00</p>
                    </div>

                    <div className="rounded-xl border border-border bg-background p-2.5">
                      <div className="aspect-square w-full rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                        <ShoppingBag className="h-6 w-6" />
                      </div>
                      <p className="mt-2 text-[11px] font-medium text-foreground">Essential Hoodie</p>
                      <p className="text-[10px] text-muted-foreground">Navy · Medium</p>
                      <p className="mt-1 font-mono text-[11px] font-semibold">₹4,560.00</p>
                    </div>
                  </div>

                  <button className="w-full rounded-xl bg-primary py-2 font-mono text-[11px] font-medium text-primary-foreground hover:opacity-90 transition-opacity">
                    Buy now with 1-click
                  </button>
                </div>
              </div>

              <div className="relative mt-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-display text-xl">Monetise through agentic commerce</h3>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Enable AI assistants to discover, recommend, and execute transactions directly inside conversation threads.
                </p>
              </div>
            </div>
          </Tilt>

          {/* Card 5: Create a card issuing programme */}
          <Tilt strength={8}>
            <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="relative flex items-center justify-center py-6">
                {/* Iridescent Credit Card */}
                <motion.div
                  whileHover={{ scale: 1.04, rotateY: 8 }}
                  className="relative aspect-[1.58/1] w-full max-w-[280px] rounded-2xl border border-white/40 p-5 text-white shadow-2xl overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(236,72,153,0.85), rgba(168,85,247,0.85), rgba(59,130,246,0.85), rgba(249,115,22,0.85))",
                  }}
                >
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-xs opacity-50" />
                  <div className="relative flex justify-between items-start">
                    <div className="h-8 w-11 rounded-md bg-amber-200/80 border border-amber-300/60 shadow-xs" />
                    <span className="font-mono text-xs tracking-widest opacity-80">NFC )))</span>
                  </div>

                  <div className="relative mt-12 flex justify-between items-end">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest opacity-75">Substrate Corporate</p>
                      <p className="font-mono text-sm tracking-wider font-semibold">•••• 8824</p>
                    </div>
                    <span className="font-display text-lg font-bold tracking-wider">VISA</span>
                  </div>
                </motion.div>
              </div>

              <div className="relative mt-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-display text-xl">Create a card issuing programme</h3>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Issue physical and virtual cards for agent budgets, corporate expenses, and programmatic ledger payouts.
                </p>
              </div>
            </div>
          </Tilt>

          {/* Card 6: Access borderless money movement */}
          <Tilt strength={6}>
            <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="relative rounded-2xl border border-border/80 bg-background/90 p-5 shadow-sm backdrop-blur">
                <div className="relative h-40 w-full overflow-hidden rounded-xl border border-border/50 bg-card/50 flex items-center justify-center">
                  <div className="pointer-events-none absolute inset-0 bg-radial from-indigo-500/10 to-transparent" />

                  {/* Transaction node badges matching Image 3 right */}
                  <motion.div
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full border border-pink-500/40 bg-background/90 px-3 py-1 font-mono text-[10.5px] font-semibold text-foreground shadow-sm"
                  >
                    <span className="h-2 w-2 rounded-full bg-pink-500 animate-ping" />
                    $882 USDC
                  </motion.div>

                  <motion.div
                    animate={{ y: [4, -4, 4] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-5 left-4 flex items-center gap-1.5 rounded-full border border-blue-500/40 bg-background/90 px-3 py-1 font-mono text-[10.5px] font-semibold text-foreground shadow-sm"
                  >
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    $189 USDB
                  </motion.div>

                  <Globe2 className="h-24 w-24 text-muted-foreground/30 animate-spin-slow" />
                </div>
              </div>

              <div className="relative mt-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-display text-xl">Access borderless money movement</h3>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Move capital anywhere globally in sub-seconds with stablecoins, crypto rails, and automated multi-currency conversion.
                </p>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}
