import { Poppins } from 'next/font/google';

import './globals.css';
import Header from './components/header';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  icons: {
    icon: './assets/images/logo_kotak.svg',
  },
  title: 'Panduan QA',
  description: 'Tools untuk membantu proses testing',
  keywords:
    'web development, web design, javascript, react, node, angular, vue, html, css',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header></Header>
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}
