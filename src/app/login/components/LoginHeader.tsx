import Link from "next/link";
import { RiHome2Fill } from "react-icons/ri";

const LoginHeader = () => {
  return (
    <div className="fixed top-2 right-2">
      <Link href={"/"}>
        <button
          className={`bg-white dark:bg-bg2Dark rounded-full text-main2 text-3xl p-2 hover:bg-mainHover dark:hover:bg-bg2DarkHover`}
        >
          <RiHome2Fill />
        </button>
      </Link>
    </div>
  );
};

export default LoginHeader;
