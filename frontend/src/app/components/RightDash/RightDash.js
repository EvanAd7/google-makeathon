import NavBar from "./NavBar";
import SelectionContainer from "./SelectionContainer";
import WordBank from "./WordBank";

const RightDash = ({ keywords = [] }) => {
    return (
        <div className="w-1/2 p-4 bg-gray-100">
            <NavBar />
            <h2 className="text-2xl font-bold mb-4">Keywords</h2>
            <WordBank keywords={keywords} />
            <SelectionContainer />
        </div>
    )
}

export default RightDash;
