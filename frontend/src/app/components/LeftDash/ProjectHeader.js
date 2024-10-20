import { useRouter } from 'next/navigation';

const ProjectHeader = ({ baseInputText }) => {

    const router = useRouter();

    const handleEditClick = () => {
        router.push('/');
    };
    

    return (
        <div className="flex flex-col mt-[65px] text-black">
            <div className="text-2xl font-bold">
                <h1>Image Project Name</h1>
            </div>
            <div className="flex flex-wrap relative">
                <div className="w-[70%]">
                    <p className="text-sm">
                        {baseInputText || "No initial prompt provided"}
                    </p>
                </div>
                <div className="flex absolute bottom-0 right-0 text-right">
                    <a href="#" onClick={handleEditClick} className="text-blue-500 hover:underline">
                        <p>Edit Initial Prompt</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectHeader;
