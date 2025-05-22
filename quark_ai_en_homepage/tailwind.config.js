/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // 自定義顏色
        quark: {
          black: {
            DEFAULT: "#0A0E17",
            50: "#F2F3F5",
            100: "#E5E7EB",
            200: "#CBD0D9",
            300: "#9AA2B1",
            400: "#6B7280",
            500: "#4B5563",
            600: "#374151",
            700: "#1F2937",
            800: "#111827",
            900: "#030712",
          },
          blue: {
            DEFAULT: "#0099FF",
            50: "#E6F7FF",
            100: "#CCF0FF",
            200: "#99E0FF",
            300: "#66D1FF",
            400: "#33C1FF",
            500: "#0099FF",
            600: "#007ACC",
            700: "#005C99",
            800: "#003D66",
            900: "#001F33",
          },
          cyan: {
            DEFAULT: "#00E5FF",
            50: "#E6FCFF",
            100: "#CCF9FF",
            200: "#99F3FF",
            300: "#66EDFF",
            400: "#33E7FF",
            500: "#00E5FF",
            600: "#00B7CC",
            700: "#008999",
            800: "#005B66",
            900: "#002D33",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            opacity: 1,
            boxShadow: "0 0 20px rgba(0, 153, 255, 0.7)"
          },
          "50%": { 
            opacity: 0.7,
            boxShadow: "0 0 40px rgba(0, 153, 255, 0.9)"
          },
        },
        "gradient-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "network-pulse": {
          "0%": { 
            opacity: 0.3,
            transform: "scale(0.95)"
          },
          "50%": { 
            opacity: 1,
            transform: "scale(1)"
          },
          "100%": { 
            opacity: 0.3,
            transform: "scale(0.95)"
          },
        },
        "text-shimmer": {
          "0%": { 
            backgroundPosition: "-200% 0"
          },
          "100%": { 
            backgroundPosition: "200% 0"
          },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "gradient-flow": "gradient-flow 15s ease infinite",
        "network-pulse": "network-pulse 4s ease-in-out infinite",
        "text-shimmer": "text-shimmer 8s ease-in-out infinite"
      },
      fontFamily: {
        sans: ["Inter", "Source Han Sans TC", "思源黑體", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
