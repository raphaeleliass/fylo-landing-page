/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        primaryDarkBlue: "hsl(217, 28%, 15%)",
        primaryDarkBlue_main: "hsl(218, 28%, 13%)",
        primaryDarkBlue_footer: "hsl(216, 53%, 9%)",
        primaryDarkBlue_testimonials: "hsl(219, 30%, 18%)",
        accentCyan: "hsl(176, 68%, 64%)",
        accentBlue: "hsl(198, 60%, 50%)",
        accentLightRed: "hsl(0, 100%, 63%)",
        neutralWhite: "hsl(0, 0%, 100%)",
      },
      fontSize: {
        bodycopy: "14px",
      },
      fontFamily: {
        Raleway: ["Raleway", "Arial", "Sans-Serif"],
        OpenSans: ["Open Sans", "Arial", "Sans-Serif"],
      },
      fontWeight: {
        Raleway400: "400",
        Raleway700: "700",
        OpenSans400: "400",
        OpenSans700: "700",
      },
      backgroundImage: {
        desktopCurvy: "url('/src/images/bg-curvy-desktop.svg')",
        mobileCurvy: "url('/src/images/bg-curvy-mobile.svg')",
      },
    },
  },
  plugins: [],
};
