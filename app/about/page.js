'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">About MgmtQuotaHelp</h1>
        <p className="text-gray-700 mb-4 text-lg">
          MgmtQuotaHelp is a dedicated consultancy based in Bangalore, specializing in guiding students through 
          the complex world of admissions via management quota. We provide accurate, honest information to 
          help you secure a seat in the best colleges for Engineering, MBBS, MBA, and BCA across India.
        </p>
        <p className="text-gray-700 mb-4 text-lg">
          With years of experience and a deep network of trusted contacts, our mission is to ensure you get
          personalized advice, hassle-free admissions, and peace of mind for you and your family.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-3">Meet the Founder</h2>
        <div className="flex gap-4 items-center">
          <div>
            <p className="text-gray-700 mt-2">
              “I believe every student deserves a fair chance to study in the institution of their dreams, 
              regardless of admission hurdles. Let’s unlock your future together.”
            </p>
          </div>
        </div>

        <Link href="/contact">
          <span className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition">
            Contact Us
          </span>
        </Link>
      </div>
    </div>
  );
}
