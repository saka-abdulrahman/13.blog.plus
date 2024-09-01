const PostStats = () => {
  return (
    <div className={`flex flex-col  `}>
      <div className={`flex items-center justify-between`}>
        <h5
          className={
            "cursor-pointer hover:text-black text-sm  max-[460px]:text-xs max-[272px]:text-[0.4rem]"
          }
        >
          no likes yet
        </h5>
        <h5
          className={
            "cursor-pointer hover:text-black max-[460px]:text-sm  max-[374px]:text-xs max-[272px]:text-[0.6rem] "
          }
        >
          no comments yet
        </h5>
      </div>
      <hr className={"bg-[#00000090] h-[2px]"} />
    </div>
  );
};

export default PostStats;
