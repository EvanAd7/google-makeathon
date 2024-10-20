import NavBar from "./NavBar";
import SelectionContainer from "./SelectionContainer";
import WordBank from "./WordBank";

const RightDash = ({ keywords = [] }) => {
    return (
        <div className="w-[40%] p-[25px] bg-[#FFF] flex flex-col">
            <NavBar />
            <SelectionContainer keywords={keywords} />
        </div>
    )
}

export default RightDash;
