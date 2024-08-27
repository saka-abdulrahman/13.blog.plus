import { IoPerson, IoMenu, IoCloseOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { MdOutlineLanguage, MdLogin } from "react-icons/md";

import { useState } from "react";

interface MenuItem {
  icon: JSX.Element;
  functionName: () => void;
  name: string;
}

const Menu = () => {
  const handleClick = () => {
    console.log("Function executed on path:");
  };

  const menuItem: MenuItem[] = [
    { icon: <IoPerson />, functionName: handleClick, name: "Name" },
    { icon: <FaStar />, functionName: handleClick, name: "Saved" },
    {
      icon: <MdOutlineLanguage />,
      functionName: handleClick,
      name: "Language",
    },
    { icon: <MdLogin />, functionName: handleClick, name: "Login" },
  ];

  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  return (
    <>
      <div
        className={` w-[26rem]  h-full bg-[#FFFFFF50]  dark:bg-[#272D3330]  flex flex-col top-14 p-1 gap-1 fixed  
         z-10 
        max-[1176px]:w-[18rem]
        max-[1390px]:bg-bg1
        max-[1390px]:dark:bg-bg1Dark
        max-[700px]:w-full  max-[700px]:top-0
        ${
          isMenuActive ? " max-[1390px]:left-0 " : "max-[1390px]:-left-[40rem] "
        }
         transition-all duration-300 `}
      >
        {menuItem.map((item, index) => (
          <>
            <div
              className={`   py-4 px-4  text-4xl flex items-center gap-5 rounded-xl hover:bg-mainHover dark:hover:bg-mainHoverDark `}
              key={index}
              onClick={item.functionName}
            >
              <div
                className={` text-4xl max-[1176px]:text-3xl text-main2 dark:text-main2Dark    `}
              >
                {item.icon}
              </div>
              <div
                className={` text-[#434444] dark:text-[#FFFFFF]   text-2xl  max-[1176px]:text-base text-center  `}
              >
                {item.name}
              </div>
            </div>

            <hr
              className={` hidden  max-[1390px]:block bg-[#00000090] dark:bg-bg-[##43444410] `}
            />
          </>
        ))}
      </div>

      <button
        onClick={() => setIsMenuActive(!isMenuActive)}
        className={` text-3xl text-main2 dark:text-main2Dark z-[343]  fixed  bottom-1 left-5 bg-bg2 dark:bg-bg2Dark 
          hover:bg-mainHover dark:hover:bg-mainHoverDark rounded-full   hidden max-[1390px]:block max-[460px]:text-2xl `}
      >
        {isMenuActive ? <IoCloseOutline /> : <IoMenu />}
      </button>
    </>
  );
};

export default Menu;
