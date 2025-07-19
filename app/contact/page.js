'use client';
import { useState } from 'react';

export default function ContactPage() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwTR11HbSIdC74thxf6g__KdgfDRYU54vj3tJwiS8jL0Y5tFoCSXjSyGdF5dK5A59c5cA/exec';

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    college: '',
    course: '',
    city: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Sheets Apps Script
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      setStatus('Form submitted successfully!');
      setForm({
        name: '',
        phone: '',
        email: '',
        college: '',
        course: '',
        city: '',
        message: ''
      });
    } catch (error) {
      console.error('Error!', error.message);
      setStatus('Error submitting the form');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['name', 'phone', 'email', 'college', 'course', 'city'].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            required
            className="w-full p-3 border rounded"
          />
        ))}
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full p-3 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 text-white font-semibold rounded ${loading ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
}
