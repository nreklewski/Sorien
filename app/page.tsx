import Image from "next/image";
import Link from "next/link";
import styles from "./ImageShadow.module.css";
import { Metadata } from "next";
import Script from "next/script";
import Reveal from "./components/Reveal";
import RevealGroup from "./components/RevealGroup";

export const metadata: Metadata = {
  title: "Sorien – Nowoczesne rozwiązania IT dla firm",
  description:
    "Sorien tworzy nowoczesne strony wizytówki z optymalnym SEO, rozwiązania AI oraz systemy firmowe. Kompleksowe usługi webowe dla Twojego biznesu.",
  openGraph: {
    title: "Sorien – Profesjonalne rozwiązania IT dla firm",
    description:
      "Sorien tworzy nowoczesne strony wizytówki z optymalnym SEO, automatyzacje i systemy firmowe z naciskiem na jakość.",
    url: "https://www.sorien.pl",
    siteName: "Sorien",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://www.sorien.pl/logo2-sorien-agencja-tworząca-strony-internetowe.png",
        width: 1275,
        height: 620,
        alt: "Sorien – Profesjonalne rozwiązania IT dla firm",
      },
    ],
  },
  alternates: {
    canonical: "https://www.sorien.pl",
  },
};

export default function Home() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Sorien – Nowoczesne rozwiązania IT dla firm",
      url: "https://www.sorien.pl",
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Sorien",
      url: "https://www.sorien.pl",
      telephone: "+48 880 924 444",
      email: "hello@sorien.pl",
      logo: "https://www.sorien.pl/android-chrome-512x512.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Łódź",
        addressCountry: "PL",
      },
      description:
        "Tworzymy nowoczesne strony internetowe z optymalnym SEO, AI i systemy firmowe dla biznesów w całej Polsce.",
    },
  ];
  return (
    <>
      <Script
        id="schema-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className=" text-white">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row justify-between pt-16 md:pt-20 px-4 sm:px-8 lg:px-5 pb-10 md:pb-20 gap-10 md:gap-0 max-w-7xl mx-auto w-full">
          <div className="content-center w-full lg:w-1/2">
            <h1 className="font-sora text-center sm:text-left text-3xl sm:text-4xl md:text-5xl lg:text-[2.6rem] font-bold mb-10 md:mb-6 lg:mb-12 text-white lg:whitespace-nowrap">
              Dedykowane oprogramowanie <br className="hidden sm:flex" />
              dla Twojej{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                innowacyjnej
              </span>{" "}
              firmy
            </h1>
            <h2 className="text-center sm:text-left text-lg sm:text-xl md:text-xl text-gray-300 leading-relaxed">
              Projektujemy nowoczesne systemy dla firm, strony www i rozwiązania
              AI, łącząc przemyślany design, dopracowane UI/UX i najnowszą
              technologię. Pomóż swojej firmie zabłysnąć w sieci!
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mt-14 mb-10">
              <Link
                href="/wycena"
                className="bg-white/10 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold border border-white shadow-lg shadow-black/20 hover:bg-violet-900/80 hover:scale-105 transition-all duration-300 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-opacity-50 text-center w-full sm:w-auto"
              >
                Otrzymaj darmową wycenę
              </Link>
            </div>
          </div>
          <div
            className={`relative w-full hidden lg:w-auto lg:flex ${styles.customShadowImg}`}
          >
            <Image
              src="/sorien-tworzenie-stron-internetowych.png"
              alt="sorien tworzenie stron www"
              width={400}
              height={400}
              quality={90}
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px] object-contain"
            />
          </div>
        </section>

        {/* Arrow Down for Learn More */}
        <div className="flex justify-center -mt-6 md:-mt-10 mb-4">
          <span className="animate-bounce text-blue-400">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>

        {/* What We Do Section */}
        <Reveal>
          <section className="py-14 md:py-20 px-4 sm:px-8 lg:px-30 bg-gradient-to-b from-[#101015] to-[#151515]">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4 text-white">
                Czym się zajmujemy
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                Specjalizujemy się w kompleksowych rozwiązaniach cyfrowych,
                które napędzają rozwój firm i zwiększają efektywność operacyjną.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <RevealGroup intervalMs={120}>
                <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Systemy Wewnętrzne
                  </h3>
                  <p className="text-gray-400">
                    Dedykowane systemy, które rewolucjonizują Twoje procesy i
                    maksymalizują wydajność firmy. Pracuj mądrzej, szybciej,
                    skuteczniej. Wszystko w jednym miejscu.
                  </p>
                  <Link
                    href="/systemy-firmowe"
                    className="mt-6 inline-block px-5 py-2 rounded-full border border-gray-600 bg-gray-900 text-white font-medium shadow-md hover:bg-gray-800 hover:border-purple-500 hover:text-purple-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50"
                  >
                    Dowiedz się więcej
                  </Link>
                </div>

                <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Strony Internetowe
                  </h3>
                  <p className="text-gray-400">
                    Dobrze pozycjonujące się, responsywne strony. Twoja cyfrowa
                    wizytówka, która przyciąga klientów i zostawia trwałe
                    wrażenie dzięki przemyślanemu designowi.
                  </p>
                  <Link
                    href="/strony-internetowe"
                    className="mt-6 inline-block px-5 py-2 rounded-full border border-gray-600 bg-gray-900 text-white font-medium shadow-md hover:bg-gray-800 hover:border-purple-500 hover:text-purple-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50"
                  >
                    Dowiedz się więcej
                  </Link>
                </div>

                <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <rect
                        x="5"
                        y="7"
                        width="14"
                        height="15"
                        rx="2"
                        strokeWidth="2"
                      />
                      <circle cx="8" cy="11" r="1" fill="currentColor" />
                      <circle cx="16" cy="11" r="1" fill="currentColor" />
                      <rect
                        x="7"
                        y="17"
                        width="10"
                        height="1"
                        rx="0.5"
                        fill="currentColor"
                      />

                      <path d="M12 3v4" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="12" cy="2" r="1.5" fill="currentColor" />
                      <rect
                        x="1"
                        y="12"
                        width="2"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      />
                      <rect
                        x="21"
                        y="12"
                        width="2"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Rozwiązania AI</h3>
                  <p className="text-gray-400">
                    Inteligentne, dopasowane do Twojego biznesu rozwiązania AI.
                    Automatyzują procesy, wspierają decyzje i wyróżniają Twoją
                    firmę na tle konkurencji.
                  </p>
                  <Link
                    href="/rozwiazania-ai-dla-firm"
                    className="mt-6 inline-block px-5 py-2 rounded-full border border-gray-600 bg-gray-900 text-white font-medium shadow-md hover:bg-gray-800 hover:border-purple-500 hover:text-purple-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50"
                  >
                    Dowiedz się więcej
                  </Link>
                </div>
              </RevealGroup>
            </div>
          </section>
        </Reveal>

        {/* Why Choose Us Section */}
        <Reveal>
          <section className="py-14 md:py-20 px-4 sm:px-8 lg:px-30 relative overflow-hidden">
            {/* Background floating elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/40 to-purple-600/25 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/40 to-pink-600/25 rounded-full blur-xl animate-pulse delay-1000"></div>
              <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/40 to-cyan-600/20 rounded-full blur-xl animate-pulse delay-500"></div>
              <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-r from-purple-500/40 to-blue-600/25 rounded-full blur-xl animate-pulse delay-1500"></div>
            </div>

            <div className="text-center mb-10 md:mb-16 relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4 text-white">
                Dlaczego my?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                Łączymy wiedzę techniczną z biznesowym podejściem, by dostarczać
                rozwiązania, które naprawdę robią różnicę.
              </p>
            </div>

            <div className="relative z-10">
              {/* First row - 2 items */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 lg:mb-24 ">
                {/* Fully Customizable */}
                <RevealGroup intervalMs={140}>
                  <div className="group relative">
                    <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-120 transition-transform duration-300 flex-shrink-0">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 27 27"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8a2 2 0 012-2h3a1 1 0 001-1V3a2 2 0 114 0v2a1 1 0 001 1h3a2 2 0 012 2v3a1 1 0 001 1h2a2 2 0 110 4h-2a1 1 0 00-1 1v3a2 2 0 01-2 2h-3a1 1 0 00-1 1v2a2 2 0 11-4 0v-2a1 1 0 00-1-1H5a2 2 0 01-2-2v-3a1 1 0 011-1H6a2 2 0 100-4H4a1 1 0 01-1-1V8z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-white">
                            W pełni personalizowane
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            Rozwiązania szyte na miarę Twoich potrzeb. Tworzymy
                            unikalne projekty i funkcjonalności idealnie
                            dopasowane do Twojej wizji.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cutting-Edge Technologies */}
                  <div className="group relative">
                    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 9h6v6H9V9z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 9h2m14 0h2M3 15h2m14 0h2M9 3v2m6-2v2M9 19v2m6-2v2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-white">
                            Nowoczesne technologie
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            Korzystamy z Next.js dla najlepszego SEO i
                            wydajności. Wdrażamy najnowsze technologie, by Twój
                            projekt wyróżniał się w sieci.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealGroup>
              </div>

              {/* Second row - 2 items */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Lightning Performance */}
                <RevealGroup intervalMs={140}>
                  <div className="group relative">
                    <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 backdrop-blur-sm border border-green-500/20 rounded-3xl p-8 hover:border-green-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-white">
                            Błyskawiczna wydajność
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            Aplikacje zoptymalizowane pod kątem szybkości i
                            wydajności. Gwarantujemy świetną jakość i minimalny
                            czas ładowania poprawiający pozycjonowanie.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Full Post-Launch Support */}
                  <div className="group relative">
                    <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-white">
                            Wsparcie po wdrożeniu
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            Pełna elastyczność i szybkie wsparcie techniczne po
                            wdrożeniu. Łatwa rozbudowa i pomoc techniczna
                            pozwalają Twojemu biznesowi rosnąć.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealGroup>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Our Process Section */}
        <Reveal>
          <section className="py-14 md:py-20 px-4 sm:px-8 lg:px-30 bg-gradient-to-b from-[#0d0c10] to-[#101010]">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4 text-white">
                Nasz proces
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                Sprawdzona metodologia, która gwarantuje realizację projektu na
                czas, w budżecie i powyżej oczekiwań.
              </p>
            </div>
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line with glow */}
              <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-900 via-blue-700 to-purple-900 transform -translate-x-1/2 z-0 shadow-[0_0_24px_8px_rgba(55,48,163,0.3)]"></div>
              <div className="flex flex-col gap-20 relative z-10">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between group">
                  <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1 flex justify-end">
                    <div className="inline-block bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-2xl shadow-lg p-6 transition-transform duration-300 group-hover:scale-105">
                      <div className="flex items-center justify-end mb-2">
                        {/* Icon: Magnifying glass */}
                        <svg
                          className="w-7 h-7 text-blue-400 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <circle cx="11" cy="11" r="8" strokeWidth="2" />
                          <line
                            x1="21"
                            y1="21"
                            x2="16.65"
                            y2="16.65"
                            strokeWidth="2"
                          />
                        </svg>
                        <h3 className="text-lg font-semibold text-white">
                          Analiza potrzeb
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Analizujemy potrzeby, cele i grupę docelową, by
                        opracować skuteczną strategię.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:w-1/12 justify-center order-1 md:order-2 relative">
                    {/* Timeline dot with pulse */}
                    <div className="relative z-10">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-900 opacity-30"></span>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-purple-900 rounded-full flex items-center justify-center text-2xl font-bold text-white border-4 border-[#151515] shadow-lg">
                        1
                      </div>
                    </div>
                    {/* Connecting line */}
                    <div className="hidden md:block w-1 flex-1 bg-gradient-to-b from-blue-900 via-blue-700 to-purple-900 mx-auto"></div>
                  </div>
                  <div className="md:w-1/2 order-3"></div>
                </div>
                {/* Step 2 */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between group">
                  <div className="md:w-1/2 order-1"></div>
                  <div className="flex flex-col items-center md:w-1/12 justify-center order-2 relative">
                    {/* Timeline dot with pulse */}
                    <div className="relative z-10">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-900 opacity-30"></span>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-purple-900 rounded-full flex items-center justify-center text-2xl font-bold text-white border-4 border-[#151515] shadow-lg">
                        2
                      </div>
                    </div>
                    {/* Connecting line */}
                    <div className="hidden md:block w-1 flex-1 bg-gradient-to-b from-blue-900 via-blue-700 to-purple-900 mx-auto"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 md:text-left order-3 flex justify-start">
                    <div className="inline-block bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl shadow-lg p-6 transition-transform duration-300 group-hover:scale-105">
                      <div className="flex items-center mb-2">
                        {/* Icon: Pencil/ruler */}
                        <svg
                          className="w-7 h-7 text-pink-400 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path
                            d="M16.862 3.487a2.5 2.5 0 013.535 3.535L7.5 19.92l-4 1 1-4L16.862 3.487z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <h3 className="text-lg font-semibold text-white">
                          Projektowanie
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Nasi projektanci tworzą intuicyjne, piękne interfejsy
                        zgodne z Twoją marką i oczekiwaniami użytkowników.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between group">
                  <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1 flex justify-end">
                    <div className="inline-block bg-gradient-to-br from-blue-900/40 to-green-900/40 rounded-2xl shadow-lg p-6 transition-transform duration-300 group-hover:scale-105">
                      <div className="flex items-center justify-end mb-2">
                        {/* Icon: Code */}
                        <svg
                          className="w-7 h-7 text-green-400 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <polyline
                            points="16 18 22 12 16 6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <polyline
                            points="8 6 2 12 8 18"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <h3 className="text-lg font-semibold text-white">
                          Programowanie
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Nasi programiści realizują Twoją wizję, korzystając z
                        najnowszych technologii i skutecznych praktyk.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:w-1/12 justify-center order-1 md:order-2 relative">
                    {/* Timeline dot with pulse */}
                    <div className="relative z-10">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-900 opacity-30"></span>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-purple-900 rounded-full flex items-center justify-center text-2xl font-bold text-white border-4 border-[#151515] shadow-lg">
                        3
                      </div>
                    </div>
                    {/* Connecting line */}
                    <div className="hidden md:block w-1 flex-1 bg-gradient-to-b from-blue-900 via-blue-700 to-purple-900 mx-auto"></div>
                  </div>
                  <div className="md:w-1/2 order-3"></div>
                </div>
                {/* Step 4 */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between group">
                  <div className="md:w-1/2 order-1"></div>
                  <div className="flex flex-col items-center md:w-1/12 justify-center order-2 relative">
                    {/* Timeline dot with pulse */}
                    <div className="relative z-10">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-900 opacity-30"></span>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-purple-900 rounded-full flex items-center justify-center text-2xl font-bold text-white border-4 border-[#151515] shadow-lg">
                        4
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 md:text-left order-3 flex justify-start">
                    <div className="inline-block bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-2xl shadow-lg p-6 transition-transform duration-300 group-hover:scale-105">
                      <div className="flex items-center mb-2">
                        {/* Icon: Rocket */}
                        <svg
                          className="w-7 h-7 text-cyan-400 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15 7h4v4"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <h3 className="text-lg font-semibold text-white">
                          Wdrożenie
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Wdrażamy rozwiązanie z pełnym testowaniem i zapewniamy
                        wsparcie oraz pomoc w utrzymaniu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Portfolio Section */}
        <Reveal>
          <section className="py-14 md:py-20 px-4 sm:px-8 lg:px-30 bg-gradient-to-b from-[#101011] to-[#0e0d12]">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4 text-white">
                Nasze realizacje
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                Realizację wspierające rozwój firm naszych klientów.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Business Card Website */}
              <Link href="/strony-internetowe">
                <div className="group relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-purple-500 transition-all duration-300 mb-4 sm:mb-0 p-1 sm:p-2">
                  <div className="aspect-[5/4] flex items-center justify-center relative">
                    <Image
                      src="/profesjonalna-wizytówka-tworzenie-stron-www.png"
                      alt="Strony internetowe wizytówki"
                      fill
                      className="object-cover w-full h-full blur-[2px] group-hover:blur-[1px] transition duration-300"
                      style={{ zIndex: 1 }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                      <div className="bg-white/70 rounded-xl px-4 py-2 flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          Strony wizytówki
                        </h3>
                        <p className="text-gray-700 text-base font-medium">
                          Profesjonalny wygląd
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Ecommerce Store */}
              <Link href="/strony-internetowe">
                <div className="group relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-purple-500 transition-all duration-300 mb-4 sm:mb-0 p-1 sm:p-2">
                  <div className="aspect-[5/4] flex items-center justify-center relative">
                    <Image
                      src="/sklepy-internetowe-profesjonalne-projekcty-e-commerce.png"
                      alt="Tworzenie sklepów internetowych"
                      fill
                      className="object-cover w-full h-full blur-[2px] group-hover:blur-[1px] transition duration-300"
                      style={{ zIndex: 1 }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                      <div className="bg-white/70 rounded-xl px-4 py-2 flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          Sklepy internetowe
                        </h3>
                        <p className="text-gray-700 text-base font-medium">
                          Nowoczesne zakupy
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Internal System */}
              <Link href="/systemy-firmowe">
                <div className="group relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-purple-500 transition-all duration-300 mb-4 sm:mb-0 p-1 sm:p-2">
                  <div className="aspect-[5/4] flex items-center justify-center relative">
                    <Image
                      src="/systemy-dla-firm-profesjonalna-agencja.png"
                      alt="Tworzenie systemów firmowych"
                      fill
                      className="object-cover w-full h-full blur-[2px] group-hover:blur-[1px] transition duration-300"
                      style={{ zIndex: 1 }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                      <div className="bg-white/70 rounded-xl px-4 py-2 flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          Systemy wewnętrzne
                        </h3>
                        <p className="text-gray-700 text-base font-medium">
                          Narzędzia biznesowe
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </Reveal>

        {/* CTA Section */}
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
                    zostawić konkurencję w tyle — wraz z szybką, bezpłatną
                    wyceną.
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
      </div>
    </>
  );
}
