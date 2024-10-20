import Logo from '../../LeftDash/Logo'

const ImageDisplay = ({ generatedImages, isLoading, error }) => {
    return (
        <div className="w-[60%] h-screen p-4 bg-gradient-to-tl from-[#696EFF] via-[#f5eaf7] to-[#eebbec] p-[50px] flex flex-col">
            <div className="flex justify-center mb-8">
                <Logo />
            </div>
            {isLoading && <p className="text-center">Generating images...</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="grid grid-cols-2 gap-[10px]">                
                {generatedImages.map((image, index) => (
                    <img 
                        key={index}
                        src={`data:image/png;base64,${image}`} 
                        alt={`Generated image ${index + 1}`} 
                        className="w-full h-auto"
                    />
                ))}
            </div>
        </div>
    )
}

export default ImageDisplay;  
