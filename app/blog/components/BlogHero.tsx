import Image from "next/image";

interface BlogHeroProps {
  imageSrc: string;
  imageAlt: string;
}

export default function BlogHero({ imageSrc, imageAlt }: BlogHeroProps) {
  return (
    <section className="relative w-full pb-8  md:pb-12">
      {/* Decorative Background Block */}
      <div className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-[1500px] h-[300px] md:h-[400px] bg-gradient-to-br from-[#101015] via-[#151515] to-[#101015]"></div>

      {/* Cover Image - Overlapping */}
      <div className="relative max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 -bottom-8 md:-bottom-20 z-10">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
