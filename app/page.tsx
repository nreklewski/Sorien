import Image from "next/image";
import NavBar from "./navBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-between pt-24">
        <div className="content-center">
          <h1 className="text-4xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Bespoke software for your <br /> innovative business
          </h1>
          <h2 className="text-xl md:text-lg text-gray-300 leading-relaxed">
            We build custom websites or mobile apps for <br /> innovative
            businesses seeking a competitive edge.
          </h2>
        </div>
        <div className="">
          <Image
            src="/1.png"
            alt="sorien"
            width={500}
            height={500}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
