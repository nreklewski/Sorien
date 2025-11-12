import React from "react";
import WycenaForm from "./WycenaForm";
import { Metadata } from "next";
import Reveal from "../components/Reveal";
import RevealGroup from "../components/RevealGroup";

export const metadata: Metadata = {
  title: "Darmowa wycena strony www | Sorien",
  description:
    "Otrzymaj darmową wycenę strony internetowej,systemu firmowego lub rozwiązań AI. Indywidualna oferta w 24h. Bez zobowiązań. | Sorien",
  openGraph: {
    title: "Darmowa wycena strony www | Sorien",
    description:
      "Wypełnij formularz wyceny i otrzymaj profesjonalną ofertę na stworzenie strony, sklepu lub systemu webowego.",
    url: "https://www.sorien.pl/wycena",
    siteName: "Sorien",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://www.sorien.pl/logo2-sorien-agencja-tworząca-strony-internetowe.png",
        width: 1275,
        height: 620,
        alt: "Formularz Wyceny – Sorien",
      },
    ],
  },
  alternates: {
    canonical: "https://www.sorien.pl/wycena",
  },
};

export default function Wycena() {
  return (
    <div>
      {/* Hero Section */}
      <Reveal>
        <section className="text-white px-4 sm:px-8 lg:px-5 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-600/20 border border-violet-500/30 rounded-full text-sm font-medium text-violet-300 mb-6">
              <span className="w-2 h-2 bg-violet-400 rounded-full mr-2 animate-pulse"></span>
              Darmowa wycena bez zobowiązań
            </div>
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-6 text-white">
              Otrzymaj darmową wycenę strony www i innych rozwiązań IT
            </h1>
            <p className="text-base sm:text-base md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Wypełnij formularz wyceny i otrzymaj indywidualną ofertę na
              stworzenie strony internetowej, rozwiązań AI lub systemu
              firmowego. Każdy projekt jest wyceniany indywidualnie, dopasowany
              do Twoich potrzeb i budżetu.
            </p>
          </div>
          <div className="flex justify-center pt-4 -mt-6 md:-mt-10 mb-4">
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
        </section>
      </Reveal>

      {/* Form Section */}
      <WycenaForm />

      {/* Why Choose Us Section */}
      <Reveal>
        <section className="text-white pt-30 pb-16 md:pb-24 md:pt-40 px-4 sm:px-8 lg:px-5 bg-gradient-to-b from-[#101015] to-[#151515] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-600/20 border border-green-500/30 rounded-full text-sm font-medium text-green-300 mb-6">
                Dlaczego warto skorzystać z naszej wyceny?
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                Kompleksowa analiza Twojego projektu
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                Oferujemy kompleksową analizę Twojego projektu i przygotowujemy
                szczegółową ofertę dopasowaną do Twoich potrzeb biznesowych.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <RevealGroup intervalMs={120}>
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Szybka odpowiedź
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Otrzymasz profesjonalną wycenę w ciągu 24 godzin. Nie musisz
                    czekać tygodniami na odpowiedź - działamy szybko i
                    efektywnie.
                  </p>
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
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Indywidualne podejście
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Każdy projekt analizujemy indywidualnie. Nie stosujemy
                    szablonowych rozwiązań - przygotowujemy ofertę dopasowaną do
                    Twojego biznesu.
                  </p>
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Bez zobowiązań
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Wycena jest całkowicie darmowa i bez zobowiązań. Możesz
                    porównać naszą ofertę z innymi i podjąć decyzję bez presji.
                  </p>
                </div>
              </RevealGroup>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Process Section */}
      <Reveal>
        <section className="text-white py-16 md:py-24 px-4 sm:px-8 lg:px-5 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/25 to-purple-600/25 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/25 to-pink-600/25 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-full blur-2xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300 mb-6">
                Proces wyceny
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                Jak wygląda proces wyceny?
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                Prosty i przejrzysty proces, który pozwala nam przygotować
                najlepszą ofertę dla Twojego projektu.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <RevealGroup intervalMs={120}>
                <div className="group text-center bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Wypełnij formularz
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Opisz swój projekt, wybierz usługę i podaj podstawowe
                    informacje. To zajmie tylko kilka minut.
                  </p>
                </div>

                <div className="group text-center bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Analizujemy projekt
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Nasz zespół analizuje Twoje potrzeby i przygotowuje
                    szczegółową ofertę dopasowaną do wymagań.
                  </p>
                </div>

                <div className="group text-center bg-gradient-to-br from-green-900/40 to-blue-900/40 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Otrzymujesz ofertę
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    W ciągu 24 godzin otrzymujesz profesjonalną ofertę z wyceną,
                    zakresem prac i harmonogramem.
                  </p>
                </div>

                <div className="group text-center bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-8 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Działamy
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Jeśli oferta Cię satysfakcjonuje, rozpoczynamy realizację
                    projektu zgodnie z ustalonym planem.
                  </p>
                </div>
              </RevealGroup>
            </div>
          </div>
        </section>
      </Reveal>

      {/* FAQ Section */}
      <Reveal>
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#101011] to-[#0e0d12] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto text-white/90 relative z-10">
            <article className="space-y-10 leading-relaxed">
              <h2 className="text-center text-2xl sm:text-4xl xl:text-5xl font-bold text-white">
                Najczęściej zadawane pytania o wycenę
              </h2>

              {/* 1 */}
              <div className="md:flex md:justify-start">
                <div className="md:w-[92%] bg-white/5 border border-gray-700/50 rounded-xl p-6 hover:bg-white/10 hover:border-pink-400/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 ease-out cursor-pointer">
                  <h3 className="font-semibold text-white text-base">
                    Ile kosztuje wycena projektu?
                  </h3>
                  <p className="mt-3 text-gray-300 text-sm">
                    Wycena jest całkowicie darmowa i bez zobowiązań. Nie
                    pobieramy żadnych opłat za przygotowanie oferty - możesz
                    spokojnie porównać naszą propozycję z innymi.
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className="md:flex md:justify-end">
                <div className="md:w-[92%] bg-white/5 border border-gray-700/50 rounded-xl p-6 hover:bg-white/10 hover:border-purple-400/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 ease-out cursor-pointer">
                  <h3 className="font-semibold text-white text-base">
                    Jak długo czeka się na wycenę?
                  </h3>
                  <p className="mt-3 text-gray-300 text-sm">
                    Standardowo przygotowujemy wycenę w ciągu 24 godzin od
                    otrzymania formularza. W przypadku bardziej złożonych
                    projektów czas może wydłużyć się do 48 godzin - zawsze
                    informujemy o tym w odpowiedzi.
                  </p>
                </div>
              </div>

              {/* 3 */}
              <div className="md:flex md:justify-start">
                <div className="md:w-[92%] bg-white/5 border border-gray-700/50 rounded-xl p-6 hover:bg-white/10 hover:border-green-400/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 ease-out cursor-pointer">
                  <h3 className="font-semibold text-white text-base">
                    Co zawiera wycena?
                  </h3>
                  <p className="mt-3 text-gray-300 text-sm">
                    Wycena zawiera szczegółowy opis zakresu prac, kosztorys
                    projektu, proponowane technologie, harmonogram realizacji
                    oraz informacje o wsparciu po wdrożeniu. To kompletna
                    oferta, która pozwala podjąć świadomą decyzję.
                  </p>
                </div>
              </div>

              {/* 4 */}
              <div className="md:flex md:justify-end">
                <div className="md:w-[92%] bg-white/5 border border-gray-700/50 rounded-xl p-6 hover:bg-white/10 hover:border-orange-400/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 ease-out cursor-pointer">
                  <h3 className="font-semibold text-white text-base">
                    Czy wycena jest wiążąca?
                  </h3>
                  <p className="mt-3 text-gray-300 text-sm">
                    Wycena jest orientacyjna i może ulec zmianie po szczegółowej
                    analizie wymagań. Finalna cena jest ustalana po konsultacji
                    i akceptacji zakresu prac. Wszystkie zmiany są zawsze
                    konsultowane i zatwierdzane przed rozpoczęciem prac.
                  </p>
                </div>
              </div>

              {/* 5 */}
              <div className="md:flex md:justify-start">
                <div className="md:w-[92%] bg-white/5 border border-gray-700/50 rounded-xl p-6 hover:bg-white/10 hover:border-pink-400/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 ease-out cursor-pointer">
                  <h3 className="font-semibold text-white text-base">
                    Co jeśli mam dodatkowe pytania?
                  </h3>
                  <p className="mt-3 text-gray-300 text-sm">
                    Jeśli masz pytania przed wypełnieniem formularza lub po
                    otrzymaniu wyceny, skontaktuj się z nami mailowo pod adresem
                    hello@sorien.pl. Chętnie odpowiemy na wszystkie Twoje
                    pytania i rozwiejemy wątpliwości.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
