"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, FileJson, Cpu, GitBranch, FileCode2, Braces, Award, Mail, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

type Link = { href: string; label: string; ext: string; icon: any };

const links: Link[] = [
  { href: "#about",        label: "about",        ext: "json", icon: FileJson },
  { href: "#skills",       label: "skills",       ext: "yml",  icon: Cpu },
  { href: "#experience",   label: "experience",   ext: "log",  icon: GitBranch },
  { href: "#projects",     label: "projects",     ext: "tsx",  icon: FileCode2 },
  { href: "#opensource",   label: "open-source",  ext: "md",   icon: Braces },
  { href: "#achievements", label: "awards",       ext: "txt",  icon: Award },
  { href: "#resume",       label: "resume",       ext: "pdf",  icon: FileText },
  { href: "#contact",      label: "contact",      ext: "sh",   icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ["hero", ...links.map((l) => l.href.slice(1))];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 160 && rect.bottom >= 160) {
          setActive(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-3"
      )}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className={cn(
          "rounded-lg border transition-all duration-500",
          scrolled
            ? "bg-ink-50/95 border-line2 backdrop-blur-xl shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]"
            : "bg-ink-100/70 border-line backdrop-blur-md"
        )}>
          {/* Title bar */}
          <div className="flex items-center justify-between px-3 py-1.5 border-b border-line">
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="w-5 h-5 grid place-items-center rounded bg-lime/15 border border-lime/40">
                <Terminal className="w-3 h-3 text-lime" strokeWidth={2.5} />
              </div>
              <div className="flex items-baseline gap-1 font-mono text-[11.5px]">
                <span className="text-fg-dim">~/</span>
                <span className="text-fg">nitin-kumar</span>
                <span className="text-fg-faint hidden sm:inline">/portfolio</span>
              </div>
            </a>

            <div className="flex items-center gap-3 text-fg-dim font-mono text-[10.5px]">
              <span className="hidden sm:inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-lime animate-tick" />
                <span className="text-fg-muted">connected</span>
              </span>
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen(!open)}
                className="md:hidden p-1 rounded hover:bg-white/5 transition"
              >
                {open ? <X size={14} /> : <Menu size={14} />}
              </button>
            </div>
          </div>

          {/* File tabs */}
          <nav className="hidden md:flex items-stretch overflow-x-auto">
            {links.map((l, i) => {
              const isActive = active === l.href.slice(1);
              const Icon = l.icon;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "relative shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-[11.5px] font-mono border-r border-line transition-colors",
                    isActive
                      ? "bg-ink text-fg"
                      : "text-fg-muted hover:text-fg hover:bg-white/[0.025]"
                  )}
                >
                  <Icon size={11} className={isActive ? "text-lime" : "text-fg-faint"} strokeWidth={2} />
                  <span>{l.label}</span>
                  <span className={cn("text-[10px]", isActive ? "text-lime" : "text-fg-faint")}>.{l.ext}</span>
                  {isActive && (
                    <motion.span
                      layoutId="tab-underline"
                      className="absolute left-0 right-0 -bottom-px h-[1.5px] bg-lime"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
            <div className="flex-1" />
            <a href="#contact" className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-[11.5px] font-mono text-lime hover:bg-lime/5 transition border-l border-line">
              <span className="text-fg-faint">$</span>
              <span>./hire-me</span>
            </a>
          </nav>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="md:hidden mt-2 panel p-1"
            >
              {links.map((l) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded text-[12px] text-fg/90 hover:bg-white/5 transition font-mono"
                  >
                    <Icon size={12} className="text-lime" />
                    <span>{l.label}</span>
                    <span className="text-fg-faint">.{l.ext}</span>
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
