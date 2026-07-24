// Tailwind Play CDN theme configuration.
// Loaded right after the Tailwind CDN script so `tailwind` is defined.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: { 950: '#070718', 900: '#0F0F23', 800: '#13132B', 700: '#1A1A38' },
        primary: { DEFAULT: '#1E1B4B', 600: '#2A2670', 400: '#4C46B6' },
        secondary: { DEFAULT: '#312E81', 400: '#5B57C9' },
        gold: { DEFAULT: '#CA8A04', 400: '#E0A622', 300: '#F0C75B', 200: '#FBE192' },
      },
      fontFamily: {
        display: ['Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"General Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(202, 138, 4, 0.25)',
        'glow-lg': '0 0 80px rgba(202, 138, 4, 0.35)',
        'glow-cool': '0 0 60px rgba(76, 70, 182, 0.35)',
      },
      backgroundImage: {
        'grid-faint': "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
};
