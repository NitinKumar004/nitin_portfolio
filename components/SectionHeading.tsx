"use client";

import { motion } from "framer-motion";

interface Props {
  num: string;
  file: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  num,
  file,
  title,
  description,
  align = "left",
}: Props) {
  const wrap = align === "center" ? "text-center" : "text-left";
  return (
    <div className={"mb-10 " + wrap}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="font-mono text-[11px] text-fg-faint flex items-center gap-2"
        style={{ justifyContent: align === "center" ? "center" : undefined }}
      >
        <span className="text-lime">{num}</span>
        <span className="h-px w-6 bg-line2" />
        <span className="text-fg-dim">{file}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="mt-2 font-display tracking-tighter text-2xl sm:text-3xl lg:text-[34px] text-fg"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className={
            "mt-3 text-[13.5px] text-fg-muted leading-relaxed " +
            (align === "center" ? "max-w-xl mx-auto" : "max-w-2xl")
          }
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
