import { FC, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdPerson, MdPersonAddAlt1 } from "react-icons/md";

// Component 1

interface UserInfoProps {
  postCreatedAt: string;
  name: string;
  surName: string;
}

const UserInfo: FC<UserInfoProps> = ({ postCreatedAt, name, surName }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };
  const [isAdded, setIsAdded] = useState(false);

  const handleAddClick = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={`flex items-start justify-between  `}>
      <div className={`flex gap-3 `}>
        <div
          className={` text-4xl bg-bg2 dark:bg-bg2Dark dark:text-[#B8BBBF] rounded-full p-1 `}
        >
          <MdPerson />
        </div>

        <div className={`flex flex-col justify-center `}>
          <h1 className={` text-[#434444] text-base max-[374px]:text-xs  `}>
            {name} {surName}
          </h1>
          <h2 className={` text-xs max-[272px]:text-[0.6rem] `}>
            {postCreatedAt}
          </h2>
        </div>
      </div>

      <div className={`  flex gap-2 `}>
        <button
          className={`text-2xl hover:text-main2 hover:scale-125 transition-all duration-300 ${
            isAdded ? "text-main2" : ""
          } `}
          onClick={handleAddClick}
        >
          {isAdded ? <MdPerson /> : <MdPersonAddAlt1 />}
        </button>
        <button
          className={`text-xl hover:text-yellow-500 hover:scale-125 transition-all duration-300${
            isSaved ? "scale-110 text-yellow-500" : ""
          }`}
          onClick={handleSaveClick}
        >
          <FaStar />
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
