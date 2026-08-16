import Image from "next/image";
import Reveal from "../UI/Reveal";

type Props = {
  gallery: { src: string; alt: string }[];
};

const CaseStudyGallery = ({ gallery }: Props) => {
  if (!gallery.length) return null;

  return (
    <Reveal className="border-t border-border py-14 md:py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {gallery.map((image) => (
          <div
            key={image.src}
            className="relative aspect-video overflow-hidden rounded-lg border border-border bg-surface"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </Reveal>
  );
};

export default CaseStudyGallery;
