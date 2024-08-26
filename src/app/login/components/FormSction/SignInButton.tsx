import React, { useState } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import { IoCloseSharp } from "react-icons/io5";

interface SignInButtonProps {
  toggleSignIn: () => void;
  isSignInActive: boolean;
}

interface NameInputProps {
  placeholderName: string;
}

interface PasswordInputComponentProps {
  isPasswordVisible: boolean;
  togglePasswordVisibility: () => void;
}

interface GenderSelectionProps {
  gender: string | null;
  setGender: React.Dispatch<React.SetStateAction<string | null>>;
}

interface HeaderProps {
  toggleSignIn: () => void;
}

const SignInButton: React.FC<SignInButtonProps> = ({
  toggleSignIn,
  isSignInActive,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [gender, setGender] = useState<string | null>(null);

  return (
    <div className={`flex justify-center items-center mt-5`}>
      <button
        className={`text-4xl max-[551px]:text-3xl w-[70%] bg-main1 dark:bg-main1Dark hover:bg-main1Dark dark:hover:bg-main1 rounded-xl text-bg1 dark:text-bg1Dark px-30 py-8 font-semibold`}
        onClick={toggleSignIn}
      >
        Sign in
      </button>

      <div
        className={` ${
          isSignInActive ? "" : "hidden"
        } absolute bg-[#00000040] w-full h-[100svh] top-0 left-0 z-40 flex items-center justify-center max-[1300px]:px-4 `}
      >
        <ul className="grid grid-cols-2 grid-rows-6 max-[700px]:grid-rows-8 gap-5 px-5 shadow-sm bg-bg1 dark:bg-bg1Dark rounded-xl max-[700px]:pb-4 max-[700px]:h-[50rem]">
          <SignInHeader toggleSignIn={toggleSignIn} />
          <NameInput placeholderName={"Name"} />
          <NameInput placeholderName={"Last name"} />
          <EmailInputComponent />
          <PasswordInputComponent
            isPasswordVisible={isPasswordVisible}
            togglePasswordVisibility={() =>
              setIsPasswordVisible(!isPasswordVisible)
            }
          />
          <DateOfBirth />
          <SignInButtonComponent />
          <GenderSelection gender={gender} setGender={setGender} />
        </ul>
      </div>
    </div>
  );
};

const SignInHeader: React.FC<HeaderProps> = ({ toggleSignIn }) => (
  <li className="flex items-center justify-between col-span-2 border-b border-[#00000089] text-main2 dark:text-main2Dark">
    <h3 className="text-5xl font-bold">Sign in</h3>
    <button className="text-4xl" onClick={toggleSignIn}>
      <IoCloseSharp />
    </button>
  </li>
);

const NameInput: React.FC<NameInputProps> = ({ placeholderName }) => (
  <li className="col-span-1 max-[700px]:col-span-2">
    <EmailInput placeholderName={placeholderName} extra={"w-full text-2xl"} />
  </li>
);

const EmailInputComponent: React.FC = () => (
  <li className="col-span-2">
    <EmailInput placeholderName={"Email"} extra={"w-full text-2xl"} />
  </li>
);

const PasswordInputComponent: React.FC<PasswordInputComponentProps> = ({
  isPasswordVisible,
  togglePasswordVisibility,
}) => (
  <li className="col-span-2">
    <PasswordInput
      isPasswordVisible={isPasswordVisible}
      togglePasswordVisibility={togglePasswordVisibility}
      extra={"text-2xl"}
    />
  </li>
);

const DateOfBirth: React.FC = () => (
  <li className="flex flex-col justify-center col-span-1 max-[700px]:col-start-1 max-[700px]:col-end-3">
    <label>Date of Birth</label>
    <div>
      <input className="text-3xl" type="date" />
    </div>
  </li>
);

const SignInButtonComponent: React.FC = () => (
  <li className="flex items-center justify-center col-span-1 row-span-2 max-[700px]:col-start-1 max-[700px]:col-end-3 max-[700px]:row-start-8">
    <button
      className={`text-4xl max-[551px]:text-3xl w-[90%] max-[700px]:w-full bg-main1 dark:bg-main1Dark hover:bg-main1Dark dark:hover:bg-main1 rounded-xl text-bg1 dark:text-bg1Dark px-30 py-8 font-semibold`}
    >
      Sign in
    </button>
  </li>
);

const GenderSelection: React.FC<GenderSelectionProps> = ({
  gender,
  setGender,
}) => (
  <li className="col-span-1 gap-2 max-[700px]:col-start-1 max-[700px]:col-end-3">
    <h3>Gender</h3>
    <div className="flex gap-2">
      <button
        onClick={() => setGender("Female")}
        className={`p-1 px-3 text-3xl border border-[#00000090] hover:bg-mainHover dark:hover:bg-mainHoverDark ${
          gender === "Female" ? "bg-main1" : ""
        }`}
      >
        Female
      </button>
      <button
        onClick={() => setGender("Male")}
        className={`p-1 px-6 text-3xl border border-[#00000090] hover:bg-mainHover dark:hover:bg-mainHoverDark ${
          gender === "Male" ? "bg-main1" : ""
        }`}
      >
        Male
      </button>
    </div>
  </li>
);

export default SignInButton;
