import Image from "next/image"

export const NotionImage: React.FC<{ src: string; alt: string }> = ({
  src,
  alt,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      placeholder="blur"
      unoptimized
    />
  )
}
