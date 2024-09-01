import { MdDarkMode } from "react-icons/md";
import useStore from "@/store/store";
import useModesStore from "@/store/modesStore";

const Footer = () => {
  const { deleteAllUsers } = useStore();
  const { changeDarkMode } = useModesStore();

  return (
    <footer
      className={`   flex items-center justify-between  px-4 absolute bottom-0 max-[700px]:text-sm  text-[1.25rem] text-main2 dark:text-main2Dark  bg-bg1 dark:bg-bg1Dark w-full  `}
    >
      <div className="flex items-center gap-2">
        <button className="p-1 px-4 max-[700px]:px-2 rounded-full bg-bg2 dark:bg-bg2Dark hover:bg-bg2Hover dark:hover:bg-bg2DarkHover">
          En<span className="max-[700px]:hidden">glish</span>
        </button>
        <button
          onClick={deleteAllUsers}
          className="p-1 px-4 max-[700px]:px-2 rounded-full bg-bg2 dark:bg-bg2Dark hover:bg-bg2Hover dark:hover:bg-bg2DarkHover"
        >
          Ar<span className="max-[700px]:hidden">abic</span>
        </button>
      </div>

      <p className="max-[374px]:absolute -bottom-4 max-[374px]:w-full text-center ">
        ©Abdulrahman-Saka
      </p>

      <div className={` flex items-center gap-3  `}>
        <button
          onClick={changeDarkMode}
          className={`bg-bg2 dark:bg-bg2Dark rounded-full text-2xl p-2 hover:bg-bg2Hover dark:hover:bg-bg2DarkHover`}
        >
          <MdDarkMode />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
