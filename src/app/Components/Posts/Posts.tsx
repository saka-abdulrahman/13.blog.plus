import CreatePost from "./CreatePost";
import Post from "./Post";

const Posts = () => {
  return (
    <div className={` flex flex-col gap-5 relative max-[700px]:w-[95%] `}>
      <CreatePost />

      <Post />
    </div>
  );
};

export default Posts;
