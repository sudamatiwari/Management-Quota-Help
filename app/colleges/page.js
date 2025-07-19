'use client';

import { useState } from 'react';
import CollegeCard from '../components/CollegeCard';

const colleges = {
  Engineering: [
    { name: 'RV College of Engineering', location: 'Bangalore', link: 'https://rvce.edu.in', phone: '7406094651' },
    { name: 'BMS College of Engineering', location: 'Bangalore', link: 'https://bmsce.ac.in', phone: '7406094651' },
    { name: 'PES University', location: 'Bangalore', link: 'https://pes.edu', phone: '7406094651' },
    { name: 'Dayananda Sagar College of Engineering', location: 'Bangalore', link: 'https://dayanandasagar.edu', phone: '7406094651' },
    { name: 'BMSIT', location: 'Bangalore', link: 'https://bmsit.ac.in', phone: '7406094651' },
    { name: 'BIT', location: 'Bangalore', link: 'https://bit-bangalore.edu.in', phone: '7406094651' },
    { name: 'Sir MVIT', location: 'Bangalore', link: 'https://www.sirmvit.edu/', phone: '7406094651' },
    { name: 'NMIT', location: 'Bangalore', link: 'https://nmit.ac.in', phone: '7406094651' }
  ],
  MBBS: [
    { name: 'Kasturba Medical College', location: 'Manipal', link: 'https://manipal.edu/kmc-manipal.html', phone: '7406094651' },
    { name: "St. John's Medical College", location: 'Bangalore', link: 'https://stjohns.in', phone: '7406094651' },
    { name: 'SRM Medical College', location: 'Chennai', link: 'https://srmist.edu.in', phone: '7406094651' },
    { name: 'Amrita Institute', location: 'Kochi', link: 'https://amrita.edu', phone: '7406094651' },
    { name: 'JSS Medical College', location: 'Mysuru', link: 'https://jssuni.edu.in', phone: '7406094651' },
    { name: 'DY Patil Medical College', location: 'Pune', link: 'https://dpu.edu.in', phone: '7406094651' },
    { name: 'Hamdard Institute', location: 'New Delhi', link: 'https://jamiahamdard.edu', phone: '7406094651' },
    { name: 'Bharati Vidyapeeth', location: 'Pune', link: 'https://bvuniversity.edu.in', phone: '7406094651' },
    { name: 'KS Hegde Medical Academy', location: 'Mangalore', link: 'https://nitte.edu.in', phone: '7406094651' },
    { name: 'Meenakshi Medical College', location: 'Kanchipuram', link: 'https://mmchri.ac.in', phone: '7406094651' },
    { name: 'Sri Ramachandra Medical College', location: 'Chennai', link: 'https://sriramachandra.edu.in', phone: '7406094651' },
    { name: 'Saveetha Medical College', location: 'Chennai', link: 'https://saveetha.com', phone: '7406094651' },
    { name: 'Chettinad Hospital & Research', location: 'Kelambakkam', link: 'https://chettinadhealthcity.com', phone: '7406094651' },
    { name: 'MGM Medical College', location: 'Mumbai', link: 'https://mgmmumbai.ac.in', phone: '7406094651' }
  ],
  MBA: [
    { name: 'Christ University', location: 'Bangalore', link: 'https://christuniversity.in', phone: '7406094651' },
    { name: 'Alliance University', location: 'Bangalore', link: 'https://alliance.edu.in', phone: '7406094651' },
    { name: 'Jain University', location: 'Bangalore', link: 'https://jainuniversity.ac.in', phone: '7406094651' },
    { name: 'Ramaiah Institute of Management', location: 'Bangalore', link: 'https://msrim.edu.in', phone: '7406094651' },
    { name: 'Presidency College', location: 'Bangalore', link: 'https://presidency.edu.in', phone: '7406094651' }
  ],
  BCA: [
    { name: 'Jain University', location: 'Bangalore', link: 'https://jainuniversity.ac.in', phone: '7406094651' },
    { name: 'Kristu Jayanti College', location: 'Bangalore', link: 'https://kristujayanti.edu.in', phone: '7406094651' },
    { name: 'Presidency College', location: 'Bangalore', link: 'https://presidency.edu.in', phone: '7406094651' },
    { name: "St. Joseph's College", location: 'Bangalore', link: 'https://sjc.ac.in', phone: '7406094651' },
    { name: 'Mount Carmel College', location: 'Bangalore', link: 'https://mccblr.edu.in', phone: '7406094651' }
  ]
};

export default function CollegesPage() {
  const [domain, setDomain] = useState('Engineering');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Choose Your Domain</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(colleges).map((d) => (
          <button
            key={d}
            onClick={() => setDomain(d)}
            className={`px-5 py-2 text-lg rounded-full shadow transition-all ${
              domain === d ? 'bg-blue-600 text-white' : 'bg-white border border-blue-600 text-blue-600'
            }`}
          >
            {d}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {colleges[domain].map((college, idx) => (
          <CollegeCard key={idx} college={college} />
        ))}
      </div>
    </div>
  );
}
