
import LeftDash from "./components/LeftDash/LeftDash";
import RightDash from "./components/RightDash/RightDash";

'use client';

import Image from "next/image";
import React, { useState } from 'react';


export default function Home() {
  // State for image generation
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // State for text generation
  const [textPrompt, setTextPrompt] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [isTextLoading, setIsTextLoading] = useState(false);

  // Function to handle image generation
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Send request to image generation API
      const response = await fetch('/api/imageGen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setGeneratedImage(data.image);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle text generation
  const handleTextSubmit = async (e) => {
    e.preventDefault();
    setIsTextLoading(true);
    try {
      // Send request to text generation API
      const response = await fetch('/api/textGen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: textPrompt }),
      });
      const data = await response.json();
      setGeneratedText(data.generatedText);
    } catch (error) {
      console.error('Error generating text:', error);
    } finally {
      setIsTextLoading(false);
    }
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white text-black">
      <h1 className="text-3xl font-bold text-black">Image and Text Generator</h1>
      
      {/* Image generation form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your image prompt"
          className="w-full p-2 border border-gray-300 rounded bg-white text-black"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isLoading ? 'Generating...' : 'Generate Image'}
        </button>
      </form>

      {/* Display generated image */}
      {generatedImage && (
        <div className="mt-8">
          <Image
            src={`data:image/png;base64,${generatedImage}`}
            alt="Generated Image"
            width={512}
            height={512}
          />
        </div>
      )}

      {/* Text generation form */}
      <form onSubmit={handleTextSubmit} className="w-full max-w-md mt-8">
        <input
          type="text"
          value={textPrompt}
          onChange={(e) => setTextPrompt(e.target.value)}
          placeholder="Enter your text prompt"
          className="w-full p-2 border border-gray-300 rounded bg-white text-black"
        />
        <button
          type="submit"
          disabled={isTextLoading}
          className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 disabled:bg-gray-400"
        >
          {isTextLoading ? 'Generating...' : 'Generate Text'}
        </button>
      </form>
      
      {generatedText && (
        <div className="mt-8 w-full max-w-md">
          <h2 className="text-xl font-bold mb-2 text-black">Generated Text:</h2>
          <p className="p-4 bg-gray-100 rounded text-black">{generatedText}</p>
        </div>
      )}
    </div>

  );
}
