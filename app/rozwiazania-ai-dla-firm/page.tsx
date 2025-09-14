import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Sorien - Rozwiązania AI dla firm",
  description:
    "Inteligentne, dopasowane do Twojego biznesu rozwiązania AI. Automatyzują procesy, wspierają decyzje i wyróżniają Twoją firmę na tle konkurencji.",
  openGraph: {
    title: "Rozwiązania AI dla firm – Sorien",
    description:
      "Inteligentne rozwiązania AI, które automatyzują procesy biznesowe, wspierają podejmowanie decyzji i wyróżniają Twoją firmę na rynku.",
    url: "https://www.sorien.pl/rozwiazania-ai-dla-firm",
    siteName: "Sorien",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://www.sorien.pl/logo2-sorien-agencja-tworząca-strony-internetowe.png",
        width: 1275,
        height: 620,
        alt: "Rozwiązania AI dla firm – Sorien",
      },
    ],
  },
  alternates: {
    canonical: "https://www.sorien.pl/rozwiazania-ai-dla-firm",
  },
};

export default function RozwiazaniaAI() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Rozwiązania AI dla firm",
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
      "Inteligentne rozwiązania AI, które automatyzują procesy biznesowe, wspierają podejmowanie decyzji i wyróżniają firmę na rynku.",
  };
  return (
    <>
      <Script
        id="schema-ai"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="text-white">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row justify-between pt-16 md:pt-20 px-4 sm:px-8 lg:px-5 pb-10 md:pb-20 gap-10 md:gap-0 max-w-7xl mx-auto w-full">
          <div className="content-center w-full lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300 mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              Inteligentne rozwiązania AI
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.7rem] font-bold mb-4 md:mb-6 lg:mb-8 text-white lg:whitespace-nowrap">
              Rozwiązania AI
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Automatyzacja &nbsp;
              </span>
              w Twojej firmie
            </h1>

            <h2 className="text-lg sm:text-xl md:text-xl text-gray-300 leading-relaxed mb-6">
              Inteligentne, dopasowane do Twojego biznesu rozwiązania AI.
              Automatyzują procesy, wspierają decyzje i wyróżniają Twoją firmę
              na tle konkurencji. Od małych firm po duże korporacje - każdy
              biznes zasługuje na AI, które pracuje 24/7.
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
                Szybkie wdrożenie AI
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
                ROI w 2 miesiące
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
                Pełne wsparcie
              </div>
            </div>

            <Link
              href="/wycena"
              className="bg-white/10 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold border border-white shadow-lg shadow-black/20 hover:bg-violet-900/80 hover:scale-105 transition-all duration-300 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-opacity-50 text-center w-full sm:w-auto"
            >
              Rozpocznij z AI
            </Link>
          </div>

          {/* Replace image with SVG and effects (copied from web-card page) */}
          <div className="relative w-full hidden lg:w-auto lg:flex items-center justify-center">
            {/* Animated gradient background orbs */}
            <div className="absolute -top-10 -left-10 w-60 h-60 bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tr from-pink-500/30 via-purple-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            {/* SVG illustration (copied from web-card page) */}
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
                Rozwiązania AI dla firm – inteligentne systemy automatyzacji
              </title>
              <desc id="svgDesc">
                Nowoczesna grafika symbolizująca sztuczną inteligencję i
                inteligentne rozwiązania wspierające procesy biznesowe i
                automatyzację.
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
              Dlaczego AI to przyszłość biznesu?
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Przekształć tradycyjny biznes w inteligentną organizację
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              W dzisiejszym świecie, firmy które nie wykorzystują AI, tracą
              ogromne możliwości optymalizacji i automatyzacji. Nasze
              rozwiązania AI to nie tylko technologia - to strategiczna
              inwestycja w przyszłość Twojego biznesu.
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
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Automatyzacja procesów
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                AI automatycznie wykonuje powtarzalne zadania, oszczędzając czas
                i zasoby. Nasze rozwiązania zwiększają wydajność już w pierwszym
                tygodniu. To jak zatrudnienie dodatkowego zespołu bez kosztów
                wynagrodzeń i szkoleń.
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
                  Automatyzacja zadań
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
                  Oszczędność czasu
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
                  Zwiększona wydajność
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Inteligentne wsparcie decyzji
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                AI analizuje dane i dostarcza rekomendacje, które pomagają w
                podejmowaniu lepszych decyzji biznesowych. Każda rekomendacja
                jest oparta na danych i trendach rynkowych.
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
                  Analiza danych w czasie rzeczywistym
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
                  Predykcyjne modele
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
                  Inteligentne rekomendacje
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Przewaga konkurencyjna
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Wyróżnij się na rynku dzięki zaawansowanym rozwiązaniom AI.
                Nasze systemy uczą się i adaptują do Twojego biznesu,
                zapewniając ciągłą przewagę nad konkurencją.
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
                  Uczenie maszynowe
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
                  Adaptacja do zmian
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
                  Ciągła optymalizacja
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
              Proces wdrażania AI
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Od analizy do inteligentnego systemu
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Nasz sprawdzony proces gwarantuje skuteczne wdrożenie AI w Twojej
              firmie. Każdy krok jest precyzyjnie zaplanowany i wykonany przez
              ekspertów sztucznej inteligencji.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Analiza biznesowa i strategia AI
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Analizujemy Twoje procesy biznesowe i identyfikujemy obszary,
                gdzie AI może przynieść największe korzyści. Tworzymy strategię
                wdrożenia dopasowaną do Twoich celów.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Projektowanie modeli AI
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Tworzymy inteligentne modele AI dostosowane do Twoich potrzeb.
                Każdy model jest zaprojektowany z myślą o maksymalnej
                efektywności i łatwości użycia.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-green-900/40 to-blue-900/40 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Implementacja i integracja
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wdrażamy rozwiązania AI z integracją istniejących systemów.
                Każda funkcjonalność jest przetestowana i zoptymalizowana pod
                kątem wydajności.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-8 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Szkolenie i wsparcie
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Szkolimy zespół w obsłudze systemów AI i zapewniamy pełne
                wsparcie techniczne. Jesteśmy z Tobą na każdym etapie rozwoju
                inteligentnych rozwiązań.
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
              Kompleksowe rozwiązania AI
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Wszystko, czego potrzebuje Twoja firma
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Nie musisz martwić się o skomplikowane integracje i dodatkowe
              systemy. Nasze rozwiązanie AI to kompletna platforma, która rośnie
              razem z Twoim biznesem.
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
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Automatyzacja procesów
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                AI automatycznie wykonuje powtarzalne zadania, analizuje dane i
                podejmuje decyzje. Inteligentne systemy pracują 24/7 bez przerw.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Automatyczne przetwarzanie danych</li>
                <li>• Inteligentne klasyfikowanie</li>
                <li>• Predykcyjne modele</li>
                <li>• Optymalizacja procesów</li>
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Inteligentna analityka
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Zaawansowane narzędzia analityczne z wykorzystaniem AI do
                analizy trendów, przewidywania zachowań klientów i optymalizacji
                strategii biznesowych.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Analiza predykcyjna</li>
                <li>• Segmentacja klientów</li>
                <li>• Optymalizacja strategii</li>
                <li>• Raporty inteligentne</li>
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Wsparcie decyzyjne
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                AI dostarcza inteligentne rekomendacje i wspiera podejmowanie
                decyzji biznesowych. Systemy uczą się z doświadczeń i
                dostarczają coraz lepsze sugestie.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Inteligentne rekomendacje</li>
                <li>• Wsparcie decyzyjne</li>
                <li>• Analiza ryzyka</li>
                <li>• Optymalizacja kosztów</li>
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
              Ostatni krok do inteligentnego biznesu
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Gotowy na rewolucję AI w Twoim biznesie?
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Nie czekaj, aż konkurencja przejmie przewagę dzięki AI.
              Rozwiązania sztucznej inteligencji to nie luksus - to konieczność
              w dzisiejszym świecie biznesowym. Skontaktuj się z nami i stwórzmy
              razem inteligentny system, który przekształci Twój biznes.
            </p>

            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-2">
                    Możliwie szybkie
                  </div>
                  <div className="text-gray-400 text-sm">Wdrożenie AI</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-2">
                    2 miesiące
                  </div>
                  <div className="text-gray-400 text-sm">Zwrot inwestycji</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400 mb-2">
                    Pełne
                  </div>
                  <div className="text-gray-400 text-sm">Wsparcie</div>
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
