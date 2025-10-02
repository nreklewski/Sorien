"use client";

import React, { useState } from "react";

interface TabData {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

const VerticalTabLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState("zwiększenie-sprzedaży");

  const tabs: TabData[] = [
    {
      id: "zwiększenie-sprzedaży",
      title: "Zwiększenie sprzedaży",
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
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      description:
        "Nasze strony internetowe są projektowane z myślą o konwersji i zwiększeniu sprzedaży. Dzięki zaawansowanym narzędziom analitycznym i optymalizacji UX, nasi klienci odnotowują znaczący wzrost liczby rezerwacji i przychodów.",
    },
    {
      id: "budowanie-marki",
      title: "Budowanie marki",
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
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
      ),
      description:
        "Tworzymy spójną tożsamość wizualną i komunikację marki, która wyróżnia Twoją restaurację na tle konkurencji. Profesjonalny wizerunek online buduje zaufanie i lojalność gości.",
    },
    {
      id: "obsługa-klienta",
      title: "Obsługa gości",
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
        "Implementujemy zaawansowane systemy obsługi gości, które umożliwiają rezerwację online, automatyczne powiadomienia i personalizację usług. To znacznie poprawia doświadczenie gości i zwiększa ich satysfakcję.",
    },
    {
      id: "wydajność-techniczna",
      title: "Wydajność techniczna",
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      description:
        "Nasze strony charakteryzują się najwyższą wydajnością techniczną - szybkim ładowaniem, pełną responsywnością i optymalizacją pod kątem wszystkich urządzeń. To gwarantuje doskonałe doświadczenie użytkownika.",
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="py-14 md:py-20 px-4 sm:px-8 lg:px-30">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4 text-white">
          Dlaczego wybrać nasze rozwiązania dla restauracji?
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base">
          Nasze zaawansowane platformy internetowe zostały zaprojektowane
          specjalnie dla branży gastronomicznej, aby maksymalizować potencjał biznesowy
          i zapewniać doskonałe doświadczenie zarówno dla restauracji, jak i gości.
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
                      activeTab === tab.id
                        ? "bg-white/20"
                        : "bg-[#4a37f5]"
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






