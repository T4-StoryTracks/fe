import Image from "next/image";

interface Props {
  src: string;
}

export default function Thumbnail({ src }: Props) {
  return (
    <div className="aspect-square h-full overflow-hidden rounded-lg">
      <Image
        src={src}
        alt="thumbnail"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
}
