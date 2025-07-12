import Image from "next/image";
import NavBar from "./navBar";
import Link from "next/link";
import styles from "./ImageShadow.module.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      {/* Hero Section */}
      <section className="flex justify-between pt-24 px-30 pb-20 bg-gradient-to-b from-[#111111] via-[#111111] to-[#0d0d0d]">
        <div className="content-center">
          <h1 className="text-4xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Bespoke software for your <br /> innovative business
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
      <section className="py-20 px-30 bg-gradient-to-b from-[#0d0d0d] to-[#151515]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
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
      <section className="py-20 px-30">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We combine technical expertise with business acumen to deliver
            solutions that truly make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold">10+</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Years Experience</h3>
            <p className="text-gray-400 text-sm">
              Decade of expertise in digital solutions
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold">50+</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Projects Completed</h3>
            <p className="text-gray-400 text-sm">
              Successful deliveries across industries
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold">24/7</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <p className="text-gray-400 text-sm">
              Round-the-clock technical assistance
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold">100%</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Satisfaction</h3>
            <p className="text-gray-400 text-sm">
              Client satisfaction guaranteed
            </p>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 px-30 bg-gradient-to-b from-[#151515] to-[#0d0d0d]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Our Process
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A proven methodology that ensures your project is delivered on time,
            within budget, and exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center relative">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
              1
            </div>
            <h3 className="text-lg font-semibold mb-3">Discovery</h3>
            <p className="text-gray-400 text-sm">
              We analyze your business needs, goals, and target audience to
              create a comprehensive strategy.
            </p>
            <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform translate-x-4"></div>
          </div>

          <div className="text-center relative">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
              2
            </div>
            <h3 className="text-lg font-semibold mb-3">Design</h3>
            <p className="text-gray-400 text-sm">
              Our designers create intuitive, beautiful interfaces that align
              with your brand and user expectations.
            </p>
            <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform translate-x-4"></div>
          </div>

          <div className="text-center relative">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
              3
            </div>
            <h3 className="text-lg font-semibold mb-3">Development</h3>
            <p className="text-gray-400 text-sm">
              Expert developers bring your vision to life using cutting-edge
              technologies and best practices.
            </p>
            <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform translate-x-4"></div>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
              4
            </div>
            <h3 className="text-lg font-semibold mb-3">Launch</h3>
            <p className="text-gray-400 text-sm">
              We deploy your solution with comprehensive testing and provide
              ongoing support and maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-30">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
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
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
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
