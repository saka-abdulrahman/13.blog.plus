// components/LoginButton.tsx
import React from "react";

const LoginButton = () => {
  return (
    <button
      className={`bg-main2 dark:bg-main2Dark hover:bg-main2Dark dark:hover:bg-main2 rounded-xl text-bg1 dark:text-bg1Dark px-30 py-8 font-semibold`}
      type="submit"
    >
      Log in
    </button>
  );
};

export default LoginButton;
