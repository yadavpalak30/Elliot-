/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#2b2b2b",
          "200": "#262626",
          "300": "#191818",
          "400": "#0f0f0f",
          "500": "#0c0c0c",
          "600": "rgba(0, 0, 0, 0.5)",
        },
        "purple-50": "#f4f3ff",
        "purple-25": "#fafaff",
        white: "#fff",
        "g-25": "#fcfcfd",
        "g-50": "#f9fafb",
        "w-300": "#fec84b",
        dimgray: {
          "100": "#4d4a4a",
          "200": "#524242",
          "300": "#565353",
        },
        "g-100": "#f2f4f7",
        saddlebrown: "#533c06",
        black: "#000",
        "w-25": "#fffcf5",
      },
      spacing: {},
      fontFamily: {
        "text-sm-regular": "Inter",
        "akira-expanded": "'Akira Expanded'",
      },
      borderRadius: {
        "13xl": "32px",
        "7xs-6": "5.6px",
      },
    },
    fontSize: {
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      sm: "14px",
      "41xl": "60px",
      "17xl": "36px",
      base: "16px",
      xs: "12px",
      "5xl": "24px",
      lgi: "19px",
      "3xs": "10px",
      xl: "20px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
