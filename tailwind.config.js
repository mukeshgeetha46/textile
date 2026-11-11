/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-secondary-fixed": "#271900",
        "surface-dim": "#dcd9d9",
        "on-primary-fixed": "#3f0018",
        "on-surface-variant": "#554245",
        "on-surface": "#1b1c1c",
        "secondary-fixed": "#ffdeaa",
        "on-error": "#ffffff",
        "secondary-container": "#ffc55f",
        "on-tertiary-container": "#98b6a7",
        "on-primary-container": "#ff8ba8",
        "surface-variant": "#e4e2e1",
        "on-tertiary-fixed-variant": "#314c40",
        "on-error-container": "#93000a",
        "primary": "#5c0427",
        "surface-container": "#f0eded",
        "surface": "#fcf9f8",
        "outline": "#887275",
        "surface-container-low": "#f6f3f2",
        "background": "#fcf9f8",
        "on-tertiary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "on-secondary-fixed-variant": "#5f4100",
        "secondary": "#7d5700",
        "inverse-on-surface": "#f3f0f0",
        "primary-fixed": "#ffd9df",
        "on-tertiary-fixed": "#042016",
        "surface-container-highest": "#e4e2e1",
        "on-background": "#1b1c1c",
        "surface-tint": "#9f3c59",
        "surface-bright": "#fcf9f8",
        "tertiary-fixed-dim": "#afcdbd",
        "tertiary": "#173127",
        "inverse-primary": "#ffb1c2",
        "error": "#ba1a1a",
        "error-container": "#ffdad6",
        "on-primary-fixed-variant": "#802442",
        "surface-container-high": "#eae7e7",
        "inverse-surface": "#303030",
        "on-secondary-container": "#755100",
        "on-primary": "#ffffff",
        "primary-container": "#7a1f3d",
        "tertiary-container": "#2d483c",
        "on-secondary": "#ffffff",
        "outline-variant": "#dac0c4",
        "tertiary-fixed": "#cbead9",
        "primary-fixed-dim": "#ffb1c2",
        "secondary-fixed-dim": "#f5bd58",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        "margin": "3rem",
        "gutter-mobile": "1rem",
        "gutter": "1.5rem",
        "space-xxl": "4rem",
        "margin-mobile": "1.25rem",
        "space-xl": "2.5rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-lg": "1.5rem",
        "space-md": "1rem",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        "body-sm": ["Inter", "sans-serif"],
        "headline-sm": ["Playfair Display", "serif"],
        "title-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "headline-md": ["Playfair Display", "serif"],
        "headline-lg-mobile": ["Playfair Display", "serif"],
        "label-sm": ["Inter", "sans-serif"],
        "price-md": ["Inter", "sans-serif"],
        "headline-lg": ["Playfair Display", "serif"],
        "body-lg": ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "price-lg": ["Playfair Display", "serif"],
        "title-md": ["Inter", "sans-serif"],
        "display-mobile": ["Playfair Display", "serif"],
      },
      fontSize: {
        display: [
          "56px",
          {
            lineHeight: "64px",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        "body-sm": [
          "13px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
        "headline-sm": [
          "22px",
          {
            lineHeight: "28px",
            fontWeight: "600",
          },
        ],
        "title-lg": [
          "18px",
          {
            lineHeight: "26px",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
        "body-md": [
          "15px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        "headline-md": [
          "28px",
          {
            lineHeight: "36px",
            fontWeight: "500",
          },
        ],
        "headline-lg-mobile": [
          "30px",
          {
            lineHeight: "36px",
            letterSpacing: "0em",
            fontWeight: "500",
          },
        ],
        "label-sm": [
          "11px",
          {
            lineHeight: "14px",
            letterSpacing: "0.08em",
            fontWeight: "600",
          },
        ],
        "price-md": [
          "16px",
          {
            lineHeight: "22px",
            fontWeight: "600",
          },
        ],
        "headline-lg": [
          "40px",
          {
            lineHeight: "48px",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        "body-lg": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "400",
          },
        ],
        "label-md": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0.06em",
            fontWeight: "600",
          },
        ],
        "price-lg": [
          "26px",
          {
            lineHeight: "32px",
            fontWeight: "600",
          },
        ],
        "title-md": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "600",
          },
        ],
        "display-mobile": [
          "38px",
          {
            lineHeight: "44px",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
      },
    },
  },
  plugins: [],
}

