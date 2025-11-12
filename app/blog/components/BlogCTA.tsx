import Image from "next/image";
import Link from "next/link";
import Reveal from "../../components/Reveal";

export default function BlogCTA() {
  return (
    <Reveal>
      <section className="py-16 md:py-24 bg-[#0f0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 relative">
            {/* Left Column - Content */}
            <div className="flex-1 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white text-center md:text-left">
                Rozwijaj swoją firmę z pomocą Sorien
              </h2>
              <p className="text-base md:text-xl text-gray-300 mb-8 leading-relaxed text-center md:text-left">
                W ciągu 24 godzin odkryj, jak nasze personalizowane
                oprogramowanie może wynieść Twój biznes na wyższy poziom i
                zostawić konkurencję w tyle — wraz z szybką, bezpłatną wyceną.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-300">
                  <svg
                    className="w-6 h-6 mr-3 text-[#4a37f5]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base md:text-lg">
                    Bezpłatna konsultacja i analiza potrzeb
                  </span>
                </div>
                <div className="flex items-center text-gray-300">
                  <svg
                    className="w-6 h-6 mr-3 text-[#4a37f5]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base md:text-lg">
                    Indywidualne podejście do każdego biznesu
                  </span>
                </div>
                <div className="flex items-center text-gray-300">
                  <svg
                    className="w-6 h-6 mr-3 text-[#4a37f5]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base md:text-lg">
                    Pełne wsparcie techniczne i szkolenia
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/wycena"
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                >
                  Skontaktuj się z nami
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="hidden sm:block sm:absolute sm:right-3 sm:bottom-3 sm:w-28 md:w-40 z-0 pointer-events-none lg:static lg:w-auto lg:z-auto lg:pointer-events-auto lg:flex-1 lg:flex lg:justify-center">
              <div className="w-full max-w-xl lg:w-full">
                <Image
                  src="/Sorien-Rozwiazania-IT-dla-firm.png"
                  alt="Rozwiązania IT dla firm - Sorien"
                  width={1600}
                  height={900}
                  quality={90}
                  className="w-full h-auto rounded-2xl "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}


