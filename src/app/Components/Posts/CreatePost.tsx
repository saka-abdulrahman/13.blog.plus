import React, { useState, ChangeEvent, FormEvent } from "react";
import { MdPerson } from "react-icons/md";
import { MdPhoto } from "react-icons/md";

const CreatePost: React.FC = () => {
  // State to hold the values of the inputs
  const [formValues, setFormValues] = useState<{
    text: string;
    file: File | null;
  }>({
    text: "",
    file: null,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valuesArray = [formValues.text, formValues.file];
    console.log(valuesArray);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <form
      className={`shadow-lg bg-bg1 dark:bg-bg1Dark  rounded-xl px-4 py-2 max-[374px]:p-1 flex flex-col gap-5 max-[374px]:gap-1
        max-[272px]:         `}
      onSubmit={handleSubmit}
    >
      <div
        className={`flex gap-2 max-[374px]:flex-col max-[374px]:items-center `}
      >
        <div
          className={` text-4xl   bg-bg2 dark:bg-bg2Dark dark:text-[#B8BBBF] rounded-full p-1 `}
        >
          <MdPerson />
        </div>
        <input
          className={` w-[37.5rem] max-[700px]:w-full bg-bg2 dark:bg-bg2Dark hover:bg-bg2Hover dark:hover:bg-bg2DarkHover text-[#65676B90] 
            dark:text-[#B8BBBF] text-[1.25rem] max-[460px]:text-base px-5 py-2 max-[272px]:p-1 rounded-full focus:outline-none focus:bg-bg2Hover dark:focus:bg-bg2DarkHover  `}
          type="text"
          name="text"
          placeholder="What do you like to share?"
          value={formValues.text}
          onChange={handleChange}
        />
      </div>

      <div
        className={`flex items-center justify-end  max-[374px]:justify-center gap-3    `}
      >
        <div className={` cursor-pointer text-main1 `}>
          <input
            className={` hidden`}
            id="photoInput"
            type="file"
            name="file"
            onChange={handleChange}
            accept="image/*"
          />

          <label
            className={`text-[1.25rem] max-[460px]:text-base flex items-center justify-center cursor-pointer hover:bg-mainHover dark:hover:bg-mainHoverDark py-[5px] px-6 max-[460px]:px-2 rounded-3xl`}
            htmlFor="photoInput"
          >
            <MdPhoto className="text-3xl max-[460px]:text-2xl " />
            Photo
          </label>
        </div>

        <button
          type="submit"
          className={` text-bg1 font-semibold bg-main1 dark:bg-main1Dark hover:bg-main1Dark dark:hover:bg-main1 py-2 px-9 max-[460px]:px-4 max-[460px]:py-1  rounded-3xl dark:text-bg1Dark `}
        >
          Share
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
