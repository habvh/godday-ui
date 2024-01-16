type ImageProps = {
  imageUrl?: string;
  imageSrcSets?: string[];
  imageAlt?: string;
  children?: React.ReactNode;
  className?: string;
};

export function Image({
  imageUrl,
  imageSrcSets = [],
  imageAlt,
  className,
  ...props
}: ImageProps) {
  return (
    <div
      className={`bg-cover rounded-lg md:rounded-3xl ${className}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundOrigin: "border-box",
      }}
      {...props}
    />
  );
}
