import { motion } from "motion/react";
import { Network, Database, Cpu, ShieldCheck, ArrowRight, Activity, Terminal } from "lucide-react";
import { Tilt } from "./Tilt";

export function GridlineSection() {
  return (
    <section id="gridline" className="relative border-t border-border py-28 overflow-hidden bg-card/40">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 blur-3xl">
        <div className="animate-drift absolute right-[12%] top-[20%] h-80 w-80 rounded-full bg-spectrum-2/30" />
        <div className="animate-drift absolute left-[15%] bottom-[10%] h-72 w-72 rounded-full bg-spectrum-4/20" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Core Runtime Infrastructure
            </p>
            <h2 className="text-display mt-5 text-[clamp(2.2rem,5vw,3.8rem)]">
              Gridline — <span className="spectrum-text">the unified substrate mesh.</span>
            </h2>
            <p className="mt-5 text-[16.5px] leading-relaxed text-muted-foreground">
              A single low-latency runtime connecting Kernel models, Folio workspaces, and enterprise data agents in perfect real-time sync.
            </p>
          </div>

          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-6 py-3 font-mono text-xs font-medium backdrop-blur transition-all hover:bg-accent hover:gap-3"
          >
            Read Gridline Specs <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Gridline Architecture Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <Tilt strength={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative h-full rounded-3xl border border-border/80 bg-card p-7 shadow-xs transition-all hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-background text-foreground shadow-xs">
                  <Network className="h-5 w-5 text-spectrum-1" />
                </div>
                <span className="font-mono text-[10.5px] uppercase tracking-widest text-muted-foreground">
                  Node Mesh
                </span>
              </div>

              <h3 className="text-display mt-6 text-xl">Sub-millisecond State Synchronization</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Distributed state propagation ensures every user action, agent plan, and file mutation reflects instantly across client devices.
              </p>

              <div className="mt-6 rounded-xl border border-border/60 bg-background/70 p-3 font-mono text-[11px] text-muted-foreground">
                <div className="flex justify-between items-center text-[10px]">
                  <span>LATENCY</span>
                  <span className="text-emerald-500 font-semibold">0.42ms</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[92%] rounded-full bg-spectrum-1" />
                </div>
              </div>
            </motion.div>
          </Tilt>

          <Tilt strength={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative h-full rounded-3xl border border-border/80 bg-card p-7 shadow-xs transition-all hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-background text-foreground shadow-xs">
                  <Database className="h-5 w-5 text-spectrum-4" />
                </div>
                <span className="font-mono text-[10.5px] uppercase tracking-widest text-muted-foreground">
                  Storage Layer
                </span>
              </div>

              <h3 className="text-display mt-6 text-xl">Zero-Knowledge Context Vault</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Local-first encrypted memory indices. Your private keys stay on device while model context streams securely over end-to-end TLS.
              </p>

              <div className="mt-6 rounded-xl border border-border/60 bg-background/70 p-3 font-mono text-[11px] text-muted-foreground">
                <div className="flex justify-between items-center text-[10px]">
                  <span>ENCRYPTION</span>
                  <span className="text-primary font-semibold">AES-256-GCM</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-[10.5px] text-emerald-500">
                  <ShieldCheck className="h-3.5 w-3.5" /> Hardware Enclave Verified
                </div>
              </div>
            </motion.div>
          </Tilt>

          <Tilt strength={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative h-full rounded-3xl border border-border/80 bg-card p-7 shadow-xs transition-all hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-background text-foreground shadow-xs">
                  <Terminal className="h-5 w-5 text-spectrum-3" />
                </div>
                <span className="font-mono text-[10.5px] uppercase tracking-widest text-muted-foreground">
                  Agent Pipeline
                </span>
              </div>

              <h3 className="text-display mt-6 text-xl">Deterministic Execution Canvas</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Multi-agent DAG orchestrator capable of parallel tool calling, AST diffing, and automated rollback safety guarantees.
              </p>

              <div className="mt-6 rounded-xl border border-border/60 bg-background/70 p-3 font-mono text-[11px] text-muted-foreground">
                <div className="flex justify-between items-center text-[10px]">
                  <span>THROUGHPUT</span>
                  <span className="text-spectrum-3 font-semibold">14,200 ops/s</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-[10.5px] text-muted-foreground">
                  <Activity className="h-3.5 w-3.5 text-spectrum-3 animate-pulse" /> Continuous Health Check
                </div>
              </div>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}
