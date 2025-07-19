'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wide">MgmtQuotaHelp</Link>
        <div className="space-x-6 text-lg">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/colleges" className="hover:underline">Colleges</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
