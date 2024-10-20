import { ArrowLeft, ArrowRight } from 'lucide-react';

const NavBar = ({ selectedCategory, onCategoryChange }) => {
    const getCategoryDescription = (category) => {
        switch (category) {
            case 'subject':
                return "What would you like to see in your image? Describe characteristics of the main elements.";
            case 'style':
                return "How should your image look? Choose artistic styles or visual effects.";
            case 'composition':
                return "How do you want your image to be arranged and formatted? What is its purpose?";
            default:
                return "";
        }
    };

    return (
        <div className="text-black flex flex-col gap-[27px]">
            <div className="flex justify-between items-center gap-[75px]">
                <button 
                    className={`flex items-center ${selectedCategory === 'subject' ? 'font-bold' : ''}`}
                    onClick={() => onCategoryChange('subject', '#AAB4F3')}
                >
                <ArrowLeft className="mr-2" />
                Subject
                </button>
            
                <button 
                    className={`${selectedCategory === 'style' ? 'font-bold' : ''}`}
                    onClick={() => onCategoryChange('style', '#C4ABF4')}
                >
                Style
                </button>
            
                <button 
                    className={`flex items-center ${selectedCategory === 'composition' ? 'font-bold' : ''}`}
                    onClick={() => onCategoryChange('composition', '#F8C4FD')}
            >   
                Composition
                <ArrowRight className="ml-2" />
                </button>
        </div>
            <div className='text-center mb-[27px] mr-[10px]'>
                {getCategoryDescription(selectedCategory)}
            </div>
        </div>
    )
}   

export default NavBar;
