import React from "react";
import Link from "next/link";
import Image from "next/image";
import InteractivePhoto from "../components/InteractivePhoto";
import Reveal from "../components/Reveal";
import VerticalTabLayout from "./tablayout";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Strony www dla restauracji | Menu online",
  description:
    "Strony www dla restauracji z menu online, rezerwacją i integracjami. Zwiększ liczbę gości o 40-60%. Darmowa wycena. | Sorien",
  openGraph: {
    title: "Strony www dla restauracji | Menu online",
    description:
      "Nowoczesne strony internetowe dla restauracji z systemami rezerwacji, menu online i integracjami z platformami dostawczymi.",
    url: "https://www.sorien.pl/strony-www-dla-restauracji",
    siteName: "Sorien",
    locale: "pl_PL",
    type: "website",
  },
  alternates: {
    canonical: "https://www.sorien.pl/strony-www-dla-restauracji",
  },
};

export default function Home() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Sorien – Strony www dla restauracji",
      url: "https://www.sorien.pl/strony-www-dla-restauracji",
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
        "Tworzymy nowoczesne strony internetowe dla restauracji z SEO, systemami rezerwacji online i rozwiązaniami IT.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Ile kosztuje profesjonalna strona internetowa dla restauracji?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Inwestycja w stronę internetową dla restauracji zależy od zakresu funkcjonalności i poziomu zaawansowania. W Sorien oferujemy elastyczne pakiety - od podstawowych stron z menu po kompleksowe platformy z systemami rezerwacji, zamówień online i integracjami z dostawcami. Każdy projekt jest indywidualnie wyceniany, a zwrot z inwestycji następuje szybko dzięki zwiększonej liczbie gości.",
          },
        },
        {
          "@type": "Question",
          name: "Jakie funkcje powinna mieć nowoczesna strona restauracji?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Współczesna strona restauracji musi być w pełni responsywna, szybka i zoptymalizowana pod kątem wyszukiwarek. W Sorien projektujemy strony z interaktywnym menu, systemem rezerwacji, galerią zdjęć potraw oraz integracjami z platformami dostawczymi. Dodatkowo implementujemy narzędzia do pozycjonowania lokalnego, aby restauracja była łatwo znajdowana przez potencjalnych gości.",
          },
        },
        {
          "@type": "Question",
          name: "Czy warto inwestować w stronę www dla małej restauracji?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutnie tak! Nawet małe restauracje mogą znacząco zwiększyć swoją bazę klientów dzięki profesjonalnej stronie internetowej. W Sorien tworzymy strony dostosowane do budżetu i potrzeb każdej restauracji. Dzięki lokalnemu SEO i optymalizacji mobilnej, Twoja strona będzie skutecznie przyciągać gości z okolicy i budować rozpoznawalność marki.",
          },
        },
        {
          "@type": "Question",
          name: "Jak długo trwa proces tworzenia strony internetowej dla lokalu gastronomicznego?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Czas realizacji projektu zależy od jego złożoności i zakresu funkcjonalności. Standardowe strony z menu realizujemy w Sorien w ciągu 2-3 tygodni, podczas gdy bardziej zaawansowane platformy z systemami rezerwacji i integracjami mogą wymagać 4-6 tygodni. Zawsze informujemy o dokładnym harmonogramie na początku współpracy i dotrzymujemy ustalonych terminów.",
          },
        },
        {
          "@type": "Question",
          name: "Czy strona internetowa rzeczywiście pomoże mi pozyskać nowych gości?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tak, to potwierdzone! Nasze strony internetowe dla branży gastronomicznej są projektowane z myślą o konwersji i pozyskiwaniu gości. Dzięki zaawansowanemu SEO, optymalizacji pod kątem wyszukiwarek lokalnych i intuicyjnym interfejsom, nasi klienci regularnie raportują wzrost liczby rezerwacji o 40-60% w ciągu pierwszych miesięcy po uruchomieniu strony.",
          },
        },
      ],
    },
  ];
  return (
    <>
      <Script
        id="schema-restaurant"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="text-white">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div>
                <h1 className="font-sora text-center sm:text-left text-3xl sm:text-4xl md:text-4xl lg:text-[2.6rem] font-bold mb-10 md:mb-6 lg:mb-12 text-white">
                  Profesjonalne strony internetowe dla restauracji i lokali
                </h1>
                <p className="text-center sm:text-left mt-6 text-base sm:text-lg text-white/80 max-w-prose">
                  Tworzymy nowoczesne <Link href="/strony-internetowe" className="text-orange-400 hover:text-orange-300 underline">strony www</Link> dla restauracji i lokali
                  gastronomicznych. Pomagają one zwiększyć liczbę gości,
                  usprawnić obsługę i zoptymalizować codzienne operacje w Twojej
                  restauracji. Dla bardziej zaawansowanych potrzeb oferujemy również <Link href="/systemy-firmowe" className="text-orange-400 hover:text-orange-300 underline">systemy firmowe</Link> do zarządzania restauracją.
                </p>
                <div className="mt-8 flex justify-center sm:justify-start">
                  <Link
                    href="/wycena"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg shadow-white/10 ring-1 ring-white/40 transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/80"
                    aria-label="Przejdź do wyceny"
                  >
                    Otrzymaj darmową wycenę
                  </Link>
                </div>
              </div>

              {/* Right: Interactive Photo */}
              <InteractivePhoto
                src="/strona-www-dla-restauracji-i-lokali-gastronomicznych.png"
                alt="Profesjonalna strona internetowa dla restauracji z menu online i systemem rezerwacji - realizacja Sorien"
                width={1280}
                height={853}
                priority
              />
            </div>
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

        <Reveal>
          <VerticalTabLayout />
        </Reveal>
        <Reveal>
          <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-white/90">
              <article className="space-y-10 leading-relaxed">
                <h2 className="text-center text-2xl sm:text-4xl xl:text-5xl font-bold text-white">
                  Najczęściej zadawane pytania o strony www dla restauracji
                </h2>

                {/* 1 */}
                <div className="md:flex md:justify-start">
                  <div className="md:w-[92%] bg-white/5 border border-gray-700/50 rounded-xl p-6 hover:bg-white/10 hover:border-orange-400/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 ease-out cursor-pointer">
                    <h3 className="font-semibold text-white text-base">
                      Ile kosztuje profesjonalna strona internetowa dla
                      restauracji?
                    </h3>
                    <p className="mt-3 text-gray-300 text-sm">
                      Inwestycja w stronę internetową dla restauracji zależy od
                      zakresu funkcjonalności i poziomu zaawansowania. W Sorien
                      oferujemy elastyczne pakiety - od podstawowych stron z
                      menu po kompleksowe platformy z systemami rezerwacji,
                      zamówień online i integracjami z dostawcami. Każdy projekt
                      jest indywidualnie wyceniany, a zwrot z inwestycji
                      następuje szybko dzięki zwiększonej liczbie gości.
                    </p>
                  </div>
                </div>

                {/* 2 */}
                <div className="md:flex md:justify-end">
                  <div className="md:w-[92%] bg-white/5 border border-gray-700/50 rounded-xl p-6 hover:bg-white/10 hover:border-red-400/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 ease-out cursor-pointer">
                    <h3 className="font-semibold text-white text-base">
                      Jakie funkcje powinna mieć nowoczesna strona restauracji?
                    </h3>
                    <p className="mt-3 text-gray-300 text-sm">
                      Współczesna strona restauracji musi być w pełni
                      responsywna, szybka i zoptymalizowana pod kątem
                      wyszukiwarek. W Sorien projektujemy strony z interaktywnym
                      menu, systemem rezerwacji, galerią zdjęć potraw oraz
                      integracjami z platformami dostawczymi. Dodatkowo
                      implementujemy narzędzia do pozycjonowania lokalnego, aby
                      restauracja była łatwo znajdowana przez potencjalnych
                      gości.
                    </p>
                  </div>
                </div>

                {/* 3 */}
                <div className="md:flex md:justify-start">
                  <div className="md:w-[92%] bg-white/5 border border-gray-700/50 rounded-xl p-6 hover:bg-white/10 hover:border-yellow-400/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 ease-out cursor-pointer">
                    <h3 className="font-semibold text-white text-base">
                      Czy warto inwestować w stronę www dla małej restauracji?
                    </h3>
                    <p className="mt-3 text-gray-300 text-sm">
                      Absolutnie tak! Nawet małe restauracje mogą znacząco
                      zwiększyć swoją bazę klientów dzięki profesjonalnej
                      stronie internetowej. W Sorien tworzymy strony dostosowane
                      do budżetu i potrzeb każdej restauracji. Dzięki lokalnemu
                      SEO i optymalizacji mobilnej, Twoja strona będzie
                      skutecznie przyciągać gości z okolicy i budować
                      rozpoznawalność marki.
                    </p>
                  </div>
                </div>

                {/* 4 */}
                <div className="md:flex md:justify-end">
                  <div className="md:w-[92%] bg-white/5 border border-gray-700/50 rounded-xl p-6 hover:bg-white/10 hover:border-green-400/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 ease-out cursor-pointer">
                    <h3 className="font-semibold text-white text-base">
                      Jak długo trwa proces tworzenia strony internetowej dla
                      lokalu gastronomicznego?
                    </h3>
                    <p className="mt-3 text-gray-300 text-sm">
                      Czas realizacji projektu zależy od jego złożoności i
                      zakresu funkcjonalności. Standardowe strony z menu
                      realizujemy w Sorien w ciągu 2-3 tygodni, podczas gdy
                      bardziej zaawansowane platformy z systemami rezerwacji i
                      integracjami mogą wymagać 4-6 tygodni. Zawsze informujemy
                      o dokładnym harmonogramie na początku współpracy i
                      dotrzymujemy ustalonych terminów.
                    </p>
                  </div>
                </div>

                {/* 5 */}
                <div className="md:flex md:justify-start">
                  <div className="md:w-[92%] bg-white/5 border border-gray-700/50 rounded-xl p-6 hover:bg-white/10 hover:border-orange-400/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 ease-out cursor-pointer">
                    <h3 className="font-semibold text-white text-base">
                      Czy strona internetowa rzeczywiście pomoże mi pozyskać
                      nowych gości?
                    </h3>
                    <p className="mt-3 text-gray-300 text-sm">
                      Tak, to potwierdzone! Nasze strony internetowe dla branży
                      gastronomicznej są projektowane z myślą o konwersji i
                      pozyskiwaniu gości. Dzięki zaawansowanemu SEO,
                      optymalizacji pod kątem wyszukiwarek lokalnych i
                      intuicyjnym interfejsom, nasi klienci regularnie raportują
                      wzrost liczby rezerwacji o 40-60% w ciągu pierwszych
                      miesięcy po uruchomieniu strony.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="pt-12 md:pt-20 px-4 sm:px-8 lg:px-30">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4 text-white">
                Kompleksowe rozwiązania cyfrowe dla restauracji
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg">
                Odkryj nasze zaawansowane narzędzia IT, które pomogą Ci zbudować
                silną obecność online i zoptymalizować zarządzanie restauracją.
                Każde rozwiązanie jest dostosowane do specyfiki branży
                gastronomicznej.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="py-10 md:py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Zarządzanie restauracją */}
                <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 hover:border-orange-400/40 transition-all duration-500 hover:scale-105">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Zarządzanie restauracją - System firmowy
                    </h3>
                    <p className="text-gray-300 text-lg">
                      Zaawansowane narzędzia do kompleksowego zarządzania
                      restauracją, które usprawniają codzienną pracę i
                      zwiększają efektywność zespołu.
                    </p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">
                        System rezerwacji online
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">
                        Zarządzanie menu i cenami
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">System zamówień</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">Analityka sprzedaży</span>
                    </li>
                  </ul>
                </div>

                {/* Marketing cyfrowy */}
                <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-sm border border-green-500/20 rounded-3xl p-8 hover:border-green-400/40 transition-all duration-500 hover:scale-105">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Marketing cyfrowy - Pozycjonowanie
                    </h3>
                    <p className="text-gray-300 text-lg">
                      Kompleksowe narzędzia marketingowe, które pomagają budować
                      markę restauracji i przyciągać nowych gości z internetu.
                    </p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">
                        Pozycjonowanie w Google
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">
                        Social media integration
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">Kampanie reklamowe</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">Content marketing</span>
                    </li>
                  </ul>
                </div>

                {/* Automatyzacja procesów */}
                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:scale-105">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Automatyzacja procesów - AI
                    </h3>
                    <p className="text-gray-300 text-lg">
                      Inteligentne systemy automatyzacji, które oszczędzają czas
                      i pozwalają skupić się na obsłudze gości.
                    </p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">
                        Automatyczne powiadomienia
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">
                        Integracja z dostawcami
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">Email marketing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">
                        Raportowanie automatyczne
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="py-16 md:py-24 bg-[#0f0d0d]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Left Column - Content */}
                <div className="flex-1 max-w-2xl">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                    Zacznij swoją cyfrową transformację już dziś
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                    Tysiące restauracji już zaufało naszym rozwiązaniom IT.
                    Dołącz do nich i odkryj, jak nowoczesna technologia może
                    zrewolucjonizować sposób prowadzenia Twojej restauracji.
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
                        Darmowa analiza obecnej sytuacji restauracji
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
                        Spersonalizowane rozwiązania dla Twojego biznesu
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
                        Kompleksowe wsparcie i szkolenia zespołu
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
                      alt="Sorien - kompleksowe rozwiązania IT dla restauracji: strony www, systemy zarządzania i automatyzacja"
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
