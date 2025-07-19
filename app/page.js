'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">
          Unlock Your Future with MgmtQuotaHelp
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Get expert guidance for admissions into top colleges in Bangalore and across India via management quota. 
          Engineering, MBBS, MBA, BCA — we’re here to help you secure your dream seat.
        </p>
        <Link href="/contact">
          <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition">
            Get Free Consultation
          </span>
        </Link>
      </section>

      {/* IMAGE GRID */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-20">
        <div className="rounded overflow-hidden shadow hover:shadow-lg transition">
          <Image
            src="/images/engineering.jpg"
            alt="Engineering College"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Engineering</h3>
            <p className="text-gray-600 text-sm">
              Top engineering colleges with state-of-the-art facilities and placement opportunities.
            </p>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow hover:shadow-lg transition">
          <Image
            src="/images/mbbs.jpg"
            alt="MBBS College"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">MBBS</h3>
            <p className="text-gray-600 text-sm">
              Get admission in reputed medical colleges and start your journey toward becoming a doctor.
            </p>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow hover:shadow-lg transition">
          <Image
            src="/images/mba.jpg"
            alt="MBA College"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">MBA & BCA</h3>
            <p className="text-gray-600 text-sm">
              Leading management and computer applications colleges for your bright corporate career.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
