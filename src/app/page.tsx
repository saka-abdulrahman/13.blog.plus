"use client";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Posts from "./Components/Posts/Posts";
import useModesStore from "@/store/modesStore";

const Home = () => {
  const { isDark } = useModesStore();

  return (
    <div className={` ${isDark ? "dark" : ""}    `}>
      <Header />
      <div className="bg-bg2 dark:bg-bg2Dark   min-h-[100vh] pt-20 max-[700px]:pt-7 flex justify-evenly items-c ">
        <div className="max-[700px]:hidden "></div>
        <div className="max-[700px]:hidden "></div>
        <Posts />
        <div className="max-[700px]:hidden "></div>
      </div>
      <Menu />
    </div>
  );
};

export default Home;
