import React, { FC, useEffect, useState } from "react";
import useStore from "@/store/store";

interface EmailInputProps {
  placeholderName: string;
  extra: string;
  setType: (email: string) => void;
  length: number;
}

const EmailInput: FC<EmailInputProps> = ({
  placeholderName,
  extra,
  setType,
  length,
}) => {
  const { signInDoneCounter } = useStore();
  const [value, setValue] = useState("");

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    setType(newValue);
  };

  useEffect(() => {
    setValue("");
  }, [signInDoneCounter]);

  return (
    <input
      className={`px-5 py-7 border text-black hover:bg-inputHover focus:bg-inputHover focus:outline-main2 border-[#00000090] dark:border-[#E0E0E050] rounded-xl ${extra}`}
      type="text"
      placeholder={placeholderName}
      value={value}
      onChange={handleTypeChange}
      maxLength={length}
    />
  );
};

export default EmailInput;
