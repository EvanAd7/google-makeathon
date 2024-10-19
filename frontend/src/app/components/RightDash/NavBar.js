import RightArrow from "../img/right-arrow.svg";
import LeftArrow from "../img/left-arrow.svg";

const NavBar = () => {
    return (
        <div className="flex flex-col justify-center items-center text-black w-[474px] h-[24px] flex-shrink-0">
            <div className="flex gap-[85px] items-center">
                <div className="flex items-center">
                    <img src={LeftArrow} alt="Left Arrow" className="mr-2" />
                    <a>Subject</a>
                </div>
                <a>Style</a>
                <div className="flex items-center">
                    <a>Composition</a>
                    <img src={RightArrow} alt="Right Arrow" className="ml-2" />
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
