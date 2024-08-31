"use client";

import Header from "../Components/Header/Header";
import Menu from "../Components/Menu/Menu";
import useStore from "@/store/store";

const Games = () => {
  const { isDark } = useStore();

  return (
    <div className={isDark ? "dark" : ""}>
      <div className={"bg-bg2 dark:bg-bg2Dark h-[100svh] "}>
        <Header />
        <Menu />
      </div>
    </div>
  );
};

export default Games;
