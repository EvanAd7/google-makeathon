'use client';
import LeftDash from "./components/LeftDash/LeftDash";
import RightDash from "./components/RightDash/RightDash";

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
    <div className="flex flex-wrap">
      <LeftDash />
      <RightDash />
    </div>
  );
}
