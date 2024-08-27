// Component 3
 const PostStats = () => {
  return (
    <div className={`flex flex-col  `}>
      <div className={`flex items-center justify-between`}>
        <h5
          className={
            "cursor-pointer hover:text-black max-[460px]:text-sm max-[272px]:text-[0.6rem]"
          }
        >
          1043 Likes
        </h5>
        <h5
          className={
            "cursor-pointer hover:text-black max-[460px]:text-sm  max-[374px]:text-xs max-[272px]:text-[0.6rem] "
          }
        >
          10 Comments
        </h5>
      </div>
      <hr className={"bg-[#00000090] h-[2px]"} />
    </div>
  );
};

export default PostStats;
