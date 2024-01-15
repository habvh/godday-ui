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
      className={`bg-cover rounded-3xl p-10 ${className}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      {...props}
    />
  );
}
