import React, { useState } from "react";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";

// import useStore from "@/store/store";

interface UserDetailsProps {
  isPasswordVisible: boolean;
  togglePasswordVisibility: () => void;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const UserDetails: React.FC<UserDetailsProps> = ({
  isPasswordVisible,
  togglePasswordVisibility,
  setEmail,
  setLastName,
  setName,
  setPassword,
}) => {
  return (
    <>
      <li className="col-span-1 max-[700px]:col-span-2">
        <EmailInput
          placeholderName={"Name"}
          extra={"w-full text-2xl"}
          setType={setName}
          length={15}
        />
      </li>
      <li className="col-span-1 max-[700px]:col-span-2">
        <EmailInput
          placeholderName={"Last name"}
          extra={"w-full text-2xl"}
          setType={setLastName}
          length={15}
        />
      </li>
      <li className="col-span-2">
        <EmailInput
          placeholderName={"Email"}
          extra={"w-full text-2xl"}
          setType={setEmail}
          length={1000}
        />
      </li>
      <li className="col-span-2">
        <PasswordInput
          isPasswordVisible={isPasswordVisible}
          togglePasswordVisibility={togglePasswordVisibility}
          extra={"text-2xl"}
          setPassword={setPassword}
        />
      </li>
    </>
  );
};

export default UserDetails;
