import Logo from '../../LeftDash/Logo'

const ImageDisplay = ({ generatedImages, isLoading, error }) => {
    return (
        <div className="w-[60%] h-screen bg-gradient-to-tl from-[#696EFF] via-[#f5eaf7] to-[#eebbec] flex flex-col p-4">
            <div className="flex-grow grid grid-cols-2 grid-rows-2 gap-4 relative">
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10 rounded-lg">
                        <p className="text-white text-xl">Generating images...</p>
                    </div>
                )}
                {error && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10 rounded-lg">
                        <p className="text-red-500 text-xl">{error}</p>
                    </div>
                )}
                {generatedImages.map((image, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
                        <img 
                            src={`data:image/png;base64,${image}`} 
                            alt={`Generated image ${index + 1}`} 
                            className="absolute w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageDisplay;
