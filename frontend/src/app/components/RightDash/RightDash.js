import { useState } from 'react';
import NavBar from "./NavBar";
import SelectionContainer from "./SelectionContainer";

const RightDash = ({ subjectKeywords, styleKeywords, compositionKeywords, onKeywordSelect, onAddKeyword }) => {
    const [selectedCategory, setSelectedCategory] = useState('subject');
    const [selectedColor, setSelectedColor] = useState('#AAB4F3');

    const handleCategoryChange = (category, color) => {
        setSelectedCategory(category);
        setSelectedColor(color);
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

    const handleAddWord = (newWord) => {
        onAddKeyword(newWord, selectedCategory);
    };

    return (
        <div className="w-[40%] p-[25px] bg-[#FFF] flex flex-col">
            <NavBar selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
            <SelectionContainer 
                keywords={getKeywordsForCategory()} 
                onKeywordSelect={(word) => onKeywordSelect(word, selectedCategory, selectedColor)} 
                onAddWord={handleAddWord}
                color={selectedColor}
            />
        </div>
    );
};

export default RightDash;
