import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light mode
        bg1: "#FFFFFF",
        bg2: "#F0F2F5",
        navIcons: "#65676B90",
        BlackIcons: "#000000",
        postText1: "#050505",
        postText2: "#65676B",
        menuIcons: "#00337C",
        input: "#F0F2F5",
        main1: "#5C8121",
        main2: "#00337C",
        // Light hover
        mainHover: "#E4E6E9",
        inputHover: "#E0E0E0", // Added light gray hover
        bg2Hover: "#E1E5E8",
        main1Hover: "#D6EBCF", // Added light green hover
        main2Hover: "#CCE0FF", // Added light blue hover
        // Dark mode
        bg1Dark: "#242526",
        bg2Dark: "#18191A",
        navIconsDark: "#B8BBBF",
        BlackIconsDark: "#E7E9ED",
        postText1Dark: "#E4E6EB",
        postText2Dark: "#A8ABAF",
        inputDark: "#3A3B3C",
        main1Dark: "#2E7D32", // Dark green
        main2Dark: "#1565C0", // Dark blue
        // Dark hover
        mainHoverDark: "#2C2C2C",
        bg2DarkHover: "#18191A",
        main1HoverDark: "#4CAF50", // Brighter green hover
        main2HoverDark: "#204F8C", // Darker blue hover
      },
    },
  },
  plugins: [],
};

export default config;
