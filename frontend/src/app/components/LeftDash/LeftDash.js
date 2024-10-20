import Logo from "./Logo";
import ProjectHeader from "./ProjectHeader";
import KeywordContainer from "./KeywordContainer";

const LeftDash = ({ baseInputText, isLoading }) => {
    return (
        <div className="bg-[#F5EAF7] w-[60%] m-0 p-[25px] gap-[10px] flex flex-col">
            <Logo />
            <ProjectHeader baseInputText={baseInputText} isLoading={isLoading} />
            <KeywordContainer />
        </div>
    )
}

export default LeftDash;
