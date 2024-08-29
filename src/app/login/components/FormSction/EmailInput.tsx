// components/EmailInput.tsx
import React, { FC } from "react";

interface EmailInputProbes {
  placeholderName: string;
  extra: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  length: number;
}

const EmailInput: FC<EmailInputProbes> = ({
  placeholderName,
  extra,
  setType,
  length,
}) => {
  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };

  return (
    <input
      className={`px-5 py-7 border text-black hover:bg-inputHover focus:bg-inputHover focus:outline-main2 border-[#00000090] dark:border-[#E0E0E050] rounded-xl ${extra}`}
      type="text"
      placeholder={placeholderName}
      onChange={handleTypeChange}
      maxLength={length}
    />
  );
};

export default EmailInput;
