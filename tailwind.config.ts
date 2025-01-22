import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
        Roboto: ["Roboto"],
      },
      colors: {
        'custom-blue': 'rgba(35, 166, 240, 1)',
        'custom-green': 'rgba(45, 192, 113, 1)',
        'custom-dark-blue': 'rgba(37, 43, 66, 1)',
        'custom-dark-green': '#23856D',
        'custom-gray': '#BDBDBD',
        'custom-light-gray': '#FAFAFA',
        'custom-teal': 'rgba(35, 133, 109, 1)',
        'custom-light-blue-1': 'rgba(35, 166, 240, 1)',
        'custom-light-blue': '#B2E3FF',
        'custom-sky': '#8EC2F2',
        'custom-voilet': '#252B42',
      },
      backgroundColor: {
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
      },
    },
  },
  plugins: [
   
  ],
};

export default config;
