import React from "react";
import { useNavigate } from "react-router-dom";
import homeLogo from '../assets/icons8-c-ios-17-filled-96.png'

function Home() {
  const navigate = useNavigate();

  const goToCodespace = () => {
    navigate("/codespace");
  };
  const goToDevspace = () => {
    navigate("/devspace");
  };

  return (
    <div className="h-screen w-full bg-[#343F4F] ">
      <div className="flex pl-20 pt-20 pb-10">
        <div className="text-white text-[55px] font-[400]">Hello</div>

        <ul className="dynamic-text ml-[15px]">
          <li className="text-[#FC6D6D] list-none text-[55px] font-[500] ">
            <span>Coder</span>
          </li>
          <li className="text-[#FC6D6D] list-none text-[55px] font-[500]">
            <span>Developer</span>
          </li>
        </ul>
      </div>

      <div className="w-[50vw] pl-20 text-white text-[25px] font-[400]">
        <p>
          Unleash your creativity with CodeWorks! Whether you're building the
          next big app or crafting stunning web designs, our powerful compiler
          and web development playground provide all the tools you need. Start
          your dream project today and bring your imagination to life with CodeWorks !!
        </p>
        <div className="mt-[20px]">
          <button
            onClick={goToCodespace}
            className="bg-blue-500 text-white py-2 px-4 m-2 rounded transition-all transform hover:scale-110 hover:font-bold hover:bg-blue-600"
          >
            CodeSpace
          </button>
          <button
            onClick={goToDevspace}
            className="bg-red-500 text-white py-2 px-4 m-2 rounded transition-all transform hover:scale-110 hover:font-bold hover:bg-red-600"
          >
            DevSpace
          </button>
        </div>
        </div>
    </div>
  );
}

export default Home;
