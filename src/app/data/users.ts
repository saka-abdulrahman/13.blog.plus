interface Post {
  postID: number;
  title: string;
  image: string;
  description: string;
  postCreatedAt: string;
}

interface User {
  userId: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  profileImage: string;
  age: number;
  gender: "male" | "female";
  createdAt: string;
  posts: Post[];
}

const users: User[] = [
  {
    userId: 0,
    name: "abdulrahman",
    surname: "saka",
    email: "abdulrahman@gmail.com",
    password: "abdulrahmanss",
    profileImage: "url",
    age: 25,
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
];
