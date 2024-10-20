import AddWordBar from "./AddWordBar";
import WordBank from "./WordBank";

const SelectionContainer = ({ keywords = [] }) => {
    return (
        <div className="text-black bg-pink-500">
            <AddWordBar />
            <WordBank keywords={keywords} />
        </div>
    )
}

export default SelectionContainer;