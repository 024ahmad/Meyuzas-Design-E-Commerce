import './globals.css';  // ✅ Correct path
import Navbar from './components/Navbar';
import { ReactNode } from 'react'; // ✅ ReactNode type import karo
import Footer from './components/Footer';

export const metadata = {
  title: 'E-commerce',
  description: 'E-commerce demo'
};

export default function RootLayout({ children  }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}