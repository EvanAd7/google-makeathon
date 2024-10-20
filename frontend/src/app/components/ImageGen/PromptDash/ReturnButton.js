import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ReturnButton = () => {
    const router = useRouter();

    const handleReturnClick = () => {
        router.push('/');
    }

    return (
        <div className="flex absolute bottom-[55px] left-[55px] text-right text-black">
            <ArrowLeft className="mr-2"/>
            <button 
                onClick={handleReturnClick} 
                className="text-black hover:underline"
            >
                Make another project
            </button>
        </div>
    )
}

export default ReturnButton;
