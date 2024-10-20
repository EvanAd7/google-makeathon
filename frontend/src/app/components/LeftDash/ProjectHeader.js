import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const ProjectHeader = ({ baseInputText }) => {
    const router = useRouter();
    const [projectName, setProjectName] = useState('Loading name...');

    useEffect(() => {
        const generateProjectName = async () => {
            if (baseInputText) {
                try {
                    const response = await fetch('/api/textGen', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ 
                            prompt: `Create a short, catchy project name with a STRICT MAXIMUM of 5 words based on this description. DO NOT GENERATE MORE THAN 5 WORDS: "${baseInputText}"` 
                        }),
                    });

                    if (!response.ok) {
                        throw new Error('Failed to generate project name');
                    }

                    const data = await response.json();
                    setProjectName(data.generatedText.trim());
                } catch (error) {
                    console.error('Error generating project name:', error);
                }
            }
        };

        generateProjectName();
    }, [baseInputText]);

    const handleEditClick = () => {
        router.push('/');
    };

    return (
        <div className="flex flex-col mt-[30px] text-black">
            <div className="w-[657px] h-[54px] text-[#1e1e1e] text-[40px] font-bold font-['FONTSPRING DEMO - Pontiac Black']">
                {projectName}
            </div>
            <div className="flex flex-wrap relative">
                <div className="w-[493px] h-[54px] text-[#1e1e1e] text-md font-normal font-['Open Sans']">
                    {baseInputText || "No initial prompt provided"}
                </div>
                <div className="flex absolute bottom-0 right-0 text-right">
                    <button 
                        onClick={handleEditClick} 
                        className="text-right text-[#505050] text-md font-normal font-['Open Sans'] hover:underline"
                    >
                        Edit Initial Prompt
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectHeader;
