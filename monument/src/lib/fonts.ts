import localFont from 'next/font/local';

export const urbanGrotesk = localFont({
  src: [
    // Regular
    {
      path: '../assets/fonts/Urban_Grotesk_Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Urban_Grotesk_Regular_Italic.otf',
      weight: '400',
      style: 'italic',
    },

    // Light
    {
      path: '../assets/fonts/Urban_Grotesk_Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Urban_Grotesk_Light_Italic.otf',
      weight: '300',
      style: 'italic',
    },

    // Medium
    {
      path: '../assets/fonts/Urban_Grotesk_Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Urban_Grotesk_Medium_Italic.otf',
      weight: '500',
      style: 'italic',
    },

    // SemiBold
    {
      path: '../assets/fonts/Urban_Grotesk_SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Urban_Grotesk_SemiBold_Italic.otf',
      weight: '600',
      style: 'italic',
    },

    // Bold
    {
      path: '../assets/fonts/Urban_Grotesk_Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Urban_Grotesk_Bold_Italic.otf',
      weight: '700',
      style: 'italic',
    },

    // Black
    {
      path: '../assets/fonts/Urban_Grotesk_Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Urban_Grotesk_Black_Italic.otf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-urban',
  display: 'swap',
});
