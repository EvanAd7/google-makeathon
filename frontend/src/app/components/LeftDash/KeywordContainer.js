import GenerateButton from "./GenerateButton";

const KeywordContainer = ({ selectedKeywords, onKeywordDeselect, baseInputText }) => {
    return (
        <div className="relative text-black bg-[#FFF] h-[50%] flex-shrink-0 rounded-[10px] bg-white p-[25px] flex flex-col">
            <div className="flex-grow overflow-auto">
                {selectedKeywords.map(({ word, category }, index) => (
                    <button
                        key={index}
                        onClick={() => onKeywordDeselect(word, category)}
                        className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-blue-300 transition-colors duration-200"
                    >
                        {word}
                    </button>
                ))}
            </div>
            <div className="flex justify-center items-center mt-4">
                <GenerateButton baseInputText={baseInputText} selectedKeywords={selectedKeywords} />
            </div>
        </div>
    )
}

export default KeywordContainer;
