import React from "react";
import { useEffect, useState } from "react";

interface DateOfBirthProps {
  setDateOfBirth: React.Dispatch<React.SetStateAction<string>>;
}

const DateOfBirth: React.FC<DateOfBirthProps> = ({ setDateOfBirth }) => {
  const [maxDate, setMaxDate] = useState<string>("");

  useEffect(() => {
    // Calculate the date 13 years before today
    const today = new Date();
    const thirteenYearsAgo = new Date(
      today.getFullYear() - 13,
      today.getMonth(),
      today.getDate()
    );

    // Format the date to YYYY-MM-DD
    const formattedDate: string = thirteenYearsAgo.toISOString().split("T")[0];
    setMaxDate(formattedDate);
  }, []);

  return (
    <li className="flex flex-col justify-center col-span-1 max-[700px]:col-start-1 max-[700px]:col-end-3">
      <label htmlFor="date">Date of Birth</label>
      <div>
        <input
          className="text-3xl"
          type="date"
          onChange={(e) => {
            setDateOfBirth(e.target.value);
          }}
          max={maxDate}
        />
      </div>
    </li>
  );
};

export default DateOfBirth;
