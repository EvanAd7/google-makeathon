'use client';

const KeyWord = ({ word, onSelect, color}) => {
    return (
        <button 
            onClick={onSelect}
            style={{ backgroundColor: color }} 
            className="py-[12px] px-[29px] rounded-full justify-center items-center inline-flex text-center text-gray-700 text-md font-normal font-['Open Sans'] whitespace-nowrap m-1 transition-colors duration-200 hover:opacity-80"
        >
            {word}
        </button>
    );
};

export default KeyWord;
