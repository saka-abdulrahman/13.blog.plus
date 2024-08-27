import { FaUserFriends, FaGamepad } from "react-icons/fa";
import { RiHome2Fill } from "react-icons/ri";
import { IoLogIn } from "react-icons/io5";
import { FC } from "react";
import Link from "next/link";

import { useEffect, useState } from "react";

interface NavbarItem {
  icon: JSX.Element;
  to: string;
}

const Navbar: FC = () => {
<<<<<<< HEAD
  const navbarItems = [
=======
  const navbarContainerClass: string = ` z-50 flex gap-3  bg-bg1 dark:bg-bg1Dark
  max-[1300px]:fixed max-[1300px]:bottom-0 max-[1300px]:w-full max-[1300px]:justify-center  max-[1300px]:left-0 
  max-[700px]:flex   `;
  const navbarItemClass: string = `text-5xl max-[1300px]:text-3xl text-navIcons dark:text-navIcons px-6 py-1 hover:bg-mainHover  dark:hover:bg-mainHoverDark 
   max-[460px]:text-2xl max-[460px]:p-1 `;

  const navbarItems: NavbarItem[] = [
>>>>>>> 107079ea4474041061454dcd9a41420456cce453
    { icon: <RiHome2Fill />, to: "/" },
    { icon: <FaUserFriends />, to: "/friends" },
    { icon: <FaGamepad />, to: "/games" },
    { icon: <IoLogIn />, to: "/login" },
  ];

  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname); // Get the current path from window.location
    }
  }, []);

  return (
    <div
      className={`z-50 flex gap-3 bg-bg1 dark:bg-bg1Dark max-[1300px]:fixed max-[1300px]:bottom-0 max-[1300px]:w-full max-[1300px]:justify-center max-[1300px]:left-0 max-[700px]:flex`}
    >
      {navbarItems.map((item, index) => (
        <div key={index}>
          <Link href={item.to}>
            <div
              className={` ${
                currentPath === item.to
                  ? " text-main2 dark:text-main2Dark border-b-2 border-main2 dark:border-main2Dark"
                  : "text-navIcons dark:text-navIcons"
              } text-5xl  max-[1300px]:text-3xl  px-6 py-1 hover:bg-mainHover dark:hover:bg-mainHoverDark max-[460px]:text-2xl max-[460px]:p-1`}
            >
              {item.icon}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
