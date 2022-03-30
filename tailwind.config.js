module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main": "url('images/1633867537922.jpg')",
        "sidebar1": "url('images/-folka-.png')",
        "logo2": "url('images/folkaLogo2.png')",
        "logo2yellow": "url('images/folkaLogo2yellow.png')",
        "logo2invert": "url('images/folkaLogo2invert.png')",
        "mainBanner": "url('images/mainBanner.png')",
        "banner1": "url('images/banner1.jpg')",
        "banner2": "url('images/banner2.jpg')",
        "banner3": "url('images/banner3.jpg')",
      },
      fontFamily: {
        tabloid: ["TABLOID"]
      },
      animation: {
        'pulse-slow': 'pulse 6s linear infinite',
      }
    },
  },
  plugins: [],
}