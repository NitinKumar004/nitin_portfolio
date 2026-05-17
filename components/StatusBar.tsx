"use client";

import { useEffect, useState } from "react";
import { GitBranch, GitCommit, Check, Cloud, Wifi, Clock } from "lucide-react";

export default function StatusBar() {
  const [time, setTime] = useState<string>("");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = d.getHours().toString().padStart(2, "0");
      const mm = d.getMinutes().toString().padStart(2, "0");
      const ss = d.getSeconds().toString().padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 hidden sm:flex items-center justify-between px-4 py-1 text-[10.5px] font-mono bg-ink-50/95 backdrop-blur-md border-t border-line text-fg-muted">
      <div className="flex items-center gap-4">
        <span className="inline-flex items-center gap-1.5">
          <GitBranch size={10} className="text-lime" />
          <span className="text-fg">main</span>
        </span>
        <span className="inline-flex items-center gap-1.5 text-fg-dim">
          <GitCommit size={10} />
          a3f9c2d
        </span>
        <span className="hidden md:inline-flex items-center gap-1.5">
          <Check size={10} className="text-lime" />
          <span>0 problems</span>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden lg:inline-flex items-center gap-1.5">
          <span className="text-fg-faint">Ln</span>
          <span className="text-fg-dim tabular-nums">{Math.min(99, Math.floor(mouse.y / 12)).toString().padStart(2, "0")}</span>
          <span className="text-fg-faint">Col</span>
          <span className="text-fg-dim tabular-nums">{Math.min(99, Math.floor(mouse.x / 12)).toString().padStart(2, "0")}</span>
        </span>
        <span className="hidden md:inline-flex items-center gap-1.5">
          <Cloud size={10} />
          UTF-8
        </span>
        <span className="hidden md:inline-flex items-center gap-1.5">
          <Wifi size={10} className="text-lime" />
          online
        </span>
        <span className="inline-flex items-center gap-1.5 tabular-nums">
          <Clock size={10} />
          {time}
        </span>
      </div>
    </div>
  );
}
