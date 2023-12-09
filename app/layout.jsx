import { Inter } from 'next/font/google';
import './(dashboard)/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Panduan QA',
  description: 'Tempat Belajar QA',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
