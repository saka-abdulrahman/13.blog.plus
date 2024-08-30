// src/app/friends/page.tsx
"use client";

import { useEffect, useState } from "react";

import useStore from "@/store/store";

import Header from "../Components/Header/Header";
import Menu from "../Components/Menu/Menu";

const Friends = () => {
  const { isDark, change } = useStore();

  return (
    <div className={isDark ? "dark" : ""}>
      <div className={"bg-bg2 dark:bg-bg2Dark h-[100svh] "}>
        <Header />
        <Menu />
        <div></div>
      </div>
    </div>
  );
};

export default Friends;
