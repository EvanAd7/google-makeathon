import { useRouter } from 'next/navigation';

const GenerateButton = ({ baseInputText, selectedKeywords }) => {
    const router = useRouter();

    const handleGenerate = () => {
        const keywordList = selectedKeywords.map(kw => kw.word).join(', ');
        const encodedInput = encodeURIComponent(baseInputText);
        const encodedKeywords = encodeURIComponent(keywordList);
        router.push(`/imagegen?input=${encodedInput}&keywords=${encodedKeywords}`);
    };

    return (
        <button 
            onClick={handleGenerate}
            className="text-black rounded-full bg-gradient-to-r from-[#696EFF] to-[#F8ACFF] flex w-[224px] h-[52px] px-[29px] py-[12px] justify-center items-center gap-[10px] flex-shrink-0"
        >
            <div class="text-center text-[#1e1e1e] text-lg font-semibold text-sans">Generate Images</div>
        </button>
    );
};

export default GenerateButton;
