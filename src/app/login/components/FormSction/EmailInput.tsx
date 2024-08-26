// components/EmailInput.tsx
import React, { FC } from "react";

interface EmailInputProbes {
  placeholderName: string;
  extra: string;
}

const EmailInput: FC<EmailInputProbes> = ({ placeholderName, extra }) => {
  return (
    <input
      className={`px-5 py-7 border text-black hover:bg-inputHover focus:bg-inputHover focus:outline-main2 border-[#00000090] dark:border-[#E0E0E050] rounded-xl ${extra}`}
      type="text"
      placeholder={placeholderName}
    />
  );
};

export default EmailInput;
