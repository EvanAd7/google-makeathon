import Header from './Header';
import Prompt from './Prompt';
import ReturnButton from './ReturnButton';

const PromptDash = ({ prompt }) => {
    return (
        <div className='flex flex-col p-[45px] bg-[#FFF] w-[40%] h-screen text-black'>
            <Header />
            <Prompt prompt={prompt} />
            <ReturnButton />
        </div>
    )
}

export default PromptDash;