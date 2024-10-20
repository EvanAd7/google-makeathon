import KeyWord from "./KeyWord";
import RegenButton from "./RegenButton";

const WordBank = ({ keywords = [] }) => {
    return (
        <div className="text-black h-screen overflow-y-auto">
            <div className="flex flex-wrap gap-[2px] leading-[1] items-start">
                {keywords && keywords.length > 0 ? (
                    keywords.map((word, index) => (
                        <KeyWord key={index} word={word} />
                    ))
                ) : (
                    <p>No keywords generated yet.</p>
                )}
            </div>
            <RegenButton />
        </div>
    )
}

export default WordBank;
