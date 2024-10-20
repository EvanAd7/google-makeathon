'use client';

const KeyWord = ({ word, onSelect, color}) => {
    return (
        <button 
            onClick={onSelect}
            style={{ backgroundColor: color }} 
            className="inline-flex w-auto h-[32px] px-3 py-1 justify-center items-center flex-shrink-0 rounded-full text-sm transition-colors duration-200 ease-in-out text-black hover:bg-blue-400"
        >
            {word}
        </button>
    );
};

export default KeyWord;
