import { ArrowLeft } from 'lucide-react';

const ReturnButton = () => {

    const handleEditClick = () => {
        router.push('/promptmaker');
    }

    return (
        <div className="flex absolute bottom-[55px] left-[55px] text-right text-black">
            <ArrowLeft className="mr-2"/>
            <button 
                onClick={handleEditClick} 
                className="text-black hover:underline"
            >
                Return to Prompt Creation
            </button>
        </div>
    )
}

export default ReturnButton;