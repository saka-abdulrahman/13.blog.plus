import { MdPerson, MdPersonAddAlt1 } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

// Component 1
const UserInfo = () => {
  return (
    <div className={`flex items-start justify-between `}>
      <div className={`flex gap-3 `}>
        <div
          className={` text-4xl bg-bg2 dark:bg-bg2Dark dark:text-[#B8BBBF] rounded-full p-1 `}
        >
          <MdPerson />
        </div>

        <div className={`flex flex-col`}>
          <h1 className={` text-[#434444] text-base  `}>Name</h1>
          <h2 className={` text-xs `}>14 June 24</h2>
        </div>
      </div>

      <div className={`  flex gap-2 `}>
        <button className={`text-2xl`}>
          <MdPersonAddAlt1 />
        </button>
        <button className={`text-xl`}>
          <FaStar />
        </button>
      </div>
    </div>
  );
};

// Component 2
const PostContent = () => {
  return (
    <div className={``}>
      <p
        className={`p-1 max-[460px]:text-sm max-[374px]:text-xs max-[272px]:text-[1px]  text-base text-postText1 dark:text-postText1Dark overflow-hidden `}
      >
        IT’S JUST A TEST , YOU CAN SEE ME ? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Repellendus animi rerum quidem sapiente
        nulla laudantium inventore, corrupti est deleniti fuga doloremque id
        blanditiis? Placeat ipsam voluptatem nihil quidem cum
      </p>
    </div>
  );
};

// Component 3
const PostStats = () => {
  return (
    <div className={`flex flex-col  `}>
      <div className={`flex items-center justify-between`}>
        <h5 className={"cursor-pointer hover:text-black "}> 1043 Likes </h5>
        <h5 className={"cursor-pointer hover:text-black"}> 10 Comments </h5>
      </div>
      <hr className={"bg-[#00000090] h-[2px]"} />
    </div>
  );
};

// Component 4

const Button4 = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <button
      className={`    max-[460px]:p-2 max-[460px]:px-4  flex items-center justify-center px-7 gap-1 rounded-lg hover:bg-mainHover`}
    >
      <div className={`max-[374px]:text-2xl  `}>{icon}</div>
      <span className={`max-[374px]:hidden  `}>{text}</span>
    </button>
  );
};

const PostActions = () => {
  return (
    <div className={`flex items-center justify-around pt-1`}>
      <Button4 icon={<AiFillLike />} text="Like" />
      <Button4 icon={<FaComment />} text="Comment" />
      <Button4 icon={<FaShare />} text="Share" />
    </div>
  );
};

const PostImage = () => {
  return (
    <div>
      <img src="/postimage.jpg" alt="" />
    </div>
  );
};

const Post = () => {
  return (
    <div
      className={` p-5 bg-bg1 dark:bg-bg1Dark shadow-lg rounded-xl text-postText2 dark:text-postText2Dark gap-2 max-w-[42.75rem] `}
    >
      {/*  Component 1 */}
      <UserInfo />

      {/* Component 2 */}
      <PostContent />
      <PostImage />

      {/* Component 3 */}
      <PostStats />

      {/* Component 4 */}
      <PostActions />
    </div>
  );
};

export default Post;
