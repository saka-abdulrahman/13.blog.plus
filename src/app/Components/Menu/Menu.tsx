import { IoPerson } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { MdOutlineLanguage, MdLogin } from "react-icons/md";

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

  return (
    <div
      className={` w-[26rem]  h-full bg-[#FFFFFF50]  dark:bg-[#272D3330]  flex flex-col top-14 p-1 gap-1 fixed  
        max-[700px]:hidden z-10 
        max-[1300px]:w-1/3`}
    >
      {menuItem.map((item, index) => (
        <div
          className={`  py-4 px-4 text-4xl flex items-center gap-5 rounded-xl hover:bg-mainHover dark:hover:bg-mainHoverDark `}
          key={index}
          onClick={item.functionName}
        >
          <div className={` text-4xl text-main2 dark:text-main2Dark    `}>
            {item.icon}
          </div>
          <div
            className={` text-[#434444] dark:text-[#FFFFFF]   text-2xl text-center  `}
          >
            {item.name}{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
