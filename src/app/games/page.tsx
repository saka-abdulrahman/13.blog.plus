"use client";

import Header from "../Components/Header/Header";
import Menu from "../Components/Menu/Menu";
import useModesStore from "@/store/modesStore";

const Games = () => {
  const { isDark } = useModesStore();

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
