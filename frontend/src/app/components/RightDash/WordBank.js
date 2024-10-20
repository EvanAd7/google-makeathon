import KeyWord from "./KeyWord";
import RegenButton from "./RegenButton";

// Component to display a bank of keywords
const WordBank = ({ keywords = [], onKeywordSelect, color}) => {
    return (
        <div className="text-black h-screen overflow-y-auto">
            <div className="flex flex-wrap gap-[6px] leading-[1] items-start">
                {keywords && keywords.length > 0 ? (
                    keywords.map((word, index) => (
                        <KeyWord key={index} word={word} onSelect={() => onKeywordSelect(word)} color={color} />
                    ))
                ) : (
                    <p className="m-[10px]">Loading keywords...</p>
                )}
            </div>
            <RegenButton />
        </div>
    )
}

export default WordBank;
