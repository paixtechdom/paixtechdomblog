/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors :{ 
        "primary": "rgba(0,0,24)",
        "secondary": "rgba(0,0,10)",
        "orange": "#F29B31",
        "tertiary": "#F2210B",
        "black": "rgba(0,0,0)",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["night"]
  }
}

