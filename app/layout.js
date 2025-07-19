import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Management Quota Admission Help',
  description: 'Helping students get into top colleges in Bangalore and India.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-black">
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}