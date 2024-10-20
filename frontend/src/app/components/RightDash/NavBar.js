import { ArrowLeft, ArrowRight } from 'lucide-react';

const NavBar = () => {
    return (
        <div className="mb-[50px] mt-[25px] gap-[10px] flex flex-col justify-center items-center text-black w-[474px] h-[24px] flex-shrink-0">
            <div className="flex w-full justify-between items-center">
                    <ArrowLeft className="mr-2" />
                    <a>Subject</a>
                    <a>Style</a>
                    <a>Composition</a>
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
