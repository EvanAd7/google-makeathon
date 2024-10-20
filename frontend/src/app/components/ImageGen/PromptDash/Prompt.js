import { Clipboard } from 'lucide-react';
import { useState } from 'react';

// Component to display the generated prompt and copy button
const Prompt = ({ prompt }) => {
    // State to manage copy button text
    const [isCopied, setIsCopied] = useState(false);

    // Function to handle copying the prompt
    const handleCopy = async () => {
        try {
            // Copy prompt to clipboard
            await navigator.clipboard.writeText(prompt || '');
            setIsCopied(true);
            // Reset copy button text after 2 seconds
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="w-full h-full flex flex-col justify-between p-4">
            <div className="flex-grow overflow-auto mt-4">
                {prompt ? (
                    <p className="text-lg">{prompt}</p>
                ) : (
                    <p className="text-lg text-gray-500">Prompt loading...</p>
                )}
            </div>
            <div className="flex justify-end items-center mt-4">
                <Clipboard className="mr-2"/>
                <button 
                    onClick={handleCopy}
                    className="text-black hover:underline"
                >
                    {isCopied ? 'Copied!' : 'Copy'}
                </button>
            </div>
        </div>
    )
}

export default Prompt;
