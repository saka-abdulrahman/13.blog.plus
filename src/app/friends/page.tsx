// src/app/friends/page.tsx
"use client";

import Header from "../Components/Header/Header";
import Menu from "../Components/Menu/Menu";

const Friends = () => {
  return (
    <div className={"bg-bg2 dark:bg-bg2Dark h-[100svh] "}>
      <Header />
      <Menu />
      <div></div>
    </div>
  );
};

export default Friends;
