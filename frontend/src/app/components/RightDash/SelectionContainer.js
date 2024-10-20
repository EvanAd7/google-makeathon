import AddWordBar from "./AddWordBar";
import WordBank from "./WordBank";

const SelectionContainer = () => {
    return (
        <div className="bg-green-500 text-black">
            <AddWordBar />
            <WordBank />
        </div>
    )
}

export default SelectionContainer;