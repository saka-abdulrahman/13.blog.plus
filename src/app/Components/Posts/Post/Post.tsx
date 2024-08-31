import UserInfo from "./UserInfo";
import PostContent from "./PostContent";
import PostStats from "./PostStats";
import PostActions from "./PostActions";
import PostImage from "./PostImage";
import { FC } from "react";

interface PostProps {
  image: File | null;
  description: string;
  postCreatedAt: string;
  name: string;
  surName: string;
}

const Post: FC<PostProps> = ({
  image,
  description,
  postCreatedAt,
  name,
  surName,
}) => {
  return (
    <div
      className={` p-5 max-[460px]:pb-1 max-[551px]:px-2 bg-bg1 dark:bg-bg1Dark shadow-lg rounded-xl text-postText2 dark:text-postText2Dark gap-2 max-w-[42.75rem] `}
    >
      <UserInfo name={name} surName={surName} postCreatedAt={postCreatedAt} />
      <PostContent description={description} />
      <PostImage image={image} />
      <PostStats />
      <PostActions />
    </div>
  );
};

export default Post;
