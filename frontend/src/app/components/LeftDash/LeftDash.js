import Logo from "./Logo";
import ProjectHeader from "./ProjectHeader";
import KeywordContainer from "./KeywordContainer";

const LeftDash = ({ baseInputText, selectedKeywords, onKeywordDeselect }) => {
    return (
        <div className="bg-[#F5EAF7] w-[60%] m-0 p-[25px] gap-[10px] flex flex-col">
            <Logo />
            <ProjectHeader baseInputText={baseInputText} />
            <KeywordContainer 
                selectedKeywords={selectedKeywords} 
                onKeywordDeselect={onKeywordDeselect} 
            />
        </div>
    )
}

export default LeftDash;
