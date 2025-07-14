import Image from "next/image";
import Link from "next/link";

export default function SklepyInternetowe() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between pt-16 md:pt-20 px-4 sm:px-8 lg:px-5 pb-10 md:pb-20 gap-10 md:gap-0 max-w-7xl mx-auto w-full">
        <div className="content-center w-full lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.7rem] font-bold mb-4 md:mb-6 lg:mb-12 text-white lg:whitespace-nowrap">
            Sklepy Internetowe<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Sprzedaż online na najwyższym poziomie
            </span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-xl text-gray-300 leading-relaxed mb-6">
            Nowoczesne sklepy online, które zwiększają sprzedaż i zapewniają klientom wygodne zakupy. Od prostych sklepów po zaawansowane platformy e-commerce.
          </h2>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-gray-900 to-purple-950 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold border border-gray-800 hover:border-purple-700 hover:bg-gradient-to-r hover:from-gray-800 hover:to-purple-900 transition-all duration-300 text-base md:text-lg shadow-lg shadow-black/30 hover:shadow-purple-900/40 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50 text-center w-full sm:w-auto"
          >
            Stwórz swój sklep online
          </Link>
        </div>
        <div className="relative w-full hidden lg:w-auto lg:flex items-center justify-center">
          <Image
            src="/sklep.png"
            alt="Sklep internetowy"
            width={400}
            height={400}
            quality={100}
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-contain rounded-2xl shadow-2xl shadow-purple-900/30"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-14 md:py-20 px-4 sm:px-8 lg:px-30 bg-gradient-to-b from-[#101015] to-[#151515]">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4 text-white">
            Dlaczego warto mieć sklep internetowy?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Sklep internetowy to klucz do zwiększenia sprzedaży i dotarcia do szerszego grona klientów. Oto najważniejsze korzyści:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Zwiększenie sprzedaży</h3>
            <p className="text-gray-400">Dostępność 24/7 i globalny zasięg pozwalają na sprzedaż o każdej porze i dotarcie do nowych klientów.</p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Wygoda dla klientów</h3>
            <p className="text-gray-400">Intuicyjny interfejs, szybkie zakupy i bezpieczne płatności zapewniają świetne doświadczenia użytkownika.</p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Analiza i optymalizacja</h3>
            <p className="text-gray-400">Szczegółowe raporty sprzedaży i zachowań klientów pomagają w podejmowaniu lepszych decyzji biznesowych.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-14 md:py-20 px-4 sm:px-8 lg:px-30 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/25 to-purple-600/25 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/25 to-pink-600/25 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
        <div className="text-center mb-10 md:mb-16 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4 text-white">
            Jak tworzymy Twój sklep?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Kompleksowy proces od koncepcji do uruchomienia – krok po kroku.
          </p>
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8">
            <h3 className="text-lg font-semibold text-white mb-2">1. Analiza biznesowa</h3>
            <p className="text-gray-300 text-sm">Poznajemy Twój model biznesowy, grupę docelową i konkurencję, by stworzyć skuteczną strategię.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
            <h3 className="text-lg font-semibold text-white mb-2">2. Projekt UX/UI</h3>
            <p className="text-gray-300 text-sm">Tworzymy intuicyjny interfejs i doświadczenie użytkownika, które zwiększają konwersję.</p>
          </div>
          <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 backdrop-blur-sm border border-green-500/20 rounded-3xl p-8">
            <h3 className="text-lg font-semibold text-white mb-2">3. Rozwój i integracje</h3>
            <p className="text-gray-300 text-sm">Programujemy sklep z integracją systemów płatności, logistyki i analityki.</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8">
            <h3 className="text-lg font-semibold text-white mb-2">4. Testy i uruchomienie</h3>
            <p className="text-gray-300 text-sm">Przeprowadzamy testy, optymalizujemy wydajność i uruchamiamy sklep z pełnym wsparciem.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-14 md:py-20 px-4 sm:px-8 lg:px-30 bg-gradient-to-b from-[#101011] to-[#0e0d12]">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4 text-white">
            Co zawiera Twój sklep?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Kompleksowe rozwiązanie e-commerce z wszystkimi niezbędnymi funkcjonalnościami:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-3">System płatności</h3>
            <p className="text-gray-400">Integracja z popularnymi bramkami płatności (PayU, Stripe, PayPal) oraz płatności online i za pobraniem.</p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-3">Panel administracyjny</h3>
            <p className="text-gray-400">Intuicyjny panel do zarządzania produktami, zamówieniami, klientami i treściami sklepu.</p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-3">SEO i marketing</h3>
            <p className="text-gray-400">Optymalizacja pod kątem wyszukiwarek, integracja z social media i narzędzia marketingowe.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-20 px-4 sm:px-8 lg:px-30 bg-gradient-to-r from-blue-900/10 to-purple-900/10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
            Gotowy na sprzedaż online?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
            Skontaktuj się z nami i stwórzmy razem sklep internetowy, który zwiększy Twoją sprzedaż i zadowoli klientów.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="border border-gray-300 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-gradient-to-r hover:from-purple-700 hover:to-transparent hover:scale-105 hover:shadow-lg transition-all duration-700"
            >
              Stwórz swój sklep online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
