import React, { useState } from "react";
import SignInHeader from "./SignInHeader";
import UserDetails from "./UserDetails";
import DateOfBirth from "./DateOfBirth";
import GenderSelection from "./GenderSelection";
// import SignInButtonComponent from "./SignInButtonComponent";

interface SignInButtonProps {
  toggleSignIn: () => void;
  isSignInActive: boolean;
}

const SignInButton: React.FC<SignInButtonProps> = ({
  toggleSignIn,
  isSignInActive,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [gender, setGender] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  console.log("name: ", name);
  console.log("lastName : ", lastName);
  console.log("email : ", email);
  console.log("dateOfBirth : ", dateOfBirth);
  console.log("gender:", gender);
  console.log("psw: ", password);

  const createNewAccount = () => {
    
  };

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
          <UserDetails
            isPasswordVisible={isPasswordVisible}
            togglePasswordVisibility={() =>
              setIsPasswordVisible(!isPasswordVisible)
            }
            setEmail={setEmail}
            setLastName={setLastName}
            setName={setName}
            setPassword={setPassword}
          />
          <DateOfBirth setDateOfBirth={setDateOfBirth} />

          <li className="flex items-center justify-center col-span-1 row-span-2 max-[700px]:col-start-1 max-[700px]:col-end-3 max-[700px]:row-start-8">
            <button
              onClick={createNewAccount}
              className={`text-4xl max-[551px]:text-3xl w-[90%] max-[700px]:w-full bg-main1 dark:bg-main1Dark hover:bg-main1Dark dark:hover:bg-main1 rounded-xl text-bg1 dark:text-bg1Dark px-30 py-8 font-semibold`}
            >
              Sign in
            </button>
          </li>

          <GenderSelection gender={gender} setGender={setGender} />
        </ul>
      </div>
    </div>
  );
};

export default SignInButton;
