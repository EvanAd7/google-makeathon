import Logo from "./Logo";
import ProjectHeader from "./ProjectHeader";
import KeywordContainer from "./KeywordContainer";

const LeftDash = () => {
    return (
        <div className="bg-[#F5EAF7] w-[60%] m-0 p-[25px] flex flex-col gap-[10px]">
            <Logo />
            <ProjectHeader />
            <KeywordContainer />
        </div>
    )
}

export default LeftDash;
