/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Beaver: "#9e7f66",
        CodGray: "#111111",
        Mirage: "#17192b",
        EbonyClay: "#242b37",
        ShuttleGray: "#5c6779",
        GrayText: "#4C4C4C",
        PureWhite: "#fff",
        ErrorRed: "#B54949",
        BorderColor: "#8E8E8E",
      },
      fontFamily: {
        LeagueSpartan: ["League Spartan"],
      },
    },
    screens: {
      mobile: "375px",
      tablet: " 768px",
      desktop: "1440px",
    },
    backgroundImage: {
      footerImage: "url(./src/assets/images/homepage/ready-bg-mobile.jpg)",
    },
  },
  plugins: [],
};
