import Image from "next/image";

interface BlogHeroProps {
  imageSrc: string;
  imageAlt: string;
}

export default function BlogHero({ imageSrc, imageAlt }: BlogHeroProps) {
  return (
    <section className="relative w-full pt-16 pb-8 md:pt-20 md:pb-12">
      {/* Decorative Background Block */}
      <div className="absolute top-15 left-1/2 -translate-x-1/2 w-[1500px] h-[350px] md:h-[450px] bg-gradient-to-br from-[#101015] via-[#151515] to-[#101015]"></div>

      {/* Cover Image - Overlapping */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -bottom-16 md:-bottom-20 z-10">
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


