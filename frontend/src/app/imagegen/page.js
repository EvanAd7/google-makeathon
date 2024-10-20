'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import PromptDash from '../components/ImageGen/PromptDash/PromptDash';
import ImageDisplay from '../components/ImageGen/ImageDisplay/ImageDisplay';

export default function ImageGenPage() {
    // Get the search parameters from the URL
    const searchParams = useSearchParams();
    
    // Extract and decode the 'input' and 'keywords' from the URL parameters
    const inputText = decodeURIComponent(searchParams.get('input') || '');
    const keywords = decodeURIComponent(searchParams.get('keywords') || '');
    
    // State to store the generated images (as base64 strings)
    const [generatedImages, setGeneratedImages] = useState([]);
    // State to track if the images are currently being generated
    const [isLoading, setIsLoading] = useState(false);
    // State to store any error messages
    const [error, setError] = useState(null);
    const [prompt, setPrompt] = useState('');

    useEffect(() => {
        // Function to generate the images
        const generateImages = async () => {
            // Set loading state to true and clear any previous errors
            setIsLoading(true);
            setError(null);
            
            // Construct the prompt for image generation
            const prompt = `Create an image based on the input, "${inputText}" with the specifications: ${keywords}`;
            setPrompt(prompt);

            try {
                // Send a POST request to the imageGen API
                const response = await fetch('/api/imageGen', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ prompt }),
                });

                // Check if the response is successful
                if (!response.ok) {
                    throw new Error('Failed to generate images');
                }

                // Parse the JSON response
                const data = await response.json();
                // Set the generated images (base64 strings) in the state
                setGeneratedImages(data.images);
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

        // Only generate the images if both inputText and keywords are present
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
