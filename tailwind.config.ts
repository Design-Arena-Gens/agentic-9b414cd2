import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#0a0e14',
          text: '#00ff41',
          accent: '#00d9ff',
          warning: '#ffaa00',
          error: '#ff0055',
          dim: '#33ff66'
        }
      },
      fontFamily: {
        mono: ['Courier New', 'monospace']
      }
    },
  },
  plugins: [],
};
export default config;
