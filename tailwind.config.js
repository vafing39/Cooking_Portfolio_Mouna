/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF4F0',
          100: '#FFE8E0',
          200: '#FFD1C1',
          300: '#FFB397',
          400: '#FF916D',
          500: '#FF6B35',
          600: '#E55A2B',
          700: '#CC4A21',
          800: '#B33A17',
          900: '#992B0D'
        },
        secondary: {
          50: '#F6F9F6',
          100: '#EDF3ED',
          200: '#D4E6D4',
          300: '#B8D7B8',
          400: '#9BC89B',
          500: '#8FBC8F',
          600: '#7FA67F',
          700: '#6F906F',
          800: '#5F7A5F',
          900: '#4F644F'
        },
        accent: {
          50: '#FDF6F0',
          100: '#FAEEE0',
          200: '#F4D6B8',
          300: '#EDBF90',
          400: '#E7A868',
          500: '#D2691E',
          600: '#BD5E1A',
          700: '#A85316',
          800: '#934812',
          900: '#7E3D0E'
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717'
        }
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}