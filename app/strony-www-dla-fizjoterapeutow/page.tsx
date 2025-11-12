import React from "react";
import Link from "next/link";
import Image from "next/image";
import InteractivePhoto from "../components/InteractivePhoto";
import Reveal from "../components/Reveal";
import VerticalTabLayout from "./VerticalTabLayout";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Strony dla fizjoterapeutów | Rehabilitacja",
  description:
    "Strony dla fizjoterapeutów z rezerwacją wizyt i SEO. Zwiększ liczbę pacjentów. Profesjonalne rozwiązania IT dla gabinetów rehabilitacji. | Sorien",
  openGraph: {
    title: "Strony dla fizjoterapeutów | Rehabilitacja",
    description:
      "Nowoczesne strony internetowe dla fizjoterapeutów z SEO, rezerwacją wizyt, dokumentacją medyczną i systemami zarządzania gabinetem rehabilitacji.",
    url: "https://www.sorien.pl/strony-www-dla-fizjoterapeutow",
    siteName: "Sorien",
    locale: "pl_PL",
    type: "website",
  },
  alternates: {
    canonical: "https://www.sorien.pl/strony-www-dla-fizjoterapeutow",
  },
};

export default function Home() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Sorien – Strony www dla fizjoterapeutów",
      url: "https://www.sorien.pl/strony-www-dla-fizjoterapeutow",
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
        "Tworzymy nowoczesne strony internetowe dla fizjoterapeutów, gabinetów rehabilitacji i klinik fizjoterapii z SEO, systemami rezerwacji wizyt, dokumentacją medyczną i rozwiązaniami IT.",
    },
  ];
  return (
    <>
      <Script
        id="schema-physio"
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
                  Profesjonalne strony internetowe dla fizjoterapeutów i gabinetów
                </h1>
                <p className="text-center sm:text-left mt-6 text-base sm:text-lg text-white/80 max-w-prose">
                  Tworzymy nowoczesne i skuteczne strony internetowe dla
                  fizjoterapeutów, gabinetów rehabilitacji i klinik fizjoterapii
                  – dopasowane do potrzeb pacjentów potrzebujących
                  rehabilitacji, terapii ruchowej i leczenia urazów.
                </p>
                <div className="flex justify-center sm:justify-start mt-8">
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
                src="/strona-www-dla-fizjoterapeuty.png"
                alt="Profesjonalna strona internetowa dla fizjoterapeutów z rezerwacją wizyt i SEO - realizacja Sorien"
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
                  Pytania o strony www dla fizjoterapeutów i gabinetów
                  rehabilitacji
                </h2>

                {/* 1 */}
                <div className="md:flex md:justify-start">
                  <div className="md:w-[92%] bg-white/5 border border-gray-700/50 rounded-xl p-6 hover:bg-white/10 hover:border-blue-400/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 ease-out cursor-pointer">
                    <h3 className="font-semibold text-white text-base">
                      Ile kosztuje strona internetowa dla gabinetu fizjoterapii?
                    </h3>
                    <p className="mt-3 text-gray-300 text-sm">
                      Koszt stworzenia strony www dla gabinetu fizjoterapii
                      zależy od funkcji i rozbudowania projektu. W Sorien
                      przygotowujemy zarówno proste strony wizytówki, jak i
                      rozbudowane portale z systemem rezerwacji wizyt
                      rehabilitacyjnych, dokumentacją medyczną, cennikiem
                      terapii i blogiem o rehabilitacji. Cena zawsze jest
                      dopasowana do potrzeb gabinetu rehabilitacji, a inwestycja
                      szybko się zwraca dzięki pozyskaniu nowych pacjentów
                      potrzebujących fizjoterapii.
                    </p>
                  </div>
                </div>

                {/* 2 */}
                <div className="md:flex md:justify-end">
                  <div className="md:w-[92%] bg-white/5 border border-gray-700/50 rounded-xl p-6 hover:bg-white/10 hover:border-purple-400/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 ease-out cursor-pointer">
                    <h3 className="font-semibold text-white text-base">
                      Jak stworzyć stronę internetową dla kliniki fizjoterapii?
                    </h3>
                    <p className="mt-3 text-gray-300 text-sm">
                      Profesjonalna strona dla kliniki fizjoterapii powinna być
                      przejrzysta, responsywna i zoptymalizowana pod SEO. W
                      Sorien tworzymy projekty, które prezentują ofertę gabinetu
                      rehabilitacji, specjalizacje terapeutyczne oraz ułatwiają
                      pacjentom zapis na konsultację fizjoterapeutyczną.
                      Dodatkowo dbamy o to, by strona była widoczna w Google na
                      frazy typu &quot;rehabilitacja [miasto]&quot;,
                      &quot;fizjoterapeuta [miasto]&quot; czy &quot;terapia
                      ruchowa [miasto]&quot;.
                    </p>
                  </div>
                </div>

                {/* 3 */}
                <div className="md:flex md:justify-start">
                  <div className="md:w-[92%] bg-white/5 border border-gray-700/50 rounded-xl p-6 hover:bg-white/10 hover:border-green-400/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 ease-out cursor-pointer">
                    <h3 className="font-semibold text-white text-base">
                      Dlaczego gabinet rehabilitacji potrzebuje strony www?
                    </h3>
                    <p className="mt-3 text-gray-300 text-sm">
                      Pacjenci potrzebujący rehabilitacji najczęściej szukają
                      gabinetu fizjoterapii w Google. Jeśli klinika
                      rehabilitacji nie posiada profesjonalnej strony, istnieje
                      duże ryzyko, że pacjenci wybiorą konkurencję. Strony
                      internetowe tworzone przez Sorien pełnią rolę nowoczesnej
                      wizytówki medycznej – budują zaufanie, prezentują
                      specjalizacje terapeutyczne i umożliwiają szybki kontakt z
                      gabinetem rehabilitacji.
                    </p>
                  </div>
                </div>

                {/* 4 */}
                <div className="md:flex md:justify-end">
                  <div className="md:w-[92%] bg-white/5 border border-gray-700/50 rounded-xl p-6 hover:bg-white/10 hover:border-orange-400/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 ease-out cursor-pointer">
                    <h3 className="font-semibold text-white text-base">
                      Jakie strony internetowe dla gabinetów rehabilitacji
                      sprawdzają się najlepiej?
                    </h3>
                    <p className="mt-3 text-gray-300 text-sm">
                      Najlepiej działają strony proste w obsłudze, które jasno
                      prezentują usługi rehabilitacyjne i zachęcają do kontaktu.
                      Sorien tworzy strony internetowe dla gabinetów
                      fizjoterapii z rezerwacją wizyt rehabilitacyjnych online,
                      formularzem kontaktowym, galerią zdjęć gabinetu i blogiem
                      o rehabilitacji, który dodatkowo wspiera pozycjonowanie w
                      Google na frazy medyczne.
                    </p>
                  </div>
                </div>

                {/* 5 */}
                <div className="md:flex md:justify-start">
                  <div className="md:w-[92%] bg-white/5 border border-gray-700/50 rounded-xl p-6 hover:bg-white/10 hover:border-pink-400/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 ease-out cursor-pointer">
                    <h3 className="font-semibold text-white text-base">
                      Czy strona www dla gabinetu fizjoterapii pomaga zdobywać
                      pacjentów?
                    </h3>
                    <p className="mt-3 text-gray-300 text-sm">
                      Tak – nowoczesna strona www, stworzona z nami, jest
                      narzędziem marketingowym, które realnie zwiększa liczbę
                      pacjentów potrzebujących rehabilitacji. Dzięki
                      odpowiedniemu SEO Twoja strona pojawia się wysoko w
                      wynikach wyszukiwania na frazy takie jak
                      &quot;rehabilitacja [miasto]&quot;, &quot;fizjoterapeuta
                      [miasto]&quot;, &quot;terapia ruchowa [miasto]&quot; czy
                      „leczenie urazów [miasto]&quot;.
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
                Rozwiązania IT dla gabinetów rehabilitacji i fizjoterapii
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg">
                Chcesz wiedzieć w jaki jeszcze sposób razem z nami możesz
                rozwinąć swój gabinet fizjoterapii i klinikę rehabilitacji? Oto
                kilka z naszych najpopularniejszych rozwiązań IT, które pomogą
                Ci zwiększyć liczbę pacjentów potrzebujących rehabilitacji i
                usprawnić codzienną pracę terapeutyczną.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="py-10 md:py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Systemy wewnętrzne */}
                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 hover:border-purple-400/40 transition-all duration-500 hover:scale-105">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
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
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Systemy zarządzania gabinetem rehabilitacji
                    </h3>
                    <p className="text-gray-300 text-lg">
                      Nowoczesne systemy zarządzania gabinetem fizjoterapii i
                      kliniką rehabilitacji, które usprawniają codzienną pracę
                      terapeutyczną i zwiększają efektywność Twojego zespołu
                      fizjoterapeutów.
                    </p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">
                        Elektroniczna dokumentacja medyczna
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">
                        Zarządzanie grafikiem sesji rehabilitacyjnych
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">
                        System rozliczeń i fakturowania
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">
                        Śledzenie postępów rehabilitacji
                      </span>
                    </li>
                  </ul>
                </div>

                {/* SEO */}
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
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      SEO i pozycjonowanie
                    </h3>
                    <p className="text-gray-300 text-lg">
                      Zwiększ widoczność swojego gabinetu rehabilitacji w
                      wyszukiwarkach i przyciągnij więcej pacjentów
                      potrzebujących fizjoterapii z Twojej okolicy.
                    </p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">
                        Widoczność w Google Maps
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">
                        Blog o rehabilitacji i poradnik medyczny
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">Opinie i recenzje</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">
                        Szybka strona internetowa
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Automatyzacje */}
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
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Automatyzacje
                    </h3>
                    <p className="text-gray-300 text-lg">
                      Zautomatyzuj codzienne procesy w gabinecie rehabilitacji i
                      zaoszczędź czas, który możesz poświęcić na terapię
                      rehabilitacyjną z pacjentami.
                    </p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">
                        Automatyczne przypomnienia o wizytach rehabilitacyjnych
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">
                        Rezerwacja wizyt online 24/7
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">
                        Automatyczne emaile z ćwiczeniami rehabilitacyjnymi
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">
                        Automatyczne raporty
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
                    Rozwijaj swój gabinet rehabilitacji z naszą pomocą
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                    Dołącz do wielu gabinetów fizjoterapii i klinik
                    rehabilitacji, które już korzystają z naszych rozwiązań IT.
                    Zwiększ liczbę pacjentów potrzebujących rehabilitacji,
                    zoptymalizuj procesy terapeutyczne i rozwiń swój gabinet
                    fizjoterapii.
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
                        Indywidualne podejście do każdego gabinetu rehabilitacji
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
