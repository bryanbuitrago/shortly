import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  sans: ['Poppins', 'sans-serif'],
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Shortly - URL Shortener',
  description:
    'Shortly is a URL shortener that shortens long links to short links.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
