import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-[#0d0d0d] text-white overflow-hidden">
      {/* Asymmetrical decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top diagonal line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-900/40 to-transparent transform -skew-y-1"></div>

        {/* Middle curved line */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-800/30 to-transparent transform -skew-y-2"></div>

        {/* Bottom diagonal line */}
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-900/50 to-transparent transform skew-y-1"></div>

        {/* Vertical accent line */}
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-800/20 to-transparent"></div>

        {/* Horizontal accent line */}
        <div className="absolute top-1/2 left-1/3 w-1/3 h-px bg-gradient-to-r from-transparent via-purple-700/25 to-transparent"></div>
      </div>

      <div className="relative z-10 px-8 py-10 md:px-30 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
                Sorien
              </h3>
              <p className="text-gray-400 max-w-md leading-relaxed">
                Specjalizujemy się w tworzeniu dedykowanych rozwiązań
                programistycznych, które wspierają rozwój biznesu i zwiększają
                efektywność operacyjną. Od pięknych stron wizytówek po złożone
                systemy wewnętrzne.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:hello@sorien.pl"
                  className="hover:underline whitespace-nowrap"
                >
                  hello@sorien.pl
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+48 880 924 444"
                  className="hover:underline whitespace-nowrap"
                >
                  +48 880 924 444
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Usługi</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Strona Glówna
                </Link>
              </li>
              <li>
                <Link
                  href="/systemy-firmowe"
                  className="hover:text-white transition-colors"
                >
                  Systemy Firmowe
                </Link>
              </li>
              <li>
                <Link
                  href="/strony-internetowe"
                  className="hover:text-white transition-colors"
                >
                  Strony Internetowe
                </Link>
              </li>
              <li>
                <Link
                  href="/rozwiazania-ai-dla-firm"
                  className="hover:text-white transition-colors"
                >
                  Rozwiązania AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Na skróty</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="strony-www-dla-gabinetu-stomatologicznego">
                  <p className="hover:text-white transition-colors">
                    Strony internetowe dla stomatologów
                  </p>
                </Link>
              </li>
              <li>
                <Link href="strony-www-dla-branzy-beauty">
                  <p className="hover:text-white transition-colors">
                    Strony internetowe dla branży beauty
                  </p>
                </Link>
              </li>
              <li>
                <Link href="strony-www-dla-restauracji">
                  <p className="hover:text-white transition-colors">
                    Strony internetowe dla restauracji
                  </p>
                </Link>
              </li>
              <li>
                <Link href="strony-www-dla-prawnikow">
                  <p className="hover:text-white transition-colors">
                    Strony internetowe dla prawników
                  </p>
                </Link>
              </li>
              <li>
                <Link href="strony-www-dla-architektow">
                  <p className="hover:text-white transition-colors">
                    Strony internetowe dla architektów
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Sorien. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/company/sorien/"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Link do LinkedIn"
                target="_blank"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-labelledby="linkedinTitle"
                >
                  <title id="linkedinTitle">LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                href="https://www.tiktok.com/@sorien.webstudio"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Link do TikTok"
                target="_blank"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-labelledby="tiktokTitle"
                >
                  <title id="tiktokTitle">TikTok</title>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
