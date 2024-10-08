import Navbar from "./Navbar";
import Logo from "./Logo";
import Modes from "./Modes";

const Header = () => {
  return (
    <header
      className={` z-50 bg-bg1 dark:bg-bg1Dark flex px-5 items-center justify-center fixed w-full top-0 max-[1300px]:justify-between  `}
    >
      <Logo />
      <Navbar />
      <Modes />
    </header>
  );
};

export default Header;
