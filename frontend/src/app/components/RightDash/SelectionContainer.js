import AddWordBar from "./AddWordBar";
import WordBank from "./WordBank";

const SelectionContainer = ({ keywords = [], onKeywordSelect, onAddWord, color }) => {
    return (
        <div className="text-black bg-white">
            <AddWordBar onAddWord={onAddWord} color={color} />
            <WordBank keywords={keywords} onKeywordSelect={onKeywordSelect} color={color} />
        </div>
    );
};

export default SelectionContainer;
