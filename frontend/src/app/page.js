'use client';
import { useState } from 'react';

export default function LandingPage() {
  const [inputText, setInputText] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const engineeredPrompt = `Create a comma-separated list of at most 30 one-word adjectives and verbs that detail the color, material, texture, and actions relating to this sentence: "${inputText}"`;

    try {
      const response = await fetch('/api/textGen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: engineeredPrompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate text');
      }

      const data = await response.json();
      setGeneratedText(data.generatedText);
    } catch (error) {
      console.error('Error:', error);
      setGeneratedText('An error occurred while generating text.');
    } finally {
      setIsLoading(false);
    }
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
            disabled={isLoading}
            className="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 disabled:bg-blue-300"
          >
            {isLoading ? 'Generating...' : 'Submit'}
          </button>
        </div>
      </form>
      {generatedText && (
        <div className="mt-8 p-4 bg-white text-black rounded shadow-md w-full max-w-md">
          <h2 className="text-xl font-bold mb-2">Generated Text:</h2>
          <p>{generatedText}</p>
        </div>
      )}
    </div>
  );
}
