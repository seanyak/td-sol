import localFont from 'next/font/local';

export const excon = localFont({
  src: [
    { path: './Excon/Excon-Thin.otf',    weight: '100', style: 'normal' },
    { path: './Excon/Excon-Light.otf',   weight: '300', style: 'normal' },
    { path: './Excon/Excon-Regular.otf', weight: '400', style: 'normal' },
    { path: './Excon/Excon-Medium.otf',  weight: '500', style: 'normal' },
    { path: './Excon/Excon-Bold.otf',    weight: '700', style: 'normal' },
    { path: './Excon/Excon-Black.otf',   weight: '900', style: 'normal' },
  ],
  variable: '--font-excon',
  display: 'swap',
});
