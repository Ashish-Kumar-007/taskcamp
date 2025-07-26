module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(248, 68%, 63%)",
        secondary: "hsl(249, 62%, 66%)",
        accent: "hsl(160, 84%, 39%)",
      }
    }
  }
}