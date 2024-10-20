'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const [inputText, setInputText] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Encode the inputText to handle special characters in URLs
    const encodedInput = encodeURIComponent(inputText);
    // Navigate to the promptmaker page with the input text as a query parameter
    router.push(`/promptmaker?input=${encodedInput}`);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-5xl font-bold mb-8 text-center text-gray-800">
        Render
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter your prompt here"
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
