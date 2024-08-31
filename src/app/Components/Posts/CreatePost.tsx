import React, { useState, ChangeEvent, FormEvent } from "react";
import { MdPerson } from "react-icons/md";
import { MdPhoto } from "react-icons/md";

import usePostStore from "@/store/postStore";
import useStore from "@/store/store";

import { getCurrentDate } from "@/app/login/components/FormSction/signInButton/functions";

const CreatePost: React.FC = () => {
  // Class name variables
  const formClass: string = `shadow-lg bg-bg1 dark:bg-bg1Dark rounded-xl px-4 py-2 max-[374px]:p-1 flex flex-col gap-5 max-[374px]:gap-1`;
  const divFlexClass: string = `flex gap-2 max-[374px]:flex-col max-[374px]:items-center`;
  const iconClass: string = `text-4xl bg-bg2 dark:bg-bg2Dark dark:text-[#B8BBBF] rounded-full p-1`;
  const inputClass: string = `w-[37.5rem] max-[700px]:w-full bg-bg2 dark:bg-bg2Dark hover:bg-bg2Hover dark:hover:bg-bg2DarkHover text-[#65676B90] dark:text-[#B8BBBF] text-[1.25rem] max-[460px]:text-base px-5 py-2 max-[272px]:p-1 rounded-full focus:outline-none focus:bg-bg2Hover dark:focus:bg-bg2DarkHover`;
  const bottomDivClass: string = `flex items-center justify-end max-[374px]:justify-center gap-3`;
  const inputWrapperClass: string = `cursor-pointer text-main1`;
  const hiddenInputClass: string = `hidden`;
  const labelClass: string = `text-[1.25rem] max-[460px]:text-base flex items-center justify-center cursor-pointer hover:bg-mainHover dark:hover:bg-mainHoverDark py-[5px] px-6 max-[460px]:px-2 rounded-3xl`;
  const buttonClass: string = `text-bg1 font-semibold bg-main1 dark:bg-main1Dark hover:bg-main1Dark dark:hover:bg-main1 py-2 px-9 max-[460px]:px-4 max-[460px]:py-1 rounded-3xl dark:text-bg1Dark`;
  // end

  const [postContent, setPostContent] = useState<string | null>(null);
  const [postImage, setPostImage] = useState<File | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [postIDCounter, setPostIDCounter] = useState<number>(1);

  const { posts, addPost } = usePostStore();
  const { loggedAccount } = useStore();

  const createPost = (e: FormEvent) => {
    e.preventDefault();

    const newPost = {
      userID: loggedAccount.userId,
      postID: postIDCounter,
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
    <div className={formClass}>
      <div className={divFlexClass}>
        <div className={iconClass}>
          <MdPerson />
        </div>
        <input
          className={inputClass}
          type="text"
          name="text"
          placeholder="What do you like to share?"
          required={true}
          onChange={getPostContent}
        />
      </div>

      <div className={bottomDivClass}>
        <div className={inputWrapperClass}>
          <input
            className={hiddenInputClass}
            id="photoInput"
            type="file"
            name="file"
            accept="image/*"
            required={true}
            onChange={getPostImage}
          />

          <label className={labelClass} htmlFor="photoInput">
            <MdPhoto className="text-3xl max-[460px]:text-2xl" />
            Photo
          </label>
        </div>

        <button type="submit" onClick={createPost} className={buttonClass}>
          Share
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
