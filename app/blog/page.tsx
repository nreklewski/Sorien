import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Reveal from "../components/Reveal";
import RevealGroup from "../components/RevealGroup";
import BlogDecorativeLines from "./components/BlogDecorativeLines";
import aiImage from "./AI-bez-ogromnych-kosztow/Małe firmy korzystające z AI – realistyczne wykorzystanie sztucznej inteligencji w biznesie.png";
import trustImage from "./budowanie-zaufania-strona-www/Projektowanie stron internetowych budujących zaufanie – realistyczny przykład nowoczesnego UI.png";
import chatbotImage from "./chatboty-dla-stron-www/Chatbot na stronie internetowej – realistyczna wizualizacja interakcji AI z użytkownikiem.png";
import comparisonImage from "./profesjonalne-tworzenie-stron-www/Porównanie taniej strony internetowej i profesjonalnego projektu – różnice wizualne i funkcjonalne.png";
import pricingImage from "./rozbierznosc-cen-stron-www/Różnice w cenach stron internetowych – porównanie tanich i profesjonalnych projektów.png";
import wordpressImage from "./WordPress-czy-dedykowane-rozwiazanie/WordPress vs dedykowane rozwiązanie – realistyczne porównanie technologii stron internetowych.png";

export const metadata: Metadata = {
  title: "Blog | Sorien – Wiedza i porady o tworzeniu stron internetowych",
  description:
    "Odkryj wartościowe artykuły o tworzeniu stron internetowych, systemach firmowych, SEO i nowoczesnych rozwiązaniach IT. Eksperckie porady od zespołu Sorien.",
  openGraph: {
    title: "Blog | Sorien – Wiedza i porady o tworzeniu stron internetowych",
    description:
      "Odkryj wartościowe artykuły o tworzeniu stron internetowych, systemach firmowych, SEO i nowoczesnych rozwiązaniach IT. Eksperckie porady od zespołu Sorien.",
    url: "https://www.sorien.pl/blog",
    siteName: "Sorien",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://www.sorien.pl/logo2-sorien-agencja-tworząca-strony-internetowe.png",
        width: 1275,
        height: 620,
        alt: "Sorien Blog – Wiedza i porady o tworzeniu stron internetowych",
      },
    ],
  },
  alternates: {
    canonical: "https://www.sorien.pl/blog",
  },
};

// Blog posts data
const blogPosts = [
  {
    id: "ai-bez-kosztow",
    title:
      "Jak małe firmy mogą wykorzystać sztuczną inteligencję bez ogromnych budżetów",
    excerpt:
      "Dowiedz się, jak małe firmy mogą wdrożyć sztuczną inteligencję (AI) w codziennym biznesie bez dużych kosztów. Praktyczne przykłady, narzędzia i wskazówki od ekspertów Sorien.",
    image: aiImage,
    href: "/blog/AI-bez-ogromnych-kosztow",
  },
  {
    id: "budowanie-zaufania",
    title:
      "Jak projektować strony, które budują zaufanie już w pierwszych 5 sekundach",
    excerpt:
      "Większość klientów ocenia markę po wyglądzie jej strony internetowej. Zobacz, jak zaprojektować stronę, która buduje zaufanie już w pierwszych 5 sekundach — wskazówki ekspertów Sorien.",
    image: trustImage,
    href: "/blog/budowanie-zaufania-strona-www",
  },
  {
    id: "chatboty",
    title: "Chatbot na stronie internetowej – czy to się opłaca?",
    excerpt:
      "Dowiedz się, czy chatbot na stronie internetowej to opłacalna inwestycja dla Twojej firmy. Sprawdź zalety, koszty i przykłady zastosowań od ekspertów Sorien.",
    image: chatbotImage,
    href: "/blog/chatboty-dla-stron-www",
  },
  {
    id: "profesjonalne-tworzenie",
    title:
      "Czym różni się tania strona od profesjonalnego projektu – case study na przykładzie małych firm",
    excerpt:
      "Poznaj różnice między tanią stroną a profesjonalnym projektem. Sprawdź, dlaczego inwestycja w stronę internetową zaprojektowaną przez ekspertów Sorien przekłada się na wyniki Twojego biznesu.",
    image: comparisonImage,
    href: "/blog/profesjonalne-tworzenie-stron-www",
  },
  {
    id: "rozbieznosc-cen",
    title:
      "Dlaczego ceny stron internetowych tak bardzo się różnią i dlaczego warto zainwestować więcej",
    excerpt:
      "Dowiedz się, dlaczego ceny stron internetowych są różne i dlaczego inwestycja w profesjonalny projekt zwraca się szybciej niż tania strona. Porady ekspertów Sorien.",
    image: pricingImage,
    href: "/blog/rozbierznosc-cen-stron-www",
  },
  {
    id: "wordpress-vs-dedykowane",
    title:
      "WordPress czy dedykowane rozwiązanie? Jak wybrać technologię dla swojej strony",
    excerpt:
      "Zastanawiasz się, czy lepiej wybrać WordPress czy dedykowane rozwiązanie dla swojej strony internetowej? Dowiedz się, jakie są różnice, zalety i wady każdego podejścia oraz jak wybrać technologię idealną dla Twojej firmy.",
    image: wordpressImage,
    href: "/blog/WordPress-czy-dedykowane-rozwiazanie",
  },
];

export default function Home() {
  return (
    <div className="text-white min-h-screen bg-gradient-to-b from-[#0f0d0d] to-[#0a0a0a]">
      {/* Header Section */}
      <Reveal>
        <section className="pt-16 md:pt-26 pb-17 md:pb-25 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8">
              {/* Left side - Main text */}
              <div className="flex-1 relative z-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
                  Dowiedz się jeszcze
                  <br />
                  więcej
                </h1>
              </div>

              {/* Right side - Large decorative text */}
              <div className="absolute right-0 top-1/2 md:top-auto md:bottom-0 -translate-y-1/2 md:translate-y-0 z-[-1] pointer-events-none">
                <span className="text-[120px] md:text-[180px] lg:text-[240px] xl:text-[280px] font-thin text-gray-800/30 md:text-gray-800/40 leading-none select-none tracking-[0.1em] md:tracking-[0.15em] lg:tracking-[0.2em]">
                  więcej
                </span>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 relative overflow-hidden">
          <BlogDecorativeLines />

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
              <RevealGroup intervalMs={100}>
                {blogPosts.map((post, index) => {
                  // Staggered layout - left column (even index) starts at top, right column (odd index) always starts 120px lower (only on md+ screens)
                  const isRightColumn = index % 2 === 1;
                  const staggerOffset = isRightColumn ? "md:mt-[120px]" : "";

                  return (
                    <div
                      key={post.id}
                      className={`${staggerOffset} self-start`}
                    >
                      <Link href={post.href} className="group block">
                        <div className="rounded-2xl bg-transparent border border-transparent group-hover:bg-gray-800/50 group-hover:border-gray-700 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-purple-500/20 overflow-hidden flex flex-col">
                          {/* Image - Square, smaller, left-aligned */}
                          <div className="relative w-full overflow-hidden aspect-square mb-3 max-w-sm rounded-xl">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500 rounded-xl"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>

                          {/* Content */}
                          <div className="px-3 pb-3 flex flex-col">
                            {/* Title */}
                            <h3 className="font-sora text-base md:text-lg lg:text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 text-left mb-2">
                              {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-gray-400 text-sm leading-relaxed mb-3">
                              {post.excerpt}
                            </p>

                            {/* Arrow */}
                            <div className="flex justify-start">
                              <svg
                                className="w-7 h-7 text-purple-800 group-hover:text-purple-700 group-hover:translate-x-1 transition-all duration-300"
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
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </RevealGroup>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
