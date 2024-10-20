import GenerateButton from "./GenerateButton";

// Component to display selected keywords and generate button
const KeywordContainer = ({ selectedKeywords, onKeywordDeselect, baseInputText }) => {
    return (
        // Container for selected keywords and generate button
        <div className="relative text-black bg-[#FFF] h-[50%] flex-shrink-0 rounded-[10px] bg-white p-[25px] flex flex-col">
            <div className="flex-grow overflow-auto relative">
                {selectedKeywords.length === 0 && (
                    <div className="absolute inset-0 flex items-center text-lg justify-center text-gray-400">
                        Click bubbles to add words
                    </div>
                )}
                {selectedKeywords.map(({ word, category, color }, index) => (
                    <button
                        key={index}
                        onClick={() => onKeywordDeselect(word, category)}
                        style={{ backgroundColor: color }}
                        className="inline-block rounded-full px-4 py-2 text-base font-semibold text-gray-700 mr-2 mb-2 hover:opacity-80 transition-opacity duration-200"
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
