// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Posts from "./Components/Posts/Posts";

const Home = () => {
  // const [currentPath, setCurrentPath] = useState<string>("");

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setCurrentPath(window.location.pathname); // Get the current path from window.location
  //   }
  // }, []);

  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <div className={` ${isDark ? "dark" : ""}`}>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <div className="bg-bg2 dark:bg-bg2Dark   min-h-[100vh] pt-20 flex justify-evenly ">
        <div></div>
        <div></div>
        <Posts />
        <div></div>
      </div>
      <Menu />
    </div>
  );
};

export default Home;
