// components/PasswordInput.tsx
import React from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

interface PasswordInputProps {
  isPasswordVisible: boolean;
  togglePasswordVisibility: () => void;
  extra: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  isPasswordVisible,
  togglePasswordVisibility,
  extra,
}) => {
  return (
    <div className={`relative hover:bg-inputHover ${extra} `}>
      <input
        className={`px-5 py-7 pr-[4.5rem] first-line:border w-full text-black hover:bg-inputHover focus:bg-inputHover focus:outline-main2 border border-[#00000090] dark:border-[#E0E0E050]  rounded-xl`}
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Password"
      />
      <div
        className="absolute text-5xl -translate-y-1/2 cursor-pointer right-5 top-1/2"
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? <MdVisibilityOff /> : <MdVisibility />}
      </div>
    </div>
  );
};

export default PasswordInput;
