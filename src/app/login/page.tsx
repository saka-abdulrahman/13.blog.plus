// pages/Login.tsx
"use client";

import React from "react";

import LoginHeader from "./components/LoginHeader";
import PromoSection from "./components/PromoSection";
import FormSection from "./components/FormSction/FormSection";
import Footer from "./components/Footer";

const Login = () => {
  return (
    <div className="relative ">
      <LoginHeader />
      <div
        className={`h-[100svh] bg-bg2 dark:bg-bg2Dark  p-12 pt-36 flex justify-around max-[551px]:justify-center max-[551px]:gap-5
          max-[1600px]:flex-col max-[1600px]:p-4  max-[1600px]:items-center `}
      >
        <PromoSection />
        <FormSection />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
