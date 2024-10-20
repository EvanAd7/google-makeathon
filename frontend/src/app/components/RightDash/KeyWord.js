'use client';
import { useState } from 'react';

const KeyWord = ({ word }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
        // add functionality here
    };

    return (
        <button 
            onClick={handleClick}
            className={`inline-flex w-auto h-[32px] px-3 py-1 justify-center items-center flex-shrink-0 rounded-full text-sm transition-colors duration-200 ease-in-out ${
                isSelected 
                ? 'bg-blue-600 text-white' 
                : 'bg-[#AAACF3] text-black hover:bg-blue-400'
            }`}
        >
            {word}
        </button>
    );
};

export default KeyWord;
