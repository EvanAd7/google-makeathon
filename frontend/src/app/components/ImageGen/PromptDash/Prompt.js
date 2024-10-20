import { Clipboard } from 'lucide-react';
import { useState } from 'react';

const Prompt = ({ prompt }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(prompt || '');
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
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
