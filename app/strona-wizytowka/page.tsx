import Image from "next/image";
import Link from "next/link";

export default function StronaWizytowka() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between pt-16 md:pt-20 px-4 sm:px-8 lg:px-5 pb-10 md:pb-20 gap-10 md:gap-0 max-w-7xl mx-auto w-full">
        <div className="content-center w-full lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.7rem] font-bold mb-4 md:mb-6 lg:mb-12 text-white lg:whitespace-nowrap">
            Strony Wizytówki<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Profesjonalny wizerunek online
            </span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-xl text-gray-300 leading-relaxed mb-6">
            Profesjonalne, responsywne strony będące Twoją cyfrową wizytówką i budujące trwałe wrażenie. Zyskaj zaufanie klientów i wyróżnij się w sieci.
          </h2>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-gray-900 to-purple-950 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold border border-gray-800 hover:border-purple-700 hover:bg-gradient-to-r hover:from-gray-800 hover:to-purple-900 transition-all duration-300 text-base md:text-lg shadow-lg shadow-black/30 hover:shadow-purple-900/40 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50 text-center w-full sm:w-auto"
          >
            Zamów stronę wizytówkę
          </Link>
        </div>
        <div className="relative w-full hidden lg:w-auto lg:flex items-center justify-center">
          <Image
            src="/wizytowka.png"
            alt="Strona wizytówka"
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
            Dlaczego warto mieć stronę wizytówkę?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Strona wizytówka to Twoja cyfrowa tożsamość. Pozwala budować zaufanie, prezentować ofertę i ułatwia kontakt z klientami.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Pierwsze wrażenie</h3>
            <p className="text-gray-400">Nowoczesny design, który przyciąga uwagę i buduje profesjonalny wizerunek Twojej marki.</p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h4v4" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Responsywność</h3>
            <p className="text-gray-400">Twoja strona wygląda świetnie na każdym urządzeniu – od smartfona po komputer.</p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v4a1 1 0 001 1h3m10-5v4a1 1 0 01-1 1h-3m-4 4h6m-6 4h6" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Łatwy kontakt</h3>
            <p className="text-gray-400">Formularz kontaktowy, mapka, linki do social mediów – wszystko pod ręką dla Twoich klientów.</p>
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
            Jak wygląda współpraca?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Przejrzysty proces od pomysłu do gotowej strony – krok po kroku.
          </p>
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8">
            <h3 className="text-lg font-semibold text-white mb-2">1. Konsultacja</h3>
            <p className="text-gray-300 text-sm">Poznajemy Twoje potrzeby i oczekiwania, doradzamy najlepsze rozwiązania.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
            <h3 className="text-lg font-semibold text-white mb-2">2. Projekt graficzny</h3>
            <p className="text-gray-300 text-sm">Tworzymy unikalny, nowoczesny design dopasowany do Twojej branży.</p>
          </div>
          <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 backdrop-blur-sm border border-green-500/20 rounded-3xl p-8">
            <h3 className="text-lg font-semibold text-white mb-2">3. Realizacja</h3>
            <p className="text-gray-300 text-sm">Programujemy stronę, dbając o wydajność, SEO i bezpieczeństwo.</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8">
            <h3 className="text-lg font-semibold text-white mb-2">4. Wdrożenie i wsparcie</h3>
            <p className="text-gray-300 text-sm">Publikujemy stronę i zapewniamy wsparcie techniczne po wdrożeniu.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-14 md:py-20 px-4 sm:px-8 lg:px-30 bg-gradient-to-b from-[#101011] to-[#0e0d12]">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4 text-white">
            Co zyskujesz?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Strona wizytówka to inwestycja, która szybko się zwraca. Oto najważniejsze korzyści:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-3">Większa wiarygodność</h3>
            <p className="text-gray-400">Profesjonalna strona buduje zaufanie i ułatwia zdobywanie nowych klientów.</p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-3">Lepsza widoczność w sieci</h3>
            <p className="text-gray-400">Optymalizacja SEO sprawia, że Twoja oferta jest łatwiej znajdowana przez potencjalnych klientów.</p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-3">Łatwy kontakt</h3>
            <p className="text-gray-400">Prosty formularz i szybki dostęp do danych kontaktowych zwiększają szanse na nawiązanie współpracy.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-20 px-4 sm:px-8 lg:px-30 bg-gradient-to-r from-blue-900/10 to-purple-900/10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
            Chcesz wyróżnić się w sieci?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
            Skontaktuj się z nami i zamów stronę wizytówkę, która otworzy przed Tobą nowe możliwości biznesowe.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="border border-gray-300 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-gradient-to-r hover:from-purple-700 hover:to-transparent hover:scale-105 hover:shadow-lg transition-all duration-700"
            >
              Zamów stronę wizytówkę
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
