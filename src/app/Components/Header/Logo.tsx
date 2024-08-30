import { FC } from "react";

import { FaSearch } from "react-icons/fa";

import useStore from "@/store/store";

const Logo: FC = () => {
  // styles
  const logoContainerClass: string = `flex gap-5 left-5 absolute  max-[1300px]:static max-[700px]:hidden `;
  const logoImageClass: string = `w-[9.5rem]`;
  const searchContainerClass: string = `w-1/2 relative text-navIcons dark:text-navIconsDark`;
  const searchInputClass: string = `box-border w-full h-full pl-10 pr-5 rounded-full focus:outline-none focus:bg-inputHover bg-input dark:bg-inputDark hover:bg-inputHover focus:border-0`;
  const searchIconClass: string = `absolute left-2 top-1/2 -translate-y-1/2 text-2xl`;

  const { isDark } = useStore();

  return (
    <div className={logoContainerClass}>
      <img
        className={logoImageClass}
        src={isDark ? "/logo2.png" : "/logo1.png"}
        alt="logo"
      />
      <div className={searchContainerClass}>
        <input className={searchInputClass} type="text" placeholder="Search" />
        <div className={searchIconClass}>
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Logo;
