import { FaUserFriends, FaGamepad } from "react-icons/fa";
import { RiHome2Fill } from "react-icons/ri";
import { IoLogIn } from "react-icons/io5";
import { FC } from "react";
import Link from "next/link";

interface NavbarItem {
  icon: JSX.Element;
  to: string;
}

const Navbar: FC = () => {
  const navbarContainerClass: string = ` z-50 flex gap-3  bg-bg1 dark:bg-bg1Dark
  max-[1300px]:fixed max-[1300px]:bottom-0 max-[1300px]:w-full max-[1300px]:justify-center  max-[1300px]:left-0 
  max-[700px]:flex   `;
  const navbarItemClass: string = `text-5xl text-navIcons dark:text-navIcons px-6 py-1 hover:bg-mainHover  dark:hover:bg-mainHoverDark 
   max-[460px]:text-4xl max-[460px]:p-1 `;

  const navbarItems: NavbarItem[] = [
    { icon: <RiHome2Fill />, to: "/" },
    { icon: <FaUserFriends />, to: "/friends" },
    { icon: <FaGamepad />, to: "/games" },
    { icon: <IoLogIn />, to: "/login" },
  ];

  return (
    <div className={navbarContainerClass + " z-50 "}>
      {navbarItems.map((item, index) => (
        <Link href={item.to} key={index}>
          <div className={navbarItemClass}>{item.icon}</div>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
