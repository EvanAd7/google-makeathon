'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const [inputText, setInputText] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Encode the inputText to handle special characters in URLs
    const encodedInput = encodeURIComponent(inputText);
    // Navigate to the promptmaker page with the input text as a query parameter
    router.push(`/promptmaker?input=${encodedInput}`);
  };

  return (
    <div className="w-[100%] h-[982px] bg-gradient-to-tl from-[#696eff] via-[#f5eaf7] to-[#eebbec]">
      <h1 className="absolute left-1/2 top-[5.5%] transform -translate-x-1/2 text-center
                    text-3xl mb-8 font-bold font-geist-sans text-transparent bg-clip-text 
                  bg-gradient-to-r from-indigo-600 to-pink-400"
                  >
        Render
      </h1>
      <div className="absolute left-1/2 top-[30%] transform -translate-x-1/2 text-center">
        <h2 className="text-[40px] font-bold leading-tight bg-black 
                bg-clip-text text-transparent"
        >
        Engineer Less.
        </h2>
      <h2 className="text-[40px] font-bold leading-tight bg-gradient-to-r from-[#696EFF] to-[#F8ACFF] 
              bg-clip-text text-transparent mt-2"
      >
      Create More.
      </h2>
    </div>
    <div className="absolute left-1/2 top-[47%] transform -translate-x-1/2 w-[50%] text-center text-black text-sm font-normal font-['Open Sans']">
      Let us streamline your prompt engineering process so you can focus on creating.
    </div>

    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="absolute left-[35%] top-[55%] w-[30%] h-[41px] bg-white rounded-full flex items-center pl-4 pr-12">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Tell us your vision..."
          className="w-full text-black text-sm font-normal font-['Open Sans'] focus:outline-none"
        />
      </div>
      <div className="absolute left-1/2 top-[65%] transform -translate-x-1/2 w-[12%] h-[40px] 
                    bg-gradient-to-r from-[#aaacf3] via-[#c4abf4] to-[#f8c4fd] rounded-full 
                    flex justify-center items-center">
        <button
          type="submit"
          className="w-full h-full text-gray-700 text-md font-regular font-['Open Sans']
                     duration-200 bg-gradient-to-r from-[#aaacf3] via-[#c4abf4] to-[#f8c4fd]
                     hover:from-[#8a86c6] hover:via-[#a892d7] hover:to-[#f8a3d9] 
                     rounded-full flex justify-center items-center"
          >
          Start Creating
        </button>
      </div>
    </form>
  </div>
  );
}
