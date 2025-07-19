'use client';
import { FaMapMarkerAlt, FaWhatsapp, FaLink } from 'react-icons/fa';

export default function CollegeCard({ college }) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-blue-700 mb-2">{college.name}</h2>
      <p className="text-sm text-gray-600 flex items-center gap-2 mb-4">
        <FaMapMarkerAlt /> {college.location}
      </p>
      <div className="flex flex-wrap gap-3">
        <a href={college.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          <FaLink /> Website
        </a>
        <a href={`https://wa.me/${college.phone}?text=Hi, I need help with admission into ${college.name}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          <FaWhatsapp /> WhatsApp
        </a>
      </div>
    </div>
  );
}