const { default: Image } = require("next/image");
const { useEffect, useState } = require("react");

const fallbackImage =
  "https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png";

const ImageWithFallback = ({
  fallback = fallbackImage,
  alt,
  src,
  ...props
}) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <Image
      alt={alt}
      onError={setError}
      src={error ? fallbackImage : src}
      {...props}
      fill
      style={{
        objectFit: "contain",
      }}
      sizes="100%"
      className="object-contain transition duration-150 ease-linear transform group-hover:scale-105 p-2"
    />
  );
};

export default ImageWithFallback;
