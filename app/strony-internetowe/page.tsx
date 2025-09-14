import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Sorien - Profesjonalne strony internetowe z SEO",
  description:
    "Tworzymy nowoczesne, responsywne i zoptymalizowane pod SEO strony internetowe, które skutecznie promują Twój biznes w sieci.",
  openGraph: {
    title: "Profesjonalne strony internetowe z SEO - Sorien",
    description:
      "Profesjonalne strony internetowe z idealnym SEO, zaprojektowane, by wyróżnić Twoją firmę online.",
    url: "https://www.sorien.pl/strony-internetowe",
    siteName: "Sorien",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://www.sorien.pl/logo2-sorien-agencja-tworząca-strony-internetowe.png",
        width: 1275,
        height: 620,
        alt: "Strony internetowe – Sorien",
      },
    ],
  },
  alternates: {
    canonical: "https://www.sorien.pl/strony-internetowe",
  },
};

export default function StronaWizytowka() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Tworzenie stron internetowych z pozycjonowaniem SEO",
    provider: {
      "@type": "LocalBusiness",
      name: "Sorien",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Łódź",
        addressCountry: "PL",
      },
      telephone: "+48 880 924 444",
      email: "hello@sorien.pl",
      logo: "https://www.sorien.pl/android-chrome-512x512.png",
      url: "https://www.sorien.pl",
    },
    description:
      "Tworzymy estetyczne, dobrze pozycjonujące z SEO i responsywne strony-internetowe dla firm, biznesów i specjalistów z różnych branż.",
  };
  return (
    <>
      <Script
        id="schema-wizytowki"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="text-white">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row justify-between pt-16 md:pt-20 px-4 sm:px-8 lg:px-5 pb-10 md:pb-20 gap-10 md:gap-0 max-w-7xl mx-auto w-full">
          <div className="content-center w-full lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300 mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              Rozwiązanie dla profesjonalnego wizerunku
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.7rem] font-bold mb-4 md:mb-6 lg:mb-8 text-white lg:whitespace-nowrap">
              Strony Internetowe
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Rewolucja &nbsp;
              </span>
              w wizerunku online
            </h1>

            <h2 className="text-lg sm:text-xl md:text-xl text-gray-300 leading-relaxed mb-6">
              Niech Twój wizerunek mówi za Ciebie – 24/7. Profesjonalne strony
              www, które podkręcają zaufanie nawet o 300%. Dla firm,
              freelancerów, artystów i wszystkich, którzy chcą błyszczeć w
              sieci. Zbuduj markę, której nie da się zapomnieć.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center text-gray-400 text-sm">
                <svg
                  className="w-5 h-5 text-green-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Szybkie wdrożenie
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <svg
                  className="w-5 h-5 text-green-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                ROI w 3 miesiące
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <svg
                  className="w-5 h-5 text-green-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Pełne wsparcie techniczne
              </div>
            </div>

            <Link
              href="/wycena"
              className="bg-white/10 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold border border-white shadow-lg shadow-black/20 hover:bg-violet-900/80 hover:scale-105 transition-all duration-300 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-opacity-50 text-center w-full sm:w-auto"
            >
              Rozpocznij transformację wizerunku
            </Link>
          </div>

          {/* Replace image with SVG and effects */}
          <div className="relative w-full hidden lg:w-auto lg:flex items-center justify-center">
            {/* Animated gradient background orbs */}
            <div className="absolute -top-10 -left-10 w-60 h-60 bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tr from-pink-500/30 via-purple-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            {/* SVG illustration */}
            <svg
              width="320"
              height="320"
              viewBox="0 0 320 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="svgTitle svgDesc"
              className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]"
            >
              <title id="svgTitle">
                Profesjonalna strona www – tworzenie stron
                internetowych
              </title>
              <desc id="svgDesc">
                Nowoczesna, kolorowa grafika strony internetowej symbolizująca ofertę
                projektowania i tworzenia responsywnych stron internetowych dla
                firm i freelancerów.
              </desc>
              <defs>
                <linearGradient
                  id="cardGradient"
                  x1="0"
                  y1="0"
                  x2="320"
                  y2="320"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6366F1" />
                  <stop offset="0.5" stopColor="#A21CAF" />
                  <stop offset="1" stopColor="#EC4899" />
                </linearGradient>
              </defs>
              <rect
                x="40"
                y="60"
                width="240"
                height="160"
                rx="24"
                fill="url(#cardGradient)"
              />
              <rect
                x="60"
                y="80"
                width="200"
                height="40"
                rx="10"
                fill="#fff"
                fillOpacity="0.15"
              />
              <rect
                x="60"
                y="130"
                width="140"
                height="20"
                rx="8"
                fill="#fff"
                fillOpacity="0.10"
              />
              <rect
                x="60"
                y="160"
                width="100"
                height="20"
                rx="8"
                fill="#fff"
                fillOpacity="0.10"
              />
              <circle cx="220" cy="170" r="18" fill="#fff" fillOpacity="0.18" />
              <rect
                x="120"
                y="200"
                width="80"
                height="12"
                rx="6"
                fill="#fff"
                fillOpacity="0.08"
              />
              <rect
                x="100"
                y="220"
                width="120"
                height="8"
                rx="4"
                fill="#fff"
                fillOpacity="0.06"
              />
              <rect
                x="140"
                y="240"
                width="40"
                height="8"
                rx="4"
                fill="#fff"
                fillOpacity="0.06"
              />
              <rect
                x="0"
                y="0"
                width="320"
                height="320"
                rx="40"
                fill="url(#cardGradient)"
                fillOpacity="0.05"
              />
            </svg>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-28 px-4 sm:px-8 lg:px-30 bg-gradient-to-b from-[#101015] to-[#151515] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"></div>
          </div>

          <div className="text-center mb-16 relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-600/20 border border-green-500/30 rounded-full text-sm font-medium text-green-300 mb-6">
              Dlaczego strony internetowe to klucz do sukcesu?
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Przekształć pierwsze wrażenie w przewagę konkurencyjną
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              W dzisiejszym świecie, firmy które nie mają profesjonalnej strony
              internetowe, tracą ogromne możliwości biznesowe. Nasze rozwiązania
              to nie tylko strony - to strategiczna inwestycja w wizerunek i
              zaufanie klientów.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              <h3 className="text-2xl font-bold mb-4 text-white">
                Eksplozja zaufania
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Profesjonalna strona internetowa buduje zaufanie i wiarygodność w
                oczach klientów. Nasze strony znacznie zwiększają zaufanie
                wszystkich i poprawiają pierwsze wrażenie. To jak zatrudnienie
                najlepszego PR-owca, ale w formie cyfrowej.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Profesjonalny wizerunek 24/7
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Budowanie wiarygodności
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Zwiększenie konwersji
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Doskonałe pozycjonowanie
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Wykorzystujemy najnowsze technologie Next.js, które zapewniają
                doskonałe SEO. Server-side rendering, automatyczna optymalizacja
                obrazów i błyskawiczne ładowanie sprawiają, że Twoja strona
                dominuje w wynikach wyszukiwania.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Server-side rendering (SSR)
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Automatyczna optymalizacja obrazów
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Błyskawiczne ładowanie stron
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Inteligentny kontakt
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Zaawansowane formularze kontaktowe, integracja z social media i
                automatyczne powiadomienia sprawiają, że każdy klient może łatwo
                nawiązać kontakt. Wykorzystujemy najnowsze technologie
                komunikacji, aby maksymalizować szanse na nawiązanie współpracy
                i zwiększyć konwersję.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Zaawansowane formularze kontaktowe
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Integracja z social media
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Automatyczne powiadomienia
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-28 px-4 sm:px-8 lg:px-30 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/25 to-purple-600/25 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/25 to-pink-600/25 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-full blur-2xl"></div>
          </div>

          <div className="text-center mb-16 relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300 mb-6">
              Proces tworzenia strony
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Od pomysłu do uruchomienia
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Nasz sprawdzony proces gwarantuje szybkie i bezproblemowe
              uruchomienie strony internetowej. Każdy krok jest precyzyjnie
              zaplanowany i wykonany przez ekspertów designu i marketingu.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Konsultacja i strategia
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Poznajemy Twoje potrzeby, oczekiwania i grupę docelową. Tworzymy
                strategię wizerunkową dopasowaną do Twojej branży.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Projekt graficzny
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Tworzymy unikalny, nowoczesny design dopasowany do Twojej
                branży. Każdy element jest przemyślany pod kątem konwersji.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-green-900/40 to-blue-900/40 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Realizacja i SEO
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Programujemy stronę, dbając o wydajność, SEO i bezpieczeństwo.
                Optymalizujemy pod kątem wyszukiwarek.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-8 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Wdrożenie i wsparcie
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Publikujemy stronę i zapewniamy pełne wsparcie techniczne.
                Jesteśmy z Tobą na każdym etapie rozwoju.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-28 px-4 sm:px-8 lg:px-30 bg-gradient-to-b from-[#101011] to-[#0e0d12] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"></div>
          </div>

          <div className="text-center mb-16 relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500/20 to-red-600/20 border border-pink-500/30 rounded-full text-sm font-medium text-pink-300 mb-6">
              Kompleksowe rozwiązanie wizerunkowe
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Wszystko, czego potrzebuje Twój wizerunek
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Nie musisz martwić się o dodatkowe narzędzia. Nasze rozwiązanie to
              kompletna platforma wizerunkowa, która rośnie razem z Twoim
              biznesem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Większa wiarygodność
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Profesjonalna strona buduje zaufanie i ułatwia zdobywanie nowych
                klientów. To pierwszy krok do budowania silnej marki.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Profesjonalny wizerunek</li>
                <li>• Budowanie zaufania</li>
                <li>• Wzrost wiarygodności</li>
                <li>• Silna marka</li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Lepsza widoczność w sieci
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Optymalizacja SEO sprawia, że Twoja oferta jest łatwiej
                znajdowana przez potencjalnych klientów. Zwiększ swoją obecność
                online.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Optymalizacja SEO</li>
                <li>• Większa widoczność</li>
                <li>• Więcej odwiedzin</li>
                <li>• Lepsze pozycjonowanie</li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Łatwy kontakt
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Prosty formularz i szybki dostęp do danych kontaktowych
                zwiększają szanse na nawiązanie współpracy. Maksymalizuj
                konwersję.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Formularze kontaktowe</li>
                <li>• Szybki dostęp do danych</li>
                <li>• Więcej zapytań</li>
                <li>• Wyższa konwersja</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 px-4 sm:px-8 lg:px-30 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="text-center max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-600/20 border border-yellow-500/30 rounded-full text-sm font-medium text-yellow-300 mb-6">
              Ostatni krok do profesjonalnego wizerunku
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Gotowy na rewolucję w wizerunku?
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Nie czekaj, aż konkurencja przejmie rynek wizerunkowy. Strony
              internetowe to nie luksus - to konieczność w dzisiejszym świecie
              biznesowym. Skontaktuj się z nami i stwórzmy razem wizytówkę,
              która przekształci Twój biznes w cyfrową potęgę wizerunkową.
            </p>

            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-2">
                    Szybkie
                  </div>
                  <div className="text-gray-400 text-sm">Uruchomienie</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-2">
                    3 miesiące
                  </div>
                  <div className="text-gray-400 text-sm">Zwrot inwestycji</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400 mb-2">
                    Pełne
                  </div>
                  <div className="text-gray-400 text-sm">
                    Wsparcie techniczne
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/wycena"
                className="group border-2 border-gray-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-700/50 transform hover:scale-105"
              >
                Darmowa wycena
              </Link>
            </div>

            <p className="text-gray-500 text-sm mt-6">
              Bez zobowiązań • Darmowa • Gwarancja satysfakcji
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
