import { ArrowLeft, ArrowRight } from 'lucide-react';

const NavBar = () => {
    return (
        <div className="mb-[50px] flex flex-col justify-center items-center text-black w-[474px] h-[24px] flex-shrink-0">
            <div className="flex gap-[85px] items-center mb-[10px]">
                <div className="flex items-center">
                    <ArrowLeft className="mr-2" />
                    <a>Subject</a>
                </div>
                <a>Style</a>
                <div className="flex items-center">
                    <a>Composition</a>
                    <ArrowRight className="ml-2" />
                </div>
            </div>
            <div>
                How do you want your image to be arranged 
                and formatted? What is its purpose?
            </div>
        </div>
    )
}   

export default NavBar;
