import { useEffect, useState } from "react";

const PostImage = ({ image }: { image: File | null }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    if (image) {
      const objectUrl = URL.createObjectURL(image);
      setImageSrc(objectUrl);

      // Clean up the URL.createObjectURL() to avoid memory leaks
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [image]);

  return <div>{imageSrc ? <img src={imageSrc} alt="" /> : <></>}</div>;
};

export default PostImage;
