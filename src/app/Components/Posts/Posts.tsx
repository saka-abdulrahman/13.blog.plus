import CreatePost from "./CreatePost";
import Post from "./Post";

const Posts = () => {
  return (
    <div className={` flex flex-col gap-5 relative`}>
      <CreatePost />

      <Post />
    </div>
  );
};

export default Posts;
