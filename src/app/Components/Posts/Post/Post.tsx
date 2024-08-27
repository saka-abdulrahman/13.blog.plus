import UserInfo from "./UserInfo";
import PostContent from "./PostContent";
import PostStats from "./PostStats";
import PostActions from "./PostActions";
import PostImage from "./PostImage";

const Post = () => {
  return (
    <div
      className={` p-5 max-[460px]:pb-1 max-[551px]:px-2 bg-bg1 dark:bg-bg1Dark shadow-lg rounded-xl text-postText2 dark:text-postText2Dark gap-2 max-w-[42.75rem] `}
    >
      <UserInfo />
      <PostContent />
      <PostImage />
      <PostStats />
      <PostActions />
    </div>
  );
};

export default Post;
