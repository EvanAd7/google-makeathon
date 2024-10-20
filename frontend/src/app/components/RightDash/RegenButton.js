import { RefreshCw } from 'lucide-react';

const RegenButton = () => {
    return (
        <div className="flex mt-[20px] w-[120px] h-[40px] px-[20px] py-[12px] justify-center items-center gap-[10px] flex-shrink-0 rounded-full bg-[#C4C4C4] hover:bg-[#A8A8A8] transition-colors duration-200">
            <button className="flex items-center">
                <span className="mr-2">Refresh</span>
                <RefreshCw size={18} />
            </button>
        </div>
    )
}

export default RegenButton;
