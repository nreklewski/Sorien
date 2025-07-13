import Image from "next/image";
import Link from "next/link";
import styles from "./ImageShadow.module.css";

export default function Home() {
  return (
    <div className=" text-white">
      {/* Hero Section */}
      <section className="flex justify-between pt-24 px-30 pb-20">
        <div className="content-center">
          <h1 className="text-5xl md:text-5xl font-bold mb-6 text-white">
            Bespoke software for your <br />{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              innovative
            </span>{" "}
            business
          </h1>
          <h2 className="text-xl md:text-lg text-gray-300 leading-relaxed">
            We build custom websites or mobile apps for <br /> innovative
            businesses seeking a competitive edge.
          </h2>
          <div className="flex gap-4 mt-4">
            <Link
              href="/our-work"
              className="border border-gray-300 rounded-full px-4 py-2 bg-gradient-to-r from-purple-900 to-purple-900/30 transition duration-300 hover:scale-105"
            >
              Our work
            </Link>

            <Link
              href="/contact"
              className="border border-gray-300 rounded-full px-4 py-2 bg-transparent hover:bg-gray-800 transition duration-300"
            >
              Get in touch
            </Link>
          </div>
        </div>
        <div className={`relative inline-block ${styles.customShadowImg}`}>
          <Image
            src="/1.png"
            alt="sorien"
            width={500}
            height={500}
            quality={100}
          />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-30 bg-gradient-to-b from-[#101015] to-[#151515]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What We Do
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We specialize in creating comprehensive digital solutions that drive
            business growth and enhance operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Business Card Websites
            </h3>
            <p className="text-gray-400">
              Professional, responsive websites that serve as your digital
              business card and create lasting impressions.
            </p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Mobile Applications</h3>
            <p className="text-gray-400">
              Native and cross-platform mobile apps that engage users and
              streamline business processes.
            </p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Internal Systems</h3>
            <p className="text-gray-400">
              Custom software solutions that optimize workflows and boost your
              company's performance and productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-30 relative overflow-hidden">
        {/* Background floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/25 to-purple-600/25 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/25 to-pink-600/25 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-cyan-600/20 rounded-full blur-xl animate-pulse delay-500"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-r from-purple-500/25 to-blue-600/25 rounded-full blur-xl animate-pulse delay-1500"></div>
        </div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Why Choose Us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We combine technical expertise with business acumen to deliver
            solutions that truly make a difference.
          </p>
        </div>

        <div className="relative z-10">
          {/* First row - 2 items */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {/* Fully Customizable */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      Fully Customizable
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Tailored solutions designed specifically for your business
                      needs. We create unique designs and functionalities that
                      perfectly align with your vision and requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cutting-Edge Technologies */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      Cutting-Edge Technologies
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Using Next.js for superior SEO and SSR performance. We
                      leverage the latest technologies to ensure your project
                      stands out with optimal performance and search engine
                      visibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second row - 2 items */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Lightning Performance */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 backdrop-blur-sm border border-green-500/20 rounded-3xl p-8 hover:border-green-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      Lightning Performance
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Blazing fast applications optimized for speed and
                      efficiency. Our solutions deliver exceptional user
                      experiences with minimal loading times and maximum
                      responsiveness.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Post-Launch Support */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      Full Post-Launch Support
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Complete flexibility and rapid technical support after
                      deployment. Easy expansion and quick technical assistance
                      ensure your solution grows with your business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 px-4 md:px-30 bg-gradient-to-b from-[#0d0c10] to-[#101010]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Process
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A proven methodology that ensures your project is delivered on time,
            within budget, and exceeds expectations.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line with glow */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-900 via-blue-700 to-purple-900 transform -translate-x-1/2 z-0 shadow-[0_0_24px_8px_rgba(55,48,163,0.3)]"></div>
          <div className="flex flex-col gap-20 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between group">
              <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1 flex justify-end">
                <div className="inline-block bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-2xl shadow-lg p-6 transition-transform duration-300 group-hover:scale-105">
                  <div className="flex items-center justify-end mb-2">
                    {/* Icon: Magnifying glass */}
                    <svg
                      className="w-7 h-7 text-blue-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="11" cy="11" r="8" strokeWidth="2" />
                      <line
                        x1="21"
                        y1="21"
                        x2="16.65"
                        y2="16.65"
                        strokeWidth="2"
                      />
                    </svg>
                    <h3 className="text-lg font-semibold text-white">
                      Discovery
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    We analyze your business needs, goals, and target audience
                    to create a comprehensive strategy.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center md:w-1/12 justify-center order-1 md:order-2 relative">
                {/* Timeline dot with pulse */}
                <div className="relative z-10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-900 opacity-30"></span>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-purple-900 rounded-full flex items-center justify-center text-2xl font-bold text-white border-4 border-[#151515] shadow-lg">
                    1
                  </div>
                </div>
                {/* Connecting line */}
                <div className="hidden md:block w-1 flex-1 bg-gradient-to-b from-blue-900 via-blue-700 to-purple-900 mx-auto"></div>
              </div>
              <div className="md:w-1/2 order-3"></div>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between group">
              <div className="md:w-1/2 order-1"></div>
              <div className="flex flex-col items-center md:w-1/12 justify-center order-2 relative">
                {/* Timeline dot with pulse */}
                <div className="relative z-10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-900 opacity-30"></span>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-purple-900 rounded-full flex items-center justify-center text-2xl font-bold text-white border-4 border-[#151515] shadow-lg">
                    2
                  </div>
                </div>
                {/* Connecting line */}
                <div className="hidden md:block w-1 flex-1 bg-gradient-to-b from-blue-900 via-blue-700 to-purple-900 mx-auto"></div>
              </div>
              <div className="md:w-1/2 md:pl-8 md:text-left order-3 flex justify-start">
                <div className="inline-block bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl shadow-lg p-6 transition-transform duration-300 group-hover:scale-105">
                  <div className="flex items-center mb-2">
                    {/* Icon: Pencil/ruler */}
                    <svg
                      className="w-7 h-7 text-pink-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M16.862 3.487a2.5 2.5 0 013.535 3.535L7.5 19.92l-4 1 1-4L16.862 3.487z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h3 className="text-lg font-semibold text-white">Design</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Our designers create intuitive, beautiful interfaces that
                    align with your brand and user expectations.
                  </p>
                </div>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between group">
              <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1 flex justify-end">
                <div className="inline-block bg-gradient-to-br from-blue-900/40 to-green-900/40 rounded-2xl shadow-lg p-6 transition-transform duration-300 group-hover:scale-105">
                  <div className="flex items-center justify-end mb-2">
                    {/* Icon: Code */}
                    <svg
                      className="w-7 h-7 text-green-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <polyline
                        points="16 18 22 12 16 6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="8 6 2 12 8 18"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h3 className="text-lg font-semibold text-white">
                      Development
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Expert developers bring your vision to life using
                    cutting-edge technologies and best practices.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center md:w-1/12 justify-center order-1 md:order-2 relative">
                {/* Timeline dot with pulse */}
                <div className="relative z-10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-900 opacity-30"></span>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-purple-900 rounded-full flex items-center justify-center text-2xl font-bold text-white border-4 border-[#151515] shadow-lg">
                    3
                  </div>
                </div>
                {/* Connecting line */}
                <div className="hidden md:block w-1 flex-1 bg-gradient-to-b from-blue-900 via-blue-700 to-purple-900 mx-auto"></div>
              </div>
              <div className="md:w-1/2 order-3"></div>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between group">
              <div className="md:w-1/2 order-1"></div>
              <div className="flex flex-col items-center md:w-1/12 justify-center order-2 relative">
                {/* Timeline dot with pulse */}
                <div className="relative z-10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-900 opacity-30"></span>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-purple-900 rounded-full flex items-center justify-center text-2xl font-bold text-white border-4 border-[#151515] shadow-lg">
                    4
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-8 md:text-left order-3 flex justify-start">
                <div className="inline-block bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-2xl shadow-lg p-6 transition-transform duration-300 group-hover:scale-105">
                  <div className="flex items-center mb-2">
                    {/* Icon: Rocket */}
                    <svg
                      className="w-7 h-7 text-cyan-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 7h4v4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h3 className="text-lg font-semibold text-white">Launch</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    We deploy your solution with comprehensive testing and
                    provide ongoing support and maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-30 bg-gradient-to-b from-[#101011] to-[#0e0d12]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Portfolio
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore some of our recent projects that showcase our expertise and
            commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-purple-500 transition-all duration-300">
            <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold mb-2">
                  E-Commerce Platform
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Modern online store with advanced features
                </p>
                <div className="flex gap-2 justify-center">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                    React
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                    Node.js
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-purple-500 transition-all duration-300">
            <div className="aspect-video bg-gradient-to-br from-green-500/20 to-blue-600/20 flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Mobile Banking App
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Secure financial management solution
                </p>
                <div className="flex gap-2 justify-center">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">
                    Flutter
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                    Firebase
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-purple-500 transition-all duration-300">
            <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold mb-2">CRM System</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Internal business management platform
                </p>
                <div className="flex gap-2 justify-center">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                    Vue.js
                  </span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs">
                    Python
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-6 py-3 bg-transparent hover:bg-gray-800 transition duration-300"
          >
            View All Projects
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
      </section>

      {/* CTA Section */}
      <section className="py-20 px-30 bg-gradient-to-r from-blue-900/10 to-purple-900/10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss how our custom software solutions can help you achieve
            your business goals and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              href="/consultation"
              className="border border-gray-300 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
