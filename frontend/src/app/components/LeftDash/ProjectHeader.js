import { useRouter } from 'next/navigation';

const ProjectHeader = ({ baseInputText }) => {
    const router = useRouter();

    const handleEditClick = () => {
        router.push('/');
    };

    return (
        <div className="flex flex-col mt-[65px] text-black">
            <div class="w-[657px] h-[54px] text-[#1e1e1e] text-[40px] font-bold font-['FONTSPRING DEMO - Pontiac Black']">Image Project Name</div>
            <div className="flex flex-wrap relative">
            <div class="w-[493px] h-[54px] text-[#1e1e1e] text-md font-normal font-['Open Sans']">
                {baseInputText || "No initial prompt provided"}
            </div>
                <div className="flex absolute bottom-0 right-0 text-right">
                    <button 
                        onClick={handleEditClick} 
                        class="text-right text-[#505050] text-md font-normal font-['Open Sans'] hover:underline"
                    >
                        Edit Initial Prompt
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectHeader;
