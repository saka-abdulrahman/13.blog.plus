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
/* 448929312_884603097036878_6313771063176779339_n 2 */

export default Posts;
