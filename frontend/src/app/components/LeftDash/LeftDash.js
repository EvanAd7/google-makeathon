import Logo from "./Logo";
import ProjectHeader from "./ProjectHeader";
import KeywordContainer from "./KeywordContainer";

const LeftDash = ({ baseInputText, selectedKeywords, onKeywordDeselect }) => {
    return (
        <div className="bg-[linear-gradient(317deg,#898CF7_-11.54%,#F5EAF7_36.94%)] w-[60%] m-0 p-[25px] gap-[10px] flex flex-col">
            <Logo />
            <ProjectHeader baseInputText={baseInputText} />
            <KeywordContainer 
                selectedKeywords={selectedKeywords} 
                onKeywordDeselect={onKeywordDeselect}
                baseInputText={baseInputText}
            />
        </div>
    )
}

export default LeftDash;
