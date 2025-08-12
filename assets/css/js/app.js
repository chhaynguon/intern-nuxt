import './assets/tailwind.css'
module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite', // Example: Slow spin
      },
      animationDuration: {
        '3000': '3000ms', // Example: 3 seconds
      },
    },
  },
}