"use client";

import React, { useState } from "react";

interface TabData {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

const VerticalTabLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState("wiecej-klientow");

  const tabs: TabData[] = [
    {
      id: "wiecej-klientow",
      title: "Więcej klientów",
      icon: (
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
            d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 7C8.5 7 6 9.5 6 12V16H18V12C18 9.5 15.5 7 12 7Z"
          />
        </svg>
      ),
      description:
        "Profesjonalna strona internetowa przyciąga nowych klientów i buduje zaufanie. Dzięki optymalizacji SEO i lokalnemu pozycjonowaniu, Twój biznes będzie łatwo znajdowany przez klientów w Twojej okolicy.",
    },
    {
      id: "profesjonalny-wizerunek",
      title: "Profesjonalny wizerunek",
      icon: (
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      description:
        "Nowoczesny design i wysokiej jakości treści budują profesjonalny wizerunek Twojego biznesu. Klienci z większym zaufaniem wybierają trenerów z elegancką stroną internetową.",
    },
    {
      id: "latwy-kontakt",
      title: "Łatwy kontakt i rejestracja",
      icon: (
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
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      description:
        "Intuicyjny system rezerwacji treningów online i łatwy kontakt zwiększają wygodę klientów. Możliwość umówienia treningu 24/7 i automatyczne przypomnienia SMS.",
    },
    {
      id: "szybkosc-responsywnosc",
      title: "Szybkość i responsywność",
      icon: (
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      description:
        "Szybko ładowająca się strona internetowa, zoptymalizowana pod kątem wszystkich urządzeń, zapewnia doskonałe doświadczenie użytkownika na każdym urządzeniu.",
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="py-14 md:py-20 px-4 sm:px-8 lg:px-30">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4 text-white">
          Jak nasze strony www wspierają Twój biznes
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base">
          Dzięki profesjonalnej witrynie internetowej Twój biznes może
          skutecznie przyciągać nowych klientów, budować zaufanie i zwiększać
          rozpoznawalność marki w lokalnej społeczności.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Tabs */}
          <div className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#4a37f5] text-white shadow-lg shadow-[#4a37f5]/25"
                    : "bg-white/5 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:bg-white/10 hover:border-gray-600/50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      activeTab === tab.id ? "bg-white/20" : "bg-[#4a37f5]"
                    }`}
                  >
                    {tab.icon}
                  </div>
                  <span className="font-semibold text-sm md:text-base">
                    {tab.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right side - Content */}
          <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-lg">
            {activeTabData && (
              <div className="h-full flex flex-col justify-center">
                <div className="w-16 h-16 bg-[#4a37f5] rounded-2xl mb-6 flex items-center justify-center">
                  {activeTabData.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#4a37f5] mb-4">
                  {activeTabData.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  {activeTabData.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalTabLayout;
