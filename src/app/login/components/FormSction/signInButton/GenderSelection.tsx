import React from "react";

interface GenderSelectionProps {
  gender: string | null;
  setGender: React.Dispatch<React.SetStateAction<string | null>>;
}

const GenderSelection: React.FC<GenderSelectionProps> = ({
  gender,
  setGender,
}) => (
  <li className="col-span-1 gap-2 max-[700px]:col-start-1 max-[700px]:col-end-3">
    <h3>Gender</h3>
    <div className="flex gap-2">
      <button
        onClick={() => setGender("Female")}
        className={`p-1 px-3 text-3xl border border-[#00000090]  dark:hover:bg-mainHoverDark ${
          gender === "Female"
            ? "bg-main1 text-bg1 dark:bg-main1Dark dark:text-bg1Dark hover:bg-main1Dark dark:hover:bg-main1 "
            : "hover:bg-mainHover dark:hover:bg-mainHoverDark"
        } `}
      >
        Female
      </button>
      <button
        onClick={() => setGender("Male")}
        className={`p-1 px-6 text-3xl border border-[#00000090]  dark:hover:bg-mainHoverDark ${
          gender === "Male"
            ? "bg-main1 text-bg1 dark:bg-main1Dark dark:text-bg1Dark hover:bg-main1Dark dark:hover:bg-main1"
            : "hover:bg-mainHover dark:hover:bg-mainHoverDark"
        }`}
      >
        Male
      </button>
    </div>
  </li>
);

export default GenderSelection;
