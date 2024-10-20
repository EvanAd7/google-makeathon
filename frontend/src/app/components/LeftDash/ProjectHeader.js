const ProjectHeader = ({ baseInputText, isLoading }) => {
    return (
        <div className="text-black flex flex-col space-y-2 p-4">
            <h1 className="text-2xl font-bold">Image Project Name</h1>
            <div className="flex">
                <div className="w-[70%]">
                    <p className="text-sm">
                        {baseInputText || "No initial prompt provided"}
                    </p>
                    {isLoading && <p>Generating keywords...</p>}
                </div>
                <div className="w-[30%] text-right">
                    <a href="#" className="text-blue-500 hover:underline">
                        <p>Edit Initial Prompt</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectHeader;
