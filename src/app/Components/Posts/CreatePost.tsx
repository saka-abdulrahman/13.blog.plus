import { useState, ChangeEvent, FormEvent } from "react";
import { MdPerson } from "react-icons/md";
import { MdPhoto } from "react-icons/md";
import usePostStore from "@/store/postStore";
import useStore from "@/store/store";
import { getCurrentDate } from "@/app/login/components/FormSction/signInButton/functions";
import { CPstyles } from "./Post/styles/CreatePostsStyles";

const CreatePost: React.FC = () => {
  const [postContent, setPostContent] = useState<string | null>(null);
  const [postImage, setPostImage] = useState<File | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [postIDCounter, setPostIDCounter] = useState<number>(1);

  const { posts, addPost } = usePostStore();
  const { loggedAccount } = useStore();

  const createPost = (e: FormEvent) => {
    e.preventDefault();

    const newPost = {
      userID: loggedAccount.userID,
      postID: postIDCounter,
      name: loggedAccount.name,
      surName: loggedAccount.surName,
      title: "New Post",
      image: postImage,
      description: content!,
      postCreatedAt: getCurrentDate(),
    };

    addPost(newPost);
    setPostIDCounter(postIDCounter + 1);

    console.log(posts);
  };

  const getPostContent = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setContent(value);
    setPostContent(value);
  };

  const getPostImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setPostImage(file);
  };

  return (
    <div className={CPstyles.formClass}>
      <div className={CPstyles.divFlexClass}>
        <div className={CPstyles.iconClass}>
          <MdPerson />
        </div>
        <input
          className={CPstyles.inputClass}
          type="text"
          name="text"
          placeholder="What do you like to share?"
          required={true}
          onChange={getPostContent}
        />
      </div>

      <div className={CPstyles.bottomDivClass}>
        <div className={CPstyles.inputWrapperClass}>
          <input
            className={CPstyles.hiddenInputClass}
            id="photoInput"
            type="file"
            name="file"
            accept="image/*"
            required={true}
            onChange={getPostImage}
          />

          <label className={CPstyles.labelClass} htmlFor="photoInput">
            <MdPhoto className="text-3xl max-[460px]:text-2xl" />
            Photo
          </label>
        </div>

        <button
          type="submit"
          onClick={createPost}
          className={CPstyles.buttonClass}
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
