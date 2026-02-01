import localFont from 'next/font/local';

export const switzer = localFont({
  src: [
    { path: './Switzer/Switzer-Thin.otf',    weight: '100', style: 'normal' },
    { path: './Switzer/Switzer-Light.otf',   weight: '300', style: 'normal' },
    { path: './Switzer/Switzer-Regular.otf', weight: '400', style: 'normal' },
    { path: './Switzer/Switzer-Medium.otf',  weight: '500', style: 'normal' },
    { path: './Switzer/Switzer-Bold.otf',    weight: '700', style: 'normal' },
    { path: './Switzer/Switzer-Black.otf',   weight: '900', style: 'normal' },
  ],
  variable: '--font-switzer',
  display: 'swap',
});
