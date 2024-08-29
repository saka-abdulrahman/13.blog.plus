import React from "react";
import { IoCloseSharp } from "react-icons/io5";

interface HeaderProps {
  toggleSignIn: () => void;
}

const SignInHeader: React.FC<HeaderProps> = ({ toggleSignIn }) => (
  <li className="flex items-center justify-between col-span-2 border-b border-[#00000089] text-main2 dark:text-main2Dark">
    <h3 className="text-5xl font-bold">Sign in</h3>
    <button className="text-4xl" onClick={toggleSignIn}>
      <IoCloseSharp />
    </button>
  </li>
);

export default SignInHeader;
