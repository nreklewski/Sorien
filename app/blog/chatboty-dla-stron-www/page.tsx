import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Reveal from "../../components/Reveal";
import BlogHero from "../components/BlogHero";
import BlogArticleContent from "../components/BlogArticleContent";
import BlogDateAndRating from "../components/BlogDateAndRating";
import BlogCTA from "../components/BlogCTA";
import BlogRelatedArticles from "../components/BlogRelatedArticles";
import chatbotImage from "./Chatbot na stronie internetowej – realistyczna wizualizacja interakcji AI z użytkownikiem.png";

export const metadata: Metadata = {
  title: "Chatbot na stronie www - czy się opłaca?",
  description:
    "Dowiedz się, czy chatbot na stronie internetowej to opłacalna inwestycja dla Twojej firmy. Sprawdź zalety, koszty i przykłady zastosowań od ekspertów Sorien.",
  openGraph: {
    title: "Chatbot na stronie www - czy się opłaca?",
    description:
      "Dowiedz się, czy chatbot na stronie internetowej to opłacalna inwestycja dla Twojej firmy. Sprawdź zalety, koszty i przykłady zastosowań od ekspertów Sorien.",
    url: "https://www.sorien.pl/blog/chatboty-dla-stron-www",
    siteName: "Sorien",
    locale: "pl_PL",
    type: "article",
  },
  alternates: {
    canonical: "https://www.sorien.pl/blog/chatboty-dla-stron-www",
  },
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Chatbot na stronie internetowej – czy to się opłaca?",
    description:
      "Dowiedz się, czy chatbot na stronie internetowej to opłacalna inwestycja dla Twojej firmy. Sprawdź zalety, koszty i przykłady zastosowań od ekspertów Sorien.",
    author: {
      "@type": "Organization",
      name: "Sorien",
    },
    publisher: {
      "@type": "Organization",
      name: "Sorien",
      logo: {
        "@type": "ImageObject",
        url: "https://www.sorien.pl/android-chrome-512x512.png",
      },
    },
    datePublished: "2025-01-15",
    dateModified: "2025-01-15",
  };

  return (
    <>
      <Script
        id="schema-blog-chatboty"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="text-white min-h-screen">
        {/* Hero Section with Background Block */}
        <BlogHero
          imageSrc={chatbotImage.src}
          imageAlt="Chatbot na stronie internetowej – realistyczna wizualizacja interakcji AI z użytkownikiem"
        />

        {/* Article Content Section */}
        <BlogArticleContent>
          {/* Title */}
          <h1 className="font-sora text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Czy chatbot na stronie internetowej się opłaca?
          </h1>

          {/* Subtitle/Introduction */}
          <Reveal>
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed">
              Dowiedz się, czy chatbot na stronie internetowej to opłacalna
              inwestycja dla Twojej firmy. Sprawdź zalety, koszty i przykłady
              zastosowań od ekspertów Sorien.
            </p>
          </Reveal>

          {/* Article Sections */}
          <div className="space-y-8 md:space-y-12">
            {/* Section 1 */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Dlaczego warto rozważyć chatbota na stronie
                </h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  W dobie cyfryzacji użytkownicy oczekują szybkich odpowiedzi i
                  sprawnej obsługi online.
                </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Badania pokazują, że ponad{" "}
                  <strong className="text-white">70% internautów</strong> woli
                  otrzymać natychmiastową odpowiedź, zamiast czekać na e-mail
                  czy telefon.
                </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  To właśnie tutaj wchodzi chatbot – narzędzie, które może:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 text-base md:text-lg ml-4">
                  <li>odpowiadać na najczęściej zadawane pytania,</li>
                  <li>zbierać leady i kontakt do potencjalnych klientów,</li>
                  <li>zwiększać konwersję na stronie.</li>
                </ul>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Dla małych firm, które nie mają zespołu do obsługi klienta
                  24/7, chatbot może stać się tańszą i bardziej efektywną
                  alternatywą. W Sorien pomagamy wdrożyć chatboty jako część
                  naszych{" "}
                  <Link
                    href="/rozwiazania-ai-dla-firm"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    rozwiązań AI dla firm
                  </Link>
                  , które zwiększają konwersję i poprawiają obsługę klienta.
                </p>
              </div>
            </Reveal>

            {/* Section 2 */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Zalety wdrożenia chatbota na stronie
                </h2>

                <ul className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl font-bold">
                      ✅
                    </span>
                    <div>
                      <strong className="text-white">Dostępność 24/7</strong>
                      <p className="mt-1">
                        Użytkownik otrzymuje odpowiedź o każdej porze, co
                        zwiększa zaufanie do marki i poprawia doświadczenie
                        klienta.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl font-bold">
                      ✅
                    </span>
                    <div>
                      <strong className="text-white">
                        Automatyzacja powtarzalnych zadań
                      </strong>
                      <p className="mt-1">
                        Chatbot może odpowiadać na najczęstsze pytania, umawiać
                        spotkania, przyjmować zgłoszenia lub kierować klientów
                        do odpowiednich działów.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl font-bold">
                      ✅
                    </span>
                    <div>
                      <strong className="text-white">
                        Zbieranie leadów i danych
                      </strong>
                      <p className="mt-1">
                        Każda rozmowa z chatbotem może być źródłem wartościowych
                        informacji o klientach i ich potrzebach, co pozwala na
                        lepszą personalizację oferty.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl font-bold">
                      ✅
                    </span>
                    <div>
                      <strong className="text-white">
                        Redukcja kosztów obsługi klienta
                      </strong>
                      <p className="mt-1">
                        Zamiast zatrudniać dodatkowy personel, chatbot może
                        obsłużyć setki zapytań jednocześnie, oszczędzając czas i
                        pieniądze.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl font-bold">
                      ✅
                    </span>
                    <div>
                      <strong className="text-white">
                        Poprawa konwersji i zaangażowania
                      </strong>
                      <p className="mt-1">
                        Użytkownicy, którzy korzystają z chatbota, spędzają
                        więcej czasu na stronie i częściej przechodzą do
                        kolejnych kroków w lejku sprzedażowym.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Section 3 */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Czy każdy biznes potrzebuje chatbota?
                </h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Nie każdy projekt wymaga od razu zaawansowanego chatbota.
                  Warto rozważyć chatbot, jeśli:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 text-base md:text-lg ml-4">
                  <li>strona generuje duży ruch,</li>
                  <li>sprzedaż lub zapytania wymagają szybkich odpowiedzi,</li>
                  <li>
                    firma oferuje produkty lub usługi, które wymagają
                    wyjaśnienia,
                  </li>
                  <li>
                    zależy Ci na zbieraniu danych o klientach i automatyzacji
                    procesów marketingowych.
                  </li>
                </ul>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Dla małych firm najlepszym rozwiązaniem są chatboty oparte na
                  prostych regułach lub integracje z modelami AI, np. ChatGPT
                  API. Są tanie we wdrożeniu i szybkie do skonfigurowania.
                </p>
              </div>
            </Reveal>

            {/* Section 4 */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Praktyczne wskazówki wdrożenia chatbota
                </h2>
                <ul className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-[#4a37f5] mr-3 text-xl font-bold">
                      1.
                    </span>
                    <span>
                      <strong className="text-white">Zdefiniuj cele</strong> –
                      czy chatbot ma generować leady, odpowiadać na FAQ, czy
                      wspierać sprzedaż?
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4a37f5] mr-3 text-xl font-bold">
                      2.
                    </span>
                    <span>
                      <strong className="text-white">
                        Zadbaj o naturalny język
                      </strong>{" "}
                      – chatbot powinien rozumieć intencje użytkownika i
                      odpowiadać w sposób przystępny.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4a37f5] mr-3 text-xl font-bold">
                      3.
                    </span>
                    <span>
                      <strong className="text-white">
                        Integracja z systemami firmy
                      </strong>{" "}
                      – CRM, e-mail marketing, bazy danych produktów.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4a37f5] mr-3 text-xl font-bold">
                      4.
                    </span>
                    <span>
                      <strong className="text-white">
                        Monitoruj i optymalizuj
                      </strong>{" "}
                      – analizuj konwersacje i poprawiaj scenariusze w miarę
                      potrzeb.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4a37f5] mr-3 text-xl font-bold">
                      5.
                    </span>
                    <span>
                      <strong className="text-white">Pamiętaj o CTA</strong> –
                      każda interakcja powinna prowadzić użytkownika do
                      kolejnego kroku (kontakt, formularz, zakup).
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Section 5 */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Czy chatbot się opłaca?
                </h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Tak – zwłaszcza dla firm, które chcą:
                </p>
                <ul className="space-y-3 text-gray-300 text-base md:text-lg leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-[#4a37f5] mr-3 text-xl font-bold">
                      •
                    </span>
                    <span>zwiększyć konwersję i leady,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4a37f5] mr-3 text-xl font-bold">
                      •
                    </span>
                    <span>poprawić doświadczenie użytkownika,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4a37f5] mr-3 text-xl font-bold">
                      •
                    </span>
                    <span>oszczędzić czas i koszty obsługi klienta.</span>
                  </li>
                </ul>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Chatbot nie zastępuje człowieka w 100%, ale ułatwia procesy,
                  pozwala szybciej reagować i buduje wizerunek nowoczesnej
                  firmy. Jeśli chcesz dowiedzieć się, jak chatboty mogą wspierać
                  Twoją stronę internetową,{" "}
                  <Link
                    href="/wycena"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    skontaktuj się z nami
                  </Link>{" "}
                  .
                </p>
              </div>
            </Reveal>
          </div>

          {/* Article Date and Rating */}
          <BlogDateAndRating
            datePublished="2025-05-12"
            datePublishedFormatted="12 maja 2025"
            averageScore={4.6}
            totalVotes={53}
          />
        </BlogArticleContent>

        {/* CTA Section */}
        <BlogCTA />

        {/* Related Articles Section */}
        <BlogRelatedArticles
          relatedArticleIds={[
            "AI-bez-ogromnych-kosztow",
            "budowanie-zaufania-strona-www",
          ]}
        />
      </div>
    </>
  );
}
