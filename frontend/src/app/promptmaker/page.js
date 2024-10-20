'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import LeftDash from "../components/LeftDash/LeftDash";
import RightDash from "../components/RightDash/RightDash";

export default function PromptMakerPage() {
  const searchParams = useSearchParams();
  const inputText = decodeURIComponent(searchParams.get('input') || '');
  const [subjectKeywords, setSubjectKeywords] = useState([]);
  const [styleKeywords, setStyleKeywords] = useState([]);
  const [compositionKeywords, setCompositionKeywords] = useState([]);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (inputText) {
      generateAIText(inputText);
    }
  }, [inputText]);

  const generateAIText = async (text) => {
    setIsLoading(true);
    const engineeredPrompts = [
      `Create a comma-separated list of at most 30 one-word adjectives and verbs that detail the color, material, texture, and actions relating to this sentence: "${text}"`,
      `Create a comma-separated list of at most 15 artistic styles that could be applied to an image of: "${text}"`,
      `Create a comma-separated list of at most 15 composition techniques or camera angles that could be used to capture: "${text}"`
    ];

    try {
      const responses = await Promise.all(engineeredPrompts.map(prompt =>
        fetch('/api/textGen', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt }),
        })
      ));

      const data = await Promise.all(responses.map(response => {
        if (!response.ok) {
          throw new Error('Failed to generate text');
        }
        return response.json();
      }));

      // Process the generated text into keywords
      const [subjectText, styleText, compositionText] = data.map(d => d.generatedText.toLowerCase());
      
      setSubjectKeywords(subjectText.split(',').map(word => word.trim()));
      setStyleKeywords(styleText.split(',').map(word => word.trim()));
      setCompositionKeywords(compositionText.split(',').map(word => word.trim()));
    } catch (error) {
      console.error('Error:', error);
      setSubjectKeywords([]);
      setStyleKeywords([]);
      setCompositionKeywords([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeywordSelect = (word, category) => {
    setSelectedKeywords(prev => [...prev, { word, category }]);
    switch (category) {
      case 'subject':
        setSubjectKeywords(prev => prev.filter(kw => kw !== word));
        break;
      case 'style':
        setStyleKeywords(prev => prev.filter(kw => kw !== word));
        break;
      case 'composition':
        setCompositionKeywords(prev => prev.filter(kw => kw !== word));
        break;
    }
  };

  const handleKeywordDeselect = (word, category) => {
    setSelectedKeywords(prev => prev.filter(kw => !(kw.word === word && kw.category === category)));
    switch (category) {
      case 'subject':
        setSubjectKeywords(prev => [...prev, word].sort());
        break;
      case 'style':
        setStyleKeywords(prev => [...prev, word].sort());
        break;
      case 'composition':
        setCompositionKeywords(prev => [...prev, word].sort());
        break;
    }
  };

  return (
    <div className="flex">
      <LeftDash 
        baseInputText={inputText} 
        isLoading={isLoading} 
        selectedKeywords={selectedKeywords}
        onKeywordDeselect={handleKeywordDeselect}
      />
      <RightDash 
        subjectKeywords={subjectKeywords}
        styleKeywords={styleKeywords}
        compositionKeywords={compositionKeywords}
        onKeywordSelect={handleKeywordSelect}
      />
    </div>
  );
}
