module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xxs: '0.6875rem', // 11px
      xs: '0.8125rem', // 13px
      sm: '0.875rem', // 14px
      base: ['0.9375rem', '1.375rem'], // 15px
      xl: '1.125rem', // 18 px
      '2xl': ['1.375rem', '1.5rem'], // 22px
      '3xl': ['1.5rem', '1.375rem'], // 24px
      '4xl': [
        '2rem',
        {
          lineHeight: '2rem',
          letterSpacing: '-0.02em',
        },
      ], // 32px
      '5xl': '3.052rem',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#23272E',
        slateLavender: '#8B909A',
        pearlWhite: '#F5F5F5',
        mistWhite: '#F3F4F8',
        emeraldGreen: '#1EB564',
        lushMeadow: '#28C76F',
        vividBlue: '#0F60FF',
        white: '#ffffff',
        goldenSun: '#FFC600',
        crimsonCoral: '#EA5455',
        lavenderMist: '#E9E7FD',
        gradientBlue: 'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #7367F0',
        blueGem: '#7367F0',
        lavenderGray: '#DBDADE',
      },
      screens: {
        sm: '640px',
        md: '768px',
        'md-2': '900px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        sans: ['Public Sans'],
      },
    },
  },
  plugins: [],
};
