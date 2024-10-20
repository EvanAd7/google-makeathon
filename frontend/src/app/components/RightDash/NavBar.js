import { ArrowLeft, ArrowRight } from 'lucide-react';

const NavBar = ({ selectedCategory, onCategoryChange }) => {
    const categories = ['subject', 'style', 'composition'];

    return (
        <div className="mb-[50px] mt-[25px] gap-[10px] flex flex-col justify-center items-center text-black w-[474px] h-[24px] flex-shrink-0">
            <div className="flex w-full justify-between items-center">
                    <ArrowLeft className="mr-2" />
                    <button 
                        className={`${selectedCategory === 'subject' ? 'font-bold' : ''}`}
                        onClick={() => onCategoryChange('subject')}
                    >
                        Subject
                    </button>
                </div>
                <button 
                    className={`${selectedCategory === 'style' ? 'font-bold' : ''}`}
                    onClick={() => onCategoryChange('style')}
                >
                    Style
                </button>
                <div className="flex items-center">
                    <button 
                        className={`${selectedCategory === 'composition' ? 'font-bold' : ''}`}
                        onClick={() => onCategoryChange('composition')}
                    >
                        Composition
                    </button>
                    <ArrowRight className="ml-2" />
            </div>
            <div className='text-center'>
                How do you want your image to be arranged 
                and formatted? What is its purpose?
            </div>
        </div>
    )
}   

export default NavBar;
