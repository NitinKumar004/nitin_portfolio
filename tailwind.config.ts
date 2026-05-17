import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tokyo Night-inspired ink scale
        ink: {
          DEFAULT: "#0f1117",
          50: "#13151c",
          100: "#181a23",
          200: "#1f222d",
          300: "#262a36",
          400: "#2e3344",
        },
        line: "rgba(192, 202, 245, 0.07)",
        line2: "rgba(192, 202, 245, 0.12)",
        line3: "rgba(192, 202, 245, 0.18)",
        fg: {
          DEFAULT: "#c0caf5",        // soft blue-white (TN foreground)
          muted: "#a9b1d6",
          dim: "#7a82af",
          faint: "#565f89",
        },
        // Single accent — soft terminal green
        lime: {
          DEFAULT: "#9ece6a",        // TN green
          soft: "#b9e088",
          deep: "#73a247",
          glow: "rgba(158, 206, 106, 0.35)",
        },
        warm: "#ff9e64",             // TN orange — rare use only
        syntax: {
          keyword: "#bb9af7",        // TN purple
          string: "#9ece6a",         // TN green
          number: "#ff9e64",         // TN orange
          fn: "#7aa2f7",             // TN blue
          var: "#c0caf5",
          type: "#2ac3de",           // TN cyan
          comment: "#565f89",
          punct: "#7a82af",
          prop: "#7dcfff",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "2xs": ["10px", { lineHeight: "14px" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 28s linear infinite",
        "marquee": "marquee 40s linear infinite",
        "blink": "blink 1.1s step-end infinite",
        "shine": "shine 3s linear infinite",
        "tick": "tick 1.6s ease-in-out infinite",
        "drift": "drift 22s ease-in-out infinite",
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "blink": {
          "50%": { opacity: "0" },
        },
        "shine": {
          "0%": { "background-position": "200% 0" },
          "100%": { "background-position": "-200% 0" },
        },
        "tick": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        "drift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(20px, -10px)" },
          "66%": { transform: "translate(-15px, 8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
