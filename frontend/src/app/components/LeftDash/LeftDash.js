import Logo from "./Logo";
import ProjectHeader from "./ProjectHeader";
import KeywordContainer from "./KeywordContainer";
import GenerateButton from "./GenerateButton";

const LeftDash = () => {
    return (
        <div className="bg-[#F5EAF7] w-[60%] m-0 p-[53px]">
            <Logo />
            <ProjectHeader />
            <KeywordContainer />
            <GenerateButton />
        </div>
    )
}

export default LeftDash;

