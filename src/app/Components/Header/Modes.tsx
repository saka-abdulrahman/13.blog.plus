import { FC } from "react";
import { IoNotifications } from "react-icons/io5";
import { MdDarkMode, MdPerson, MdLightMode } from "react-icons/md";

interface ModeItem {
  icon: JSX.Element;
  functionName: () => void;
}

interface ModesProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

const Modes: FC<ModesProps> = ({ isDark, setIsDark }) => {
  // styles
  const modesContainerClass: string =
    "flex gap-2 absolute right-5 max-[1300px]:static max-[700px]:hidden  ";
  const modeItemClass: string = `p-3 text-3xl rounded-full text-BlackIcons dark:text-BlackIconsDark bg-bg2 dark:bg-bg2Dark hover:bg-bg2Hover dark:hover:bg-mainHoverDark`;

  const handleClick = () => {
    console.log("Function executed on path:");
  };
  const DarkMode = () => {
    setIsDark(!isDark);
  };

  const modesItems: ModeItem[] = [
    { icon: isDark ? <MdLightMode /> : <MdDarkMode />, functionName: DarkMode },
    { icon: <IoNotifications />, functionName: handleClick },
    { icon: <MdPerson />, functionName: handleClick },
  ];

  return (
    <div className={modesContainerClass}>
      {modesItems.map((item, index) => (
        <button
          key={index}
          className={modeItemClass}
          onClick={item.functionName}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
};

export default Modes;
