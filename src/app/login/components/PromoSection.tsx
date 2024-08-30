// components/PromoSection.tsx
import React from "react";

import useStore from "@/store/store";

const PromoSection = () => {
  const { isDark } = useStore();

  return (
    <div
      className={` max-w-[60rem]  max-[1600px]:flex max-[1600px]:flex-col  max-[1600px]:justify-center max-[1600px]:items-center max-[1600px]:pt-5 `}
    >
      <img
        className={`w-[60rem] max-[1600px]:w-[30rem] block max-[460px]:w-[25rem]  `}
        src={isDark ? "/logo2.png" : "/logo1.png"}
        alt=""
      />
      <p
        className={`text-main2 dark:text-main2Dark text-5xl font-semibold max-[1600px]:text-4xl max-[1600px]:text-center max-[460px]:text-3xl `}
      >
        Discover and share your passions with the world.
      </p>
    </div>
  );
};

export default PromoSection;
