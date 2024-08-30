import React, { useEffect, useState } from "react";
import useStore from "@/store/store";

interface DateOfBirthProps {
  setDateOfBirth: React.Dispatch<React.SetStateAction<string>>;
}

const DateOfBirth: React.FC<DateOfBirthProps> = ({ setDateOfBirth }) => {
  const [maxDate, setMaxDate] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    const thirteenYearsAgo = new Date(
      today.getFullYear() - 13,
      today.getMonth(),
      today.getDate()
    );

    const formattedDate: string = thirteenYearsAgo.toISOString().split("T")[0];
    setMaxDate(formattedDate);
  }, []);

  const dateHandleClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;
    setDateOfBirth(newValue);
  };

  return (
    <li className="flex flex-col justify-center col-span-1 max-[700px]:col-start-1 max-[700px]:col-end-3">
      <label htmlFor="date">Date of Birth</label>
      <div>
        <input
          className="text-3xl"
          type="date"
          onChange={dateHandleClick}
          max={maxDate}
        />
      </div>
    </li>
  );
};

export default DateOfBirth;
