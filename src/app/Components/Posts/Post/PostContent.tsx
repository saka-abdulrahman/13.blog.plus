const PostContent = ({ description }: { description: string }) => {
  return (
    <div className={``}>
      <p
        className={`p-1 max-[460px]:text-sm max-[374px]:text-xs text-base text-postText1 dark:text-postText1Dark overflow-hidden `}
      >
        {description}
      </p>
    </div>
  );
};

export default PostContent;
