import { Clipboard } from 'lucide-react';
import { useState } from 'react';

const Prompt = ({ prompt }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(prompt);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="w-full h-[50%] p-4 relative">
            <p>
                {prompt}
                test
                test
            </p>
            <div className="flex absolute bottom-[55px] text-right text-black">
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
