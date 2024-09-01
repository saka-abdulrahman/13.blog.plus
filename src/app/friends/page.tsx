"use client";
import useStore from "@/store/store";
import Header from "../Components/Header/Header";
import Menu from "../Components/Menu/Menu";
import useModesStore from "@/store/modesStore";

const Friends = () => {
  const { isDark } = useModesStore();

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
