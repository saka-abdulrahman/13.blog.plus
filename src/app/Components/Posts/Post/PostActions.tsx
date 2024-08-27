import { AiFillLike } from "react-icons/ai";
import { FaComment, FaShare } from "react-icons/fa";

import { useState } from "react";

// Component 4
const Button = ({
  icon,
  text,
  handleClick,
  type,
}: {
  icon: React.ReactNode;
  text: string;
  handleClick: () => void;
  type: boolean;
}) => {
  const likeFunction = () => {
    if (text === "Like") {
      return type ? "text-blue-500 scale-110 " : "bg";
    }
  };

  return (
    <button
      className={` ${likeFunction()} transition-all duration-300  max-[460px]:p-2 max-[460px]:px-4 flex items-center justify-center px-7 gap-1 rounded-lg hover:bg-mainHover`}
      onClick={handleClick}
    >
      <div className={`max-[374px]:text-base  `}>{icon}</div>
      <span className={`max-[374px]:hidden  `}>{text}</span>
    </button>
  );
};

const PostActions = () => {
  const [like, setLike] = useState(false);

  const handleLikeClick = () => {
    setLike(!like);
  };

  return (
    <div className={`flex items-center justify-around pt-1`}>
      <Button
        icon={<AiFillLike />}
        text="Like"
        handleClick={handleLikeClick}
        type={like}
      />
      <Button
        icon={<FaComment />}
        text="Comment"
        handleClick={() => {}}
        type={false}
      />
      <Button
        icon={<FaShare />}
        text="Share"
        handleClick={() => {}}
        type={false}
      />
    </div>
  );
};

export default PostActions;
