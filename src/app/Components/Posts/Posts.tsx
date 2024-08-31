import CreatePost from "./CreatePost";
import Post from "./Post/Post";

import usePostStore from "@/store/postStore";
import useStore from "@/store/store";

const Posts = () => {
  const { posts } = usePostStore();

  return (
    <div className={` flex flex-col gap-5 relative max-[700px]:w-[95%] pb-16 `}>
      <CreatePost />
      <div
        className={` flex flex-col-reverse gap-5 relative max-[700px]:w-[95%] pb-16  `}
      >
        {posts.map((post) => (
          <Post
            key={post.postID}
            name={" "}
            surName={" "}
            image={post.image ? new File([post.image], "image.jpg") : null}
            description={post.description}
            postCreatedAt={post.postCreatedAt}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
