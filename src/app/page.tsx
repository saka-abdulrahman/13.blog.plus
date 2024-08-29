// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Posts from "./Components/Posts/Posts";

const Home = () => {
  // const [currentPath, setCurrentPath] = useState<string>("");

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setCurrentPath(window.location.pathname); // Get the current path from window.location
  //   }
  // }, []);

  const [isDark, setIsDark] = useState<boolean>(false);

  const [users, setUsers] = useState<
    Array<{
      userId: number;
      userType: string;
      name: string;
      surname: string;
      email: string;
      password: string;
      profileImage: string;
      age: String;
      gender: string;
      createdAt: string;
      posts: Array<{
        postID: number;
        title: string;
        image: string;
        description: string;
        postCreatedAt: string;
      }>;
    }>
  >([
    {
      userId: 0,
      usetType: "admin",
      name: "abdulrahman",
      surname: "saka",
      email: "abdulrahman@gmail.com",
      password: "1234",
      profileImage: "url",
      age: "02/02/2002",
      gender: "male",
      createdAt: "",
      posts: [
        {
          postID: 0,
          title: "abdulrahman is good",
          image: "/post1.jpg",
          description: "abdulrahman is good",
          postCreatedAt: " ",
        },
      ],
    },
  ]);

  console.log("hello");

  return (
    <div className={` ${isDark ? "dark" : ""}    `}>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <div className="bg-bg2 dark:bg-bg2Dark   min-h-[100vh] pt-20 max-[700px]:pt-7 flex justify-evenly items-c ">
        <div className="max-[700px]:hidden "></div>
        <div className="max-[700px]:hidden "></div>
        <Posts />
        <div className="max-[700px]:hidden "></div>
      </div>
      <Menu />
    </div>
  );
};

export default Home;
