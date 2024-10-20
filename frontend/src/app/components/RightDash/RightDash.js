import { useState } from 'react';
import NavBar from "./NavBar";
import WordBank from "./WordBank";

const RightDash = ({ subjectKeywords, styleKeywords, compositionKeywords, onKeywordSelect }) => {
    const [selectedCategory, setSelectedCategory] = useState('subject');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const getKeywordsForCategory = () => {
        switch (selectedCategory) {
            case 'subject':
                return subjectKeywords;
            case 'style':
                return styleKeywords;
            case 'composition':
                return compositionKeywords;
            default:
                return [];
        }
    };

    return (
        <div className="w-[40%] p-[25px] bg-[#FFF] flex flex-col">
            <NavBar selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
            <h2 className="text-2xl font-bold mb-4 capitalize">{selectedCategory} Keywords</h2>
            <WordBank 
                keywords={getKeywordsForCategory()} 
                onKeywordSelect={(word) => onKeywordSelect(word, selectedCategory)} 
            />
        </div>
    )
}

export default RightDash;
