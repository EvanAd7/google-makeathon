import { useState } from 'react';

const AddWordBar = ({ onAddWord, color }) => {
    const [newWord, setNewWord] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newWord.trim()) {
            onAddWord(newWord.trim().toLowerCase());
            setNewWord('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex w-full items-center mb-4">
            <div className="relative flex-grow">
                <input 
                    type="text" 
                    value={newWord}
                    onChange={(e) => setNewWord(e.target.value)}
                    placeholder="Add your own..." 
                    className="w-full bg-[#EFEFEF] outline-none border-none px-4 py-2 rounded-full pr-24"
                />
                <button 
                    type="submit" 
                    style={{ backgroundColor: color }}
                    className="absolute right-1 top-1 bottom-1 px-4 rounded-full text-white transition-colors duration-200 hover:opacity-90"
                >
                    Add
                </button>
            </div>
        </form>
    );
};

export default AddWordBar;
