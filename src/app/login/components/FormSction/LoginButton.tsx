import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import useStore from "@/store/store";

interface LoginButtonProps {
  email: string;
  password: string;
}

const LoginButton: FC<LoginButtonProps> = ({ email, password }) => {
  const { users, loggedAccount, setLoggedAccount, loggedName, setLoggedName } =
    useStore();
  const router = useRouter(); // Initialize the useRouter hook
  const pathname = usePathname(); // Get the current pathname

  const login = () => {
    const user = users.find((user) => user.email === email);

    if (!user) {
      alert("User not found");
      return;
    }

    if (
      loggedAccount.email === user.email &&
      loggedAccount.password === user.password
    ) {
      alert("Already logged in");
      return;
    }

    if (user.password === password) {
      alert("Logged in successfully");
      setLoggedName(user.name);
      setLoggedAccount(user);
      console.log("Logged in as", user.email);

      if (pathname !== "/") {
        router.push("/");
      }
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <button
      className={`bg-main2 dark:bg-main2Dark hover:bg-main2Dark dark:hover:bg-main2 rounded-xl text-bg1 dark:text-bg1Dark px-30 py-8 font-semibold`}
      type="submit"
      onClick={login}
    >
      Log in
    </button>
  );
};

export default LoginButton;
