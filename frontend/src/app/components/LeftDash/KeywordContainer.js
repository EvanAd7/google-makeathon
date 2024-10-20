import GenerateButton from "./GenerateButton";

const KeywordContainer = () => {
    return (
        <div className="relative text-black bg-[#FFF] h-[50%] flex-shrink-0 rounded-[10px] bg-white p-[25px] flex flex-col">
            <div className="flex-grow overflow-auto">
                Bubbles go here
            </div>
            <div className="flex justify-center items-center mt-4">
                <GenerateButton />
            </div>
        </div>
    )
}

export default KeywordContainer;
