/**
 * BlogRelatedArticles Component
 * 
 * This component displays related blog articles based on provided IDs.
 * The IDs correspond to folder names in the app/blog/ directory:
 * - AI-bez-ogromnych-kosztow
 * - budowanie-zaufania-strona-www
 * - chatboty-dla-stron-www
 * - profesjonalne-tworzenie-stron-www
 * - rozbierznosc-cen-stron-www
 * - WordPress-czy-dedykowane-rozwiazanie
 * 
 * @param relatedArticleIds - Array of blog post IDs (folder names) to display as related articles
 */

import Image from "next/image";
import Link from "next/link";
import Reveal from "../../components/Reveal";
import RevealGroup from "../../components/RevealGroup";
import aiImage from "../AI-bez-ogromnych-kosztow/Małe firmy korzystające z AI – realistyczne wykorzystanie sztucznej inteligencji w biznesie.png";
import trustImage from "../budowanie-zaufania-strona-www/Projektowanie stron internetowych budujących zaufanie – realistyczny przykład nowoczesnego UI.png";
import chatbotImage from "../chatboty-dla-stron-www/Chatbot na stronie internetowej – realistyczna wizualizacja interakcji AI z użytkownikiem.png";
import comparisonImage from "../profesjonalne-tworzenie-stron-www/Porównanie taniej strony internetowej i profesjonalnego projektu – różnice wizualne i funkcjonalne.png";
import pricingImage from "../rozbierznosc-cen-stron-www/Różnice w cenach stron internetowych – porównanie tanich i profesjonalnych projektów.png";
import wordpressImage from "../WordPress-czy-dedykowane-rozwiazanie/WordPress vs dedykowane rozwiązanie – realistyczne porównanie technologii stron internetowych.png";

// Mapping of blog post IDs to their data
const blogPostsMap: Record<
  string,
  { title: string; image: typeof aiImage; href: string }
> = {
  "AI-bez-ogromnych-kosztow": {
    title:
      "Jak małe firmy mogą wykorzystać sztuczną inteligencję bez ogromnych budżetów",
    image: aiImage,
    href: "/blog/AI-bez-ogromnych-kosztow",
  },
  "budowanie-zaufania-strona-www": {
    title:
      "Jak projektować strony, które budują zaufanie już w pierwszych 5 sekundach",
    image: trustImage,
    href: "/blog/budowanie-zaufania-strona-www",
  },
  "chatboty-dla-stron-www": {
    title: "Chatbot na stronie internetowej – czy to się opłaca?",
    image: chatbotImage,
    href: "/blog/chatboty-dla-stron-www",
  },
  "profesjonalne-tworzenie-stron-www": {
    title:
      "Czym różni się tania strona od profesjonalnego projektu – case study na przykładzie małych firm",
    image: comparisonImage,
    href: "/blog/profesjonalne-tworzenie-stron-www",
  },
  "rozbierznosc-cen-stron-www": {
    title:
      "Dlaczego ceny stron internetowych tak bardzo się różnią i dlaczego warto zainwestować więcej",
    image: pricingImage,
    href: "/blog/rozbierznosc-cen-stron-www",
  },
  "WordPress-czy-dedykowane-rozwiazanie": {
    title:
      "WordPress czy dedykowane rozwiązanie? Jak wybrać technologię dla swojej strony",
    image: wordpressImage,
    href: "/blog/WordPress-czy-dedykowane-rozwiazanie",
  },
};

interface BlogRelatedArticlesProps {
  relatedArticleIds: string[];
}

export default function BlogRelatedArticles({
  relatedArticleIds,
}: BlogRelatedArticlesProps) {
  // Filter blog posts based on provided IDs
  const relatedArticles = relatedArticleIds
    .map((id) => blogPostsMap[id])
    .filter(Boolean)
    .slice(0, 2); // Limit to 2 articles

  // If no related articles found, don't render the section
  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <Reveal>
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f0d0d] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          {/* Header with "Pozostałe artykuły" title and "Zobacz wszystkie artykuły" link */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 md:mb-16 gap-4">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4 text-white">
                Pozostałe artykuły
              </h2>
              <p className="text-gray-400 text-base md:text-lg">
                Odkryj więcej wartościowych treści na naszym blogu
              </p>
            </div>
            <Link
              href="/blog"
              className="text-white/80 hover:text-white font-semibold text-base md:text-lg transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group self-center sm:self-auto"
            >
              <span>Zobacz wszystkie artykuły</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <RevealGroup intervalMs={120}>
              {relatedArticles.map((article, index) => (
                <Link key={index} href={article.href} className="group">
                  <div className="rounded-2xl bg-transparent border border-transparent group-hover:bg-gray-800/50 group-hover:border-gray-700 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/20 overflow-hidden h-full">
                    <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl mb-4">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="px-1 pb-6">
                      <h3 className="font-sora text-base md:text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300 text-left mb-3">
                        {article.title}
                      </h3>
                      <div className="flex justify-start">
                        <svg
                          className="w-7 h-7 text-white/80 group-hover:text-purple-300 group-hover:translate-x-1 transition-all duration-300"
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
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>
    </Reveal>
  );
}


