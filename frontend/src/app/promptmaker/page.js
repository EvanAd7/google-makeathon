'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import LeftDash from "../components/LeftDash/LeftDash";
import RightDash from "../components/RightDash/RightDash";

export default function PromptMakerPage() {
  const searchParams = useSearchParams();
  const inputText = decodeURIComponent(searchParams.get('input') || '');
  const [keywords, setKeywords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (inputText) {
      generateAIText(inputText);
    }
  }, [inputText]);

  const generateAIText = async (text) => {
    setIsLoading(true);
    const engineeredPrompt = `Create a comma-separated list of at most 30 one-word adjectives and verbs that detail the color, material, texture, and actions relating to this sentence: "${text}"`;

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
      
      // Process the generated text into keywords
      const keywordList = data.generatedText.toLowerCase().split(',').map(word => word.trim());
      setKeywords(keywordList);
    } catch (error) {
      console.error('Error:', error);
      setKeywords([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex">
      <LeftDash baseInputText={inputText} isLoading={isLoading} />
      <RightDash keywords={keywords} />
    </div>
  );
}
