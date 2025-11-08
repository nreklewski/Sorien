import { Metadata } from "next";
import Script from "next/script";
import Reveal from "../../components/Reveal";
import BlogHero from "../components/BlogHero";
import BlogArticleContent from "../components/BlogArticleContent";
import BlogDateAndRating from "../components/BlogDateAndRating";
import BlogCTA from "../components/BlogCTA";
import BlogRelatedArticles from "../components/BlogRelatedArticles";
import trustImage from "./Projektowanie stron internetowych budujących zaufanie – realistyczny przykład nowoczesnego UI.png";

export const metadata: Metadata = {
  title: "Jak projektować strony, które budują zaufanie w 5 sekund | Sorien Blog",
  description:
    "Większość klientów ocenia markę po wyglądzie jej strony internetowej. Zobacz, jak zaprojektować stronę, która buduje zaufanie już w pierwszych 5 sekundach — wskazówki ekspertów Sorien.",
  openGraph: {
    title: "Jak projektować strony, które budują zaufanie w 5 sekund | Sorien Blog",
    description:
      "Większość klientów ocenia markę po wyglądzie jej strony internetowej. Zobacz, jak zaprojektować stronę, która buduje zaufanie już w pierwszych 5 sekundach — wskazówki ekspertów Sorien.",
    url: "https://www.sorien.pl/blog/budowanie-zaufania-strona-www",
    siteName: "Sorien",
    locale: "pl_PL",
    type: "article",
  },
  alternates: {
    canonical: "https://www.sorien.pl/blog/budowanie-zaufania-strona-www",
  },
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Jak projektować strony, które budują zaufanie już w pierwszych 5 sekundach",
    description:
      "Większość klientów ocenia markę po wyglądzie jej strony internetowej. Zobacz, jak zaprojektować stronę, która buduje zaufanie już w pierwszych 5 sekundach — wskazówki ekspertów Sorien.",
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
        id="schema-blog-budowanie-zaufania"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="text-white min-h-screen">
        {/* Hero Section with Background Block */}
        <BlogHero
          imageSrc={trustImage.src}
          imageAlt="Projektowanie stron internetowych budujących zaufanie – realistyczny przykład nowoczesnego UI"
        />

        {/* Article Content Section */}
        <BlogArticleContent>
          {/* Title */}
          <Reveal>
            <h1 className="font-sora text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Jak projektować strony, które budują zaufanie już w pierwszych 5 sekundach
            </h1>
          </Reveal>

          {/* Subtitle/Introduction */}
          <Reveal>
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed">
              Większość klientów ocenia markę po wyglądzie jej strony internetowej. Zobacz, jak zaprojektować stronę, która buduje zaufanie już w pierwszych 5 sekundach — wskazówki ekspertów Sorien.
            </p>
          </Reveal>

          {/* Article Sections */}
          <div className="space-y-8 md:space-y-12">
            {/* Section 1 */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Dlaczego zaufanie online jest ważniejsze niż kiedykolwiek
                </h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  W erze cyfrowej strona internetowa jest pierwszym punktem kontaktu z Twoją marką.
                </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Według badań ponad <strong className="text-white">75% użytkowników</strong> przyznaje, że ocenia wiarygodność firmy na podstawie wyglądu jej strony. To oznacza, że zanim ktoś przeczyta ofertę, już podejmuje decyzję, czy może Ci zaufać.
                </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Pierwsze 5 sekund decyduje, czy użytkownik zostanie, czy wróci do wyników wyszukiwania.
                </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Dlatego projektowanie stron internetowych, które wzbudzają zaufanie od pierwszego wrażenia, jest kluczowe dla pozyskiwania klientów online.
                </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  W Sorien mówimy o tym jako o zasadzie &quot;5-sekundowego zaufania&quot; – połączeniu estetyki, przejrzystości i wiarygodności marki.
                </p>
              </div>
            </Reveal>

            {/* Section 2 */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Co sprawia, że użytkownik ufa stronie internetowej
                </h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Zaufanie w internecie buduje się nie słowami, lecz wrażeniem.
                </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Profesjonalna strona komunikuje porządek, rzetelność i stabilność – nawet zanim użytkownik przeczyta jakikolwiek tekst.
                </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Oto najważniejsze elementy, które decydują o tym, czy Twoja witryna wzbudzi zaufanie:
                </p>
                <ul className="space-y-3 text-gray-300 text-base md:text-lg leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl font-bold">✅</span>
                    <span><strong className="text-white">Profesjonalny design i spójność wizualna</strong> – estetyka, kolory i typografia zgodne z identyfikacją marki, brak chaosu.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl font-bold">✅</span>
                    <span><strong className="text-white">Wyraźny przekaz</strong> – użytkownik od razu wie, czym zajmuje się Twoja firma i co może zyskać.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl font-bold">✅</span>
                    <span><strong className="text-white">Szybkość działania</strong> – wolno ładująca się strona podważa profesjonalizm.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl font-bold">✅</span>
                    <span><strong className="text-white">Responsywność i dostępność</strong> – pełna czytelność na telefonie i tablecie to dziś standard, nie luksus.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl font-bold">✅</span>
                    <span><strong className="text-white">Bezpieczeństwo (SSL)</strong> – widoczna kłódka w pasku adresu zwiększa zaufanie użytkownika.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl font-bold">✅</span>
                    <span><strong className="text-white">Autentyczne zdjęcia i treści</strong> – ludzie lepiej reagują na prawdziwe twarze i realne realizacje niż na stockowe grafiki.</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Section 3 */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Jak zaprojektować stronę, która buduje zaufanie od pierwszej sekundy
                </h2>

                {/* Tip 1 */}
                <div className="space-y-3 mt-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    1. Wyraźny i konkretny przekaz w nagłówku
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    W ciągu kilku sekund odwiedzający musi wiedzieć:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 text-base md:text-lg ml-4">
                    <li>kim jesteś,</li>
                    <li>czym się zajmujesz,</li>
                    <li>co może zrobić dalej.</li>
                  </ul>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    To dlatego kluczowy komunikat powinien być krótki, konkretny i widoczny nad linią przewijania (tzw. hero section).
                  </p>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 md:p-6 my-4">
                    <p className="text-gray-300 text-base md:text-lg italic">
                      <strong className="text-white">Przykład:</strong>
                    </p>
                    <p className="text-gray-300 text-base md:text-lg mt-2">
                      &quot;Tworzymy strony internetowe, które przyciągają klientów i budują zaufanie Twojej marki.&quot;
                    </p>
                  </div>
                </div>

                {/* Tip 2 */}
                <div className="space-y-3 mt-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    2. Realne zdjęcia, referencje i dowody wiarygodności
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    Nic nie działa lepiej niż dowód społeczny.
                  </p>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    Dodaj do swojej strony:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 text-base md:text-lg ml-4">
                    <li>zdjęcia zespołu i biura,</li>
                    <li>opinie klientów (np. z Google lub Clutch),</li>
                    <li>logotypy firm, z którymi współpracujesz,</li>
                    <li>certyfikaty i partnerstwa technologiczne.</li>
                  </ul>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    Te elementy pokazują, że za marką stoją prawdziwi ludzie i realne doświadczenie, a nie anonimowa firma z internetu.
                  </p>
                </div>

                {/* Tip 3 */}
                <div className="space-y-3 mt-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    3. Spójność projektu i logiczny UX
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    Zaufanie to również komfort poruszania się po stronie.
                  </p>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    Użytkownik powinien intuicyjnie wiedzieć, jak znaleźć ofertę, kontakt czy informacje o firmie.
                  </p>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    Dlatego kluczowe są:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 text-base md:text-lg ml-4">
                    <li>jasne menu,</li>
                    <li>dobrze widoczne przyciski CTA (Call to Action),</li>
                    <li>powtarzalne elementy wizualne,</li>
                    <li>przemyślana architektura treści.</li>
                  </ul>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    W Sorien stosujemy zasadę &quot;clean-first design&quot; – najpierw przejrzystość, potem efekty wizualne.
                  </p>
                </div>

                {/* Tip 4 */}
                <div className="space-y-3 mt-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    4. Szybkość ładowania i optymalizacja techniczna
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    Strona może być piękna, ale jeśli ładuje się 5 sekund, użytkownik jej nie zobaczy.
                  </p>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    Dlatego każdy projekt powinien być zoptymalizowany technicznie:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 text-base md:text-lg ml-4">
                    <li>kompresja grafik (np. format WebP),</li>
                    <li>optymalizacja kodu i skryptów,</li>
                    <li>wdrożenie cache i CDN,</li>
                    <li>poprawa wskaźników Core Web Vitals.</li>
                  </ul>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    W Sorien tworzymy strony oparte o Next.js i nowoczesne frameworki, które łączą szybkość, bezpieczeństwo i SEO.
                  </p>
                </div>

                {/* Tip 5 */}
                <div className="space-y-3 mt-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    5. Przemyślane wezwania do działania (CTA)
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    Zaufanie to również jasna komunikacja – użytkownik musi wiedzieć, co może zrobić dalej.
                  </p>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    Wezwania do działania powinny być naturalne i zrozumiałe, np.:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 text-base md:text-lg ml-4">
                    <li>&quot;Umów bezpłatną konsultację&quot; lub</li>
                    <li>&quot;Poznaj nasze realizacje&quot;.</li>
                  </ul>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    Dobrze zaprojektowane CTA prowadzi użytkownika przez stronę w sposób, który buduje relację, a nie wywiera presję.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Section 4 - Summary */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Zaufanie to fundament skutecznego marketingu online
                </h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Zaufanie nie powstaje przez przypadek.
                </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Buduje się je poprzez spójność wizualną, profesjonalny projekt, transparentność i realne doświadczenia użytkownika.
                </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Strona, która wygląda wiarygodnie, automatycznie poprawia wyniki sprzedaży i konwersji, ponieważ użytkownicy chętniej kontaktują się z marką, której ufają.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Article Date and Rating */}
          <BlogDateAndRating
            datePublished="2025-08-21"
            datePublishedFormatted="21 sierpnia 2025"
            averageScore={4.8}
            totalVotes={37}
          />
        </BlogArticleContent>

        {/* CTA Section */}
        <BlogCTA />

        {/* Related Articles Section */}
        <BlogRelatedArticles
          relatedArticleIds={[
            "profesjonalne-tworzenie-stron-www",
            "rozbierznosc-cen-stron-www",
          ]}
        />
      </div>
    </>
  );
}
