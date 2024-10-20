import Logo from "./Logo";
import ProjectHeader from "./ProjectHeader";
import KeywordContainer from "./KeywordContainer";
import GenerateButton from "./GenerateButton";

const LeftDash = ({ baseInputText, isLoading }) => {
    return (
        <div className="w-1/2 p-4 bg-white">
            <Logo />
            <ProjectHeader baseInputText={baseInputText} isLoading={isLoading} />
            <KeywordContainer />
            <GenerateButton />
        </div>
    )
}

export default LeftDash;
