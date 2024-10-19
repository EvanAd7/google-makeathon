import KeyWord from "./KeyWord";
import RegenButton from "./RegenButton";
const WordBank = () => {
    return (
        <div className="text-black h-screen flex gap-[5px]">
            <KeyWord />
            <KeyWord />
            <KeyWord />
            <RegenButton />
        </div>
    )
}

export default WordBank;