const ImageDisplay = ({ generatedImages, isLoading, error }) => {
    return (
        <div className="w-[60%] h-screen p-4 bg-gradient-to-tl from-[#696EFF] via-[#f5eaf7] to-[#eebbec]">
            <h1 className="text-2xl font-bold mb-4">Generated Images</h1>
            {isLoading && <p>Generating images...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-2 gap-4">
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

export default ImageDisplay;  // Make sure to export the component
