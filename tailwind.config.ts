import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'custom': '800px', 
        'isPC':'800px' 
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInFromLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInFromRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bouncePulse: {
          '0%, 100%': { transform: 'translateY(-25%)', opacity: '1' },
          '50%': { transform: 'translateY(0)', opacity: '0.5' },
        },
        slide: {
          '0%': { transform: 'translateX(-190%)' }, // 左から出現
          '50%': { transform: 'translateX(190%)' }, // 右に完全に隠れる
          '100%': { transform: 'translateX(190%)' }, // そのまま保持
        },

      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out',
        fadeInDown: 'fadeInDown 1s ease-out',
        slideInFromLeft: 'slideInFromLeft 1.2s ease-out',
        slideInFromRight: 'slideInFromRight 1.2s ease-out',
        bouncePulse: 'bouncePulse 1s infinite',
        'slide-loop': 'slide 10s linear infinite',
      },
      fontFamily: {
        'japanese': ['Noto Sans JP', 'ヒラギノ角ゴシック', 'Hiragino Kaku Gothic ProN', 'メイリオ', 'Meiryo', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      letterSpacing: {
        wider: '0.1em',
        widest: '0.2em',
        lwidest: '0.4em', // カスタム数値を追加
      },
      colors: {
        customBlue: '#1E3A8A',
        mikuBlue: '#039393',
        mikuPink: '#e12885',
        mikuBlack: '#373b3e',
        mikuGray: '#bec8d1',
        mikuGreen: '#137a7f',
        mikuCyan: '#c3e5e7',
        mikuYellow: '#fffeec',
        maitaHoverPurple: '#9b509d',
        maitaPurple: '#b960bc',
        polarisColorFirst: '#41404D',
        polarisColorSecond: '#A6AFBC',
        polarisColorThird: '#F1F2F5',
        polarisColorFourth: '#FFF0EA',
        polarisColorFifth: '#F95F66',
        polarisColorSixth: '#FDB571',
        polarisColorSeventh: '#FFE783',
        polarisColorEighth: '#CBFF81',
        polarisColorNinth: '#71E2E8',
        polarisColorTenth: '#5A70DA',
        polarisColorEleventh: '#B571F4',
        siriusColorFirst: '#5E5F5F',
        siriusColorSecond: '#F9E5D2',
        siriusColorThird: '#E5E6E7',
        siriusColorFourth: '#D66260',
        siriusColorFifth: '#D27863',
        siriusColorSixth: '#FFCE84',
        siriusColorSeventh: '#FFBA73',
        siriusColorEighth: '#ACB29C',
        siriusColorNinth: '#A5D4D8',
        siriusColorTenth: '#3A60B2',
        siriusColorEleventh: '#7866AC',
        capellaColorFirst: '#FFA39F',
        capellaColorSecond: '#9FFFFA',
        capellaColorThird: '#FA3D06',
        capellaColorFourth: '#89C9C9',
        capellaColorFifth: '#A09F9F',
        capellaColorSixth: '#C600FF',
        capellaColorSeventh: '#E52BDD',
        normalColorFirst: '#EF3C38',
        normalColorSecond: '#FF983B',
        normalColorThird: '#FFF43F',
        normalColorFourth: '#44CD2B',
        normalColorFifth: '#2DC4CD',
        normalColorSixth: '#324B9C',
        normalColorSeventh: '#9B43CD',
      },

    },
  },
  plugins: [],
};

export default config;