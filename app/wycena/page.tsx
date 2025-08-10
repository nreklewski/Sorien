import React from "react";
import WycenaForm from "./WycenaForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Darmowa wycena strony internetowej - Sorien",
  description:
    "Skorzystaj z formularza wyceny i poznaj koszt stworzenia strony internetowej, sklepu czy systemu firmowego dopasowanego do Twoich potrzeb.",
  openGraph: {
    title: "Formularz Wyceny – Sorien",
    description:
      "Wypełnij formularz wyceny i otrzymaj profesjonalną ofertę na stworzenie strony, sklepu lub systemu webowego.",
    url: "https://www.sorien.pl/wycena",
    siteName: "Sorien",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://www.sorien.pl/logo2-sorien-agencja-tworząca-strony-internetowe.png",
        width: 1275,
        height: 620,
        alt: "Formularz Wyceny – Sorien",
      },
    ],
  },
  alternates: {
    canonical: "https://www.sorien.pl/wycena",
  },
};

export default function Wycena() {
  return (
    <div>
      <WycenaForm />
      <div className="text-center py-12">
        <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-gray-400 mb-4">
          Wypełnij ten krótki formularz i uzyskaj bezpłatną wycenę strony
          internetowej
        </h1>
        <h2 className="text-lg text-gray-400">
          Otrzymasz ofertę w ciągu 24 godzin
        </h2>
      </div>
    </div>
  );
}
