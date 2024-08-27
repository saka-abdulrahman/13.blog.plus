import CreatePost from "./CreatePost";
import Post from "./Post/Post";

const Posts = () => {
  return (
    <div className={` flex flex-col gap-5 relative max-[700px]:w-[95%] pb-16 `}>
      <CreatePost />

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
