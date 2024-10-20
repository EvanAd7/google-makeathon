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
      `I need your help creating words that relate to attributes of an image. Your response should be exclusively comma separated values, without exception. Values should be no more than 3 words. The description of the image is "${text}". Now imagine you are trying to describe this image in much more vivid detail.

Create a comma-separated list with 20 one-word adjective and verb words that detail the color, material, texture, and actions relating to the image. Be imaginative: what might different ways to expand on this image description?

Without returning or a line break, add another 10 words that describe what might be in the background of the image, based on the image description.

These attributes should NOT be about the style or appearance of the image; only the contents, subjects, and material within the image.`,
      `I need your help creating words that relate to attributes of an image. Your response should be exclusively comma separated values, without exception. Values should be no more than 3 words. The description of the image is "${text}". Now imagine you are trying to describe this image in much more vivid detail.

      Create a comma-separated list with NO more than 30 words that describe potential styles for this image. Provide a list of image/art types, such as sketch, drawing, oil painting, abstract, minimalist, surreal, modern. Include attributes specific to the image description. Based on the description, what might the style of the image be?
      
      Ensure that your response is exclusively comma separated values, without exception. NO titles or labels, only comma separated values. max 30 words.`,
      `I need your help creating words that relate to attributes of an image. Your response should be exclusively comma separated values, without exception. Values should be no more than 3 words. The description of the image is "${text}". Now imagine you are trying to describe this image in much more vivid detail.

Create a comma-separated list with no more than 15 words that describe the composition of the image based on the description. For example, panoramic, portrait, landscape, square, rectangular, oval, circular. Also include some common image dimensions and camera angles, such as high-angle, or 80mm. In this list include some potential uses for the image, such as logo, poster, banner, profile photo, etc.

Ensure that your response is exclusively comma separated values, without exception. NO titles or labels, only comma separated values.`
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

  const handleKeywordSelect = (word, category, color) => {
    setSelectedKeywords(prev => [...prev, { word, category, color }]);
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

  const handleAddKeyword = (newWord, category) => {
    switch (category) {
      case 'subject':
        setSubjectKeywords(prev => [...prev, newWord]);
        break;
      case 'style':
        setStyleKeywords(prev => [...prev, newWord]);
        break;
      case 'composition':
        setCompositionKeywords(prev => [...prev, newWord]);
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
        onAddKeyword={handleAddKeyword}
      />
    </div>
  );
}
