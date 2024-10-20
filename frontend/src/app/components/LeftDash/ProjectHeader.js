const ProjectHeader = ({ baseInputText }) => {
    return (
        <div className="mt-[65px] text-black div class flex flex-wrap">
            <h1 className="text-2xl font-bold">Image Project Name</h1>
            <div className="div class flex relative">
                <div className="w-[70%]">
                    <p className="text-sm">
                        {baseInputText || "No initial prompt provided"}
                    </p>
                </div>
                <div className="flex absolute bottom-0 right-0 text-right text-bottom bottom-[0px]">
                    <a href="#" className="text-blue-500 hover:underline">
                        <p>Edit Initial Prompt</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectHeader;
