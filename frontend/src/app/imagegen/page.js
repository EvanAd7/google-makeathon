'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import PromptDash from '../components/ImageGen/PromptDash/PromptDash';
import ImageDisplay from '../components/ImageGen/ImageDisplay/ImageDisplay';

// Main component for the image generation page
export default function ImageGenPage() {
    // Extract input text and keywords from URL parameters
    const searchParams = useSearchParams();
    const inputText = decodeURIComponent(searchParams.get('input') || '');
    const keywords = decodeURIComponent(searchParams.get('keywords') || '');
    
    // State variables for managing generated images, loading state, errors, and prompt
    const [generatedImages, setGeneratedImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [prompt, setPrompt] = useState('');

    // Effect hook to generate images when input text or keywords change
    useEffect(() => {
        // Function to generate images
        const generateImages = async () => {
            // Set loading state to true and clear any previous errors
            setIsLoading(true);
            setError(null);
            
            try {
                // Step 1: Generate the AI artist prompt
                const aiArtistPrompt = `You are an AI artist prompt writer. You know how to write good AI prompts, and today you will help me turn a long string of comma separated attributes into a masterful and intricate image prompt. Don't exclude ANYTHING that is in my input from your prompt response. In other words your output should be longer than my input. String together the words to create an effective prompt that will create the desired image. DO NOT use any titles or introductions or anything except the prompt itself. "${inputText} with the specifications: ${keywords}"`;

                // Step 2: Send the AI artist prompt to textGen.js
                const textGenResponse = await fetch('/api/textGen', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ prompt: aiArtistPrompt }),
                });

                if (!textGenResponse.ok) {
                    throw new Error('Failed to generate text prompt');
                }

                const textGenData = await textGenResponse.json();
                const generatedPrompt = textGenData.generatedText;
                setPrompt(generatedPrompt);

                // Step 3: Send the generated prompt to imageGen.js
                const imageGenResponse = await fetch('/api/imageGen', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ prompt: generatedPrompt }),
                });

                if (!imageGenResponse.ok) {
                    throw new Error('Failed to generate images');
                }

                const imageGenData = await imageGenResponse.json();
                setGeneratedImages(imageGenData.images);
            } catch (err) {
                // Log any errors to the console
                console.error('Error:', err);
                // Set an error message to display to the user
                setError('Failed to generate images. Please try again.');
            } finally {
                // Set loading state to false when the process is complete
                setIsLoading(false);
            }
        };

        // Only generate images if both inputText and keywords are present
        if (inputText && keywords) {
            generateImages();
        }
    }, [inputText, keywords]); // This effect runs when inputText or keywords change

    return (
        <div className="m-0 p-0 flex">
            <PromptDash prompt={prompt}/>
            <ImageDisplay generatedImages={generatedImages} isLoading={isLoading} error={error}/>
        </div>
    );
}
