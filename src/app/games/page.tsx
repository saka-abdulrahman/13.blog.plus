"use client";

import Header from "../Components/Header/Header";
import Menu from "../Components/Menu/Menu";
import { useEffect, useState } from "react";

const Games = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className={"bg-bg2 dark:bg-bg2Dark h-[100svh] "}>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Menu />
        <div></div>
      </div>
    </div>
  );
};

export default Games;
