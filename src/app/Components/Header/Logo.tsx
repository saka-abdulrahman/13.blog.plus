import { FaSearch } from "react-icons/fa";
import useModesStore from "@/store/modesStore";

const Logo = () => {
  const { isDark } = useModesStore();
  return (
    <div className={styles.logoContainerClass}>
      <img
        className={styles.logoImageClass}
        src={isDark ? "/logo2.png" : "/logo1.png"}
        alt="logo"
      />
      <div className={styles.searchContainerClass}>
        <input
          className={styles.searchInputClass}
          type="text"
          placeholder="Search"
        />
        <div className={styles.searchIconClass}>
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

const styles: {
  logoContainerClass: string;
  logoImageClass: string;
  searchContainerClass: string;
  searchInputClass: string;
  searchIconClass: string;
} = {
  logoContainerClass: `flex gap-5 left-5 absolute  max-[1300px]:static max-[700px]:hidden`,
  logoImageClass: `w-[9.5rem]`,
  searchContainerClass: `w-1/2 relative text-navIcons dark:text-navIconsDark`,
  searchInputClass: `box-border w-full h-full pl-10 pr-5 rounded-full focus:outline-none focus:bg-inputHover bg-input dark:bg-inputDark hover:bg-inputHover focus:border-0`,
  searchIconClass: `absolute left-2 top-1/2 -translate-y-1/2 text-2xl`,
};

export default Logo;
