"use client";

import { useRef, MouseEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Star,
  Box,
  Activity,
  Image as ImageIcon,
  MapPin,
  Archive,
  Github,
  Download,
  Zap,
  DollarSign,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

const visuals: Record<string, React.ElementType> = {
  CloudEmu: Box,
  "FitAI Tracker": Activity,
  "Smart Catalogs": ImageIcon,
  RozgarSite: MapPin,
  "Smart Backup & Compression": Archive,
};

function useTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * 3.5;
    const ry = (px - 0.5) * 4.5;
    el.style.transform = `perspective(1400px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    el.style.setProperty("--x", `${px * 100}%`);
    el.style.setProperty("--y", `${py * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1400px) rotateX(0) rotateY(0)";
  };
  return { ref, onMove, onLeave };
}

function CardChrome({ title, sub = ".tsx" }: { title: string; sub?: string }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-line">
      <span className="w-2 h-2 rounded-full bg-fg-faint/40" />
      <span className="w-2 h-2 rounded-full bg-fg-faint/40" />
      <span className="w-2 h-2 rounded-full bg-fg-faint/40" />
      <span className="ml-2 font-mono text-[10.5px] text-fg-faint">{title}</span>
      <span className="ml-auto font-mono text-[10px] text-fg-faint">{sub}</span>
    </div>
  );
}

// ============================================================
//   FEATURED CLOUDEMU CARD — rich content, real dev vibe
// ============================================================
function FeaturedCloudEmu() {
  const tilt = useTilt();
  const p = projects.find((x) => x.title === "CloudEmu")!;

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="md:col-span-4 md:row-span-2"
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMove}
        onMouseLeave={tilt.onLeave}
        className="tilt-card h-full"
        style={{
          background:
            "radial-gradient(700px circle at var(--x, 50%) var(--y, 50%), rgba(158, 206, 106, 0.07), transparent 45%)",
        }}
      >
        <div className="window h-full flex flex-col card-hover">
          <CardChrome title="cloudemu" />
          <div className="p-5 sm:p-6 grid lg:grid-cols-[1.1fr_1fr] gap-6 flex-1">
            {/* LEFT */}
            <div className="flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-lime/10 border border-lime/30 text-lime">
                    <Star size={9} fill="currentColor" /> featured
                  </span>
                  <span className="font-mono text-[10.5px] text-fg-faint uppercase tracking-widest">
                    {p.subtitle}
                  </span>
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open CloudEmu on GitHub"
                  className="shrink-0 w-8 h-8 rounded-md grid place-items-center border border-line2 text-fg-muted hover:text-lime hover:border-lime/40 hover:bg-lime/[0.05] hover:rotate-45 transition duration-300"
                >
                  <ArrowUpRight size={14} />
                </a>
              </div>

              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block font-display tracking-tighter text-3xl sm:text-[34px] text-fg leading-none hover:text-lime transition"
              >
                CloudEmu
              </a>
              <p className="mt-2 font-mono text-[11.5px] text-fg-muted">
                <span className="text-fg-faint">// </span>
                zero-cost cloud emulation · sdk-compatible http server
              </p>

              <p className="mt-3 text-[13px] text-fg-muted leading-relaxed max-w-md">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-1.5 py-0.5 rounded text-[10.5px] font-mono bg-white/[0.025] border border-line text-fg-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Stat grid */}
              <div className="mt-auto pt-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
                <Stat icon={Download} label="adopted by" value="1000+" unit="devs" emphasis />
                <Stat icon={Box}      label="services"  value="10"    unit="emulated" />
                <Stat icon={Zap}      label="boot"      value="~10"   unit="ms" />
                <Stat icon={DollarSign} label="cost"    value="$0"    unit="zero-cost" />
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-3 min-w-0">
              {/* Mini terminal */}
              <div className="window">
                <div className="window-titlebar !py-1.5">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                  <span className="ml-1.5 text-fg-faint">install.sh</span>
                  <span className="ml-auto text-[9.5px] text-fg-faint">bash</span>
                </div>
                <div className="px-3.5 py-3 font-mono text-[11.5px] leading-relaxed">
                  <div className="flex items-start gap-1.5">
                    <span className="text-lime select-none">$</span>
                    <span className="text-fg">go get</span>
                    <span className="text-fg-muted">github.com/cloudemu/cloudemu</span>
                  </div>
                  <div className="pl-3 text-fg-dim">
                    <span className="text-lime">✓</span> downloaded · v1.4.2
                  </div>
                  <div className="mt-1.5 flex items-start gap-1.5">
                    <span className="text-lime select-none">$</span>
                    <span className="text-fg">./cloudemu --start</span>
                  </div>
                  <div className="pl-3 text-fg-dim">
                    <span className="text-warm">▸</span> s3, sqs, sns, dynamo …
                    <br />
                    <span className="text-lime">✓</span> ready on :8080
                    <span className="text-fg-faint"> (8.4ms)</span>
                  </div>
                </div>
              </div>

              {/* Code preview */}
              <div className="window flex-1">
                <div className="window-titlebar !py-1.5">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                  <span className="ml-1.5 text-fg-faint">main.go</span>
                  <span className="ml-auto text-[9.5px] text-fg-faint">go</span>
                </div>
                <pre className="px-3.5 py-3 font-mono text-[11.5px] leading-relaxed overflow-x-auto">
                  <code>
                    <span className="tok-cmt">// spin up s3 in 10ms{"\n"}</span>
                    <span className="tok-key">import</span>{" "}
                    <span className="tok-str">&quot;cloudemu&quot;</span>{"\n\n"}
                    <span className="tok-var">emu</span>{" "}
                    <span className="tok-pn">:=</span>{" "}
                    <span className="tok-prop">cloudemu</span>
                    <span className="tok-pn">.</span>
                    <span className="tok-fn">New</span>
                    <span className="tok-pn">(</span>
                    <span className="tok-str">&quot;aws.s3&quot;</span>
                    <span className="tok-pn">)</span>{"\n"}
                    <span className="tok-var">emu</span>
                    <span className="tok-pn">.</span>
                    <span className="tok-fn">Start</span>
                    <span className="tok-pn">()</span>
                  </code>
                </pre>
              </div>

              {/* Adoption chart */}
              <div className="panel-flat p-3">
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-fg-faint">adoption · 12 weeks</span>
                  <span className="text-lime">+1000 devs</span>
                </div>
                <div className="mt-2 grid grid-cols-12 gap-0.5 items-end h-10">
                  {[3, 4, 5, 5, 6, 7, 8, 9, 11, 13, 16, 20].map((v, j) => (
                    <div
                      key={j}
                      className="rounded-sm transition-colors"
                      style={{
                        height: `${(v / 20) * 100}%`,
                        background:
                          j === 11
                            ? "rgba(158, 206, 106, 1)"
                            : `rgba(158, 206, 106, ${0.18 + (v / 20) * 0.55})`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function Stat({
  icon: Icon, label, value, unit, emphasis,
}: { icon: any; label: string; value: string; unit: string; emphasis?: boolean }) {
  return (
    <div className={"panel-flat px-2.5 py-2 " + (emphasis ? "border-lime/25" : "")}>
      <div className="flex items-center gap-1 font-mono text-[9.5px] text-fg-faint uppercase tracking-wider">
        <Icon size={9} className={emphasis ? "text-lime" : "text-fg-dim"} />
        {label}
      </div>
      <div className="mt-0.5 flex items-baseline gap-1">
        <span className={"font-display tracking-tighter text-[18px] " + (emphasis ? "text-lime" : "text-fg")}>
          {value}
        </span>
        <span className="font-mono text-[9.5px] text-fg-faint">{unit}</span>
      </div>
    </div>
  );
}

// ============================================================
//   REGULAR CARD
// ============================================================
function ProjectCard({ p, idx }: { p: typeof projects[number]; idx: number }) {
  const tilt = useTilt();
  const Vis = visuals[p.title] ?? Box;
  const slug = p.title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "");

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: idx * 0.06 }}
      className="md:col-span-2"
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMove}
        onMouseLeave={tilt.onLeave}
        className="tilt-card h-full"
        style={{
          background:
            "radial-gradient(500px circle at var(--x, 50%) var(--y, 50%), rgba(158, 206, 106, 0.06), transparent 45%)",
        }}
      >
        <div className="window h-full flex flex-col card-hover">
          <CardChrome title={slug} />
          <div className="relative p-4 sm:p-5 flex flex-col flex-1">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="font-mono text-[10px] text-fg-faint uppercase tracking-widest">
                  {p.subtitle}
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1.5 inline-block font-display tracking-tighter text-xl sm:text-[22px] text-fg leading-tight hover:text-lime transition"
                >
                  {p.title}
                </a>
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                aria-label={"Open " + p.title}
                className="shrink-0 w-8 h-8 rounded-md grid place-items-center border border-line2 text-fg-muted hover:text-lime hover:border-lime/40 hover:bg-lime/[0.05] hover:rotate-45 transition duration-300"
              >
                <ArrowUpRight size={14} />
              </a>
            </div>

            <p className="mt-2.5 text-[12.5px] text-fg-muted leading-relaxed">
              {p.description}
            </p>

            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-1.5 py-0.5 rounded text-[10.5px] font-mono bg-white/[0.025] border border-line text-fg-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-4 flex items-end justify-between gap-3 border-t border-line">
              <div className="pt-3">
                <div className="font-mono text-[10px] text-fg-faint uppercase tracking-widest">
                  {p.metricLabel}
                </div>
                <div className="mt-0.5 font-display tracking-tighter text-xl text-lime">
                  {p.metric}
                </div>
              </div>
              <Vis size={32} className="text-lime/20 mt-3" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ============================================================
//   SECTION
// ============================================================
export default function Projects() {
  const others = projects.filter((p) => !p.featured);
  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          num="// 04"
          file="projects.tsx"
          title="Selected work."
          description="Open-source libraries, full-stack apps, AI tools, and command-line utilities."
        />

        <div className="grid grid-cols-1 md:grid-cols-6 gap-3 auto-rows-fr">
          <FeaturedCloudEmu />
          {others.map((p, i) => (
            <ProjectCard key={p.title} p={p} idx={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
