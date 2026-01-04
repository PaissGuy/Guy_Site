import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        megrim: ['var(--font-megrim)', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          50: '#F5F7F4',
          100: '#E8EDE6',
          200: '#D1DCD0',
          300: '#B5C4B3',
          400: '#8FA38B',
          500: '#6B8268',  // Primary sage green
          600: '#5A7057',  // Hover state
          700: '#4A5D48',
          800: '#3D4D3B',
          900: '#2D3A2B',
          DEFAULT: '#6B8268',
          foreground: '#FFFFFF',
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Dark sage theme colors
        sage: {
          50: '#F5F7F4',
          100: '#E8EDE6',
          200: '#D1DCD0',
          300: '#B5C4B3',
          400: '#8FA38B',
          500: '#6B8268',
          600: '#5A7057',
          700: '#4A5D48',
          800: '#3D4D3B',
          900: '#2D3A2B',
        },
        forest: {
          50: '#F0F4F1',
          100: '#DCE5DE',
          200: '#B9CCBD',
          300: '#8FAA94',
          400: '#6B8A72',
          500: '#4F6B54',
          600: '#3F5644',
          700: '#334536',
          800: '#283529',
          900: '#1D271E',
        },
        moss: {
          50: '#F4F6F3',
          100: '#E5EAE3',
          200: '#CCD6C9',
          300: '#A9BAA5',
          400: '#839880',
          500: '#637861',
          600: '#4E5F4D',
          700: '#404D3F',
          800: '#353F34',
          900: '#2A322A',
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "4xl": "2rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config