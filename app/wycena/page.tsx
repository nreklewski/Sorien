"use client";

import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { FiXCircle } from "react-icons/fi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Formularz Wyceny – Sorien | Otrzymaj Darmową Wycenę Strony lub Systemu",
  description:
    "Skorzystaj z formularza wyceny i poznaj koszt stworzenia strony internetowej, sklepu czy systemu firmowego dopasowanego do Twoich potrzeb.",
  openGraph: {
    title: "Formularz Wyceny – Sorien",
    description:
      "Wypełnij formularz wyceny i otrzymaj profesjonalną ofertę na stworzenie strony, sklepu lub systemu webowego.",
    url: "https://sorien.pl/wycena",
    siteName: "Sorien",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://sorien.pl/logo2-sorien-agencja-tworząca-strony-internetowe",
        width: 1275,
        height: 620,
        alt: "Formularz Wyceny – Sorien",
      },
    ],
  },
  alternates: {
    canonical: "https://sorien.pl/wycena",
  },
};

const services = [
  { key: "businessCard", label: "Strona wizytówka" },
  { key: "onlineStore", label: "Sklep internetowy" },
  { key: "webSystem", label: "System wewnętrzny" },
];

type ServiceKey = "onlineStore" | "webSystem" | "businessCard" | "";

type FormData = {
  selectedService: ServiceKey;
  // Step 2
  exampleUrls: string[];
  description: string;
  files: File[];
  // Step 3
  fullName: string;
  email: string;
  phone: string;
  company: string;
  additionalInfo: string;
  privacyAccepted: boolean;
};

const initialFormData: FormData = {
  selectedService: "",
  exampleUrls: [""],
  description: "",
  files: [],
  fullName: "",
  email: "",
  phone: "",
  company: "",
  additionalInfo: "",
  privacyAccepted: false,
};

const allowedFileTypes = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.oasis.opendocument.text",
  "application/zip",
  "application/x-rar-compressed",
];

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Wycena() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [showRodoModal, setShowRodoModal] = useState(false);

  // Step 1: Service selection
  const handleServiceSelect = (key: ServiceKey) => {
    setFormData((prev) => ({ ...prev, selectedService: key }));
  };

  // Step 2: Project Brief
  const handleExampleUrlChange = (idx: number, value: string) => {
    setFormData((prev) => {
      const urls = [...prev.exampleUrls];
      urls[idx] = value;
      return { ...prev, exampleUrls: urls };
    });
  };
  const handleAddExampleUrl = () => {
    setFormData((prev) => ({
      ...prev,
      exampleUrls: [...prev.exampleUrls, ""],
    }));
  };
  const handleRemoveExampleUrl = (idx: number) => {
    setFormData((prev) => {
      const urls =
        prev.exampleUrls.length > 1
          ? prev.exampleUrls.filter((_, i) => i !== idx)
          : prev.exampleUrls;
      return { ...prev, exampleUrls: urls };
    });
  };
  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, description: e.target.value }));
  };
  const handleFilesChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const filesArr = Array.from(e.target.files);
    const validFiles = filesArr.filter(
      (file) =>
        allowedFileTypes.includes(file.type) && file.size <= 5 * 1024 * 1024
    );
    setFormData((prev) => ({
      ...prev,
      files: [...prev.files, ...validFiles].slice(0, 5),
    }));
    // Reset the input so the same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  const handleRemoveFile = (idx: number) => {
    setFormData((prev) => {
      const files = prev.files.filter((_, i) => i !== idx);
      return { ...prev, files };
    });
  };

  // Step 3: Contact Info
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Navigation and validation
  const handleNext = () => {
    if (step === 1) {
      if (!formData.selectedService) return;
      setStep(2);
    } else if (step === 2) {
      // No required fields in step 2
      setErrors({});
      setStep(3);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Funkcja pomocnicza do walidacji e-maila
  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Walidacja pól formularza
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Imię i nazwisko jest wymagane";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email jest wymagany";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Nieprawidłowy adres email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefon jest wymagany";
    }

    if (!formData.privacyAccepted) {
      newErrors.privacyAccepted = "Musisz zaakceptować politykę prywatności";
    }

    // Zapisz błędy do stanu
    setErrors(newErrors);

    // Jeśli są błędy, nie wysyłaj formularza
    if (Object.keys(newErrors).length > 0) return;

    // Brak błędów, wyślij formularz
    setSubmitting(true);
    setSubmitError(null);

    try {
      const data = new FormData();
      data.append("selectedService", formData.selectedService);
      formData.exampleUrls.forEach((url) => data.append("exampleUrls", url));
      data.append("description", formData.description);
      formData.files.forEach((file) => data.append("files", file));
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("company", formData.company);
      data.append("additionalInfo", formData.additionalInfo);
      data.append(
        "privacyAccepted",
        formData.privacyAccepted ? "true" : "false"
      );

      await axios.post("/api/send-email", data);

      setSuccess(true);
      setFormData(initialFormData);
      setStep(4); // Przejdź do strony z podziękowaniem
    } catch (err: any) {
      setSubmitError(
        err?.response?.data?.error ||
          "Błąd wysyłania formularza. Spróbuj ponownie później."
      );
    } finally {
      setSubmitting(false);
    }
  };

  // Overlay content for each step
  const renderOverlay = () => {
    if (step === 1) {
      return (
        <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 flex flex-col items-center">
          <div className="mb-8 text-center">
            <div className="text-sm text-gray-400 mb-2">Krok 1/3</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Wybierz usługę
            </h1>
            <p className="text-gray-300">
              Wybierz, czym jesteś zainteresowany, aby przejść dalej.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 w-full mb-8">
            {services.map((service) => (
              <button
                key={service.key}
                type="button"
                onClick={() => handleServiceSelect(service.key as ServiceKey)}
                className={`flex-1 px-4 pt-5 pb-10 rounded-2xl border-2 transition-all duration-300 text-xl font-semibold shadow-lg focus:outline-none
                  ${
                    formData.selectedService === service.key
                      ? "border-violet-500 bg-violet-800/80 text-white scale-105 shadow-violet-700/30"
                      : "border-white/30 bg-white/10 text-white hover:border-violet-400 hover:bg-violet-900/40"
                  }
                `}
              >
                <div className="mb-3 mt-0 text-2xl md:text-2xl lg:text-3xl font-bold text-white">
                  {service.label}
                </div>
                {service.key === "businessCard" && (
                  <>
                    <div className="text-xs sm:text-sm md:text-md lg:text-base text-gray-300 mb-8">
                      Zoptymalizowana pod SEO strona, która przyciągnie
                      klientów.
                    </div>
                    <ul className="text-xs sm:text-sm md:text-md lg:text-base text-gray-200 flex flex-col gap-2 mt-2">
                      <li className="flex items-center gap-2">
                        <span>✔</span> Nowoczesny wygląd
                      </li>
                      <li className="flex items-center gap-2">
                        <span>✔</span> Idealna pod SEO
                      </li>
                      <li className="flex items-center gap-2">
                        <span>✔</span> W pełni responsywna
                      </li>
                      <li className="flex items-center gap-2">
                        <span>✔</span> Integracja z social media
                      </li>
                    </ul>
                  </>
                )}
                {service.key === "onlineStore" && (
                  <>
                    <div className="text-xs sm:text-sm md:text-md lg:text-base text-gray-300 mb-8">
                      Sklep online z wygodnymi zakupami i prostą obsługą
                      zamówień.
                    </div>
                    <ul className="text-xs sm:text-sm md:text-md lg:text-base text-gray-200 flex flex-col gap-2 mt-2">
                      <li className="flex items-center gap-2">
                        <span>✔</span> Intuicyjny koszyk
                      </li>
                      <li className="flex items-center gap-2">
                        <span>✔</span> Bezpieczne płatności
                      </li>
                      <li className="flex items-center gap-2">
                        <span>✔</span> Zarządzanie produktami
                      </li>
                      <li className="flex items-center gap-2">
                        <span>✔</span> Integracje z dostawami
                      </li>
                    </ul>
                  </>
                )}
                {service.key === "webSystem" && (
                  <>
                    <div className="text-xs sm:text-sm md:text-md lg:text-base text-gray-300 mb-8">
                      System do automatyzacji i zarządzania procesami w firmie.
                    </div>
                    <ul className="text-xs sm:text-sm md:text-md lg:text-base text-gray-200 flex flex-col gap-2 mt-2">
                      <li className="flex items-center gap-2">
                        <span>✔</span> Automatyzacja zadań
                      </li>
                      <li className="flex items-center gap-2">
                        <span>✔</span> Dopasowane do firmy
                      </li>
                      <li className="flex items-center gap-2">
                        <span>✔</span> Bezpieczny dostęp
                      </li>
                      <li className="flex items-center gap-2">
                        <span>✔</span> Raporty i analizy
                      </li>
                    </ul>
                  </>
                )}
              </button>
            ))}
          </div>
          <button
            className="mt-4 px-8 py-3 rounded-full bg-violet-700 text-white font-bold text-lg shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            disabled={!formData.selectedService}
            onClick={handleNext}
          >
            Dalej
          </button>
        </div>
      );
    }
    if (step === 2) {
      return (
        <form
          className="w-full max-w-7xl mx-auto p-4 sm:p-6 my-8 bg-gradient-to-br from-[#210235] via-black to-[#210235] rounded-2xl shadow-lg flex flex-col items-center overflow-y-auto"
          onSubmit={(e) => {
            e.preventDefault();
            handleNext();
          }}
        >
          <div className="mb-8 text-center">
            <div className="text-sm text-gray-400 mb-2">Krok 2/3</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {services.find((s) => s.key === formData.selectedService)
                ?.label || "Projekt"}
            </h1>
            <p className="text-gray-300">
              Opisz swój projekt i podaj przykłady inspiracji.
            </p>
          </div>
          <div className="w-full mb-4">
            <label className="block text-white font-semibold mb-2">
              Przykładowe adresy stron które Ci się podobają
            </label>
            {formData.exampleUrls.map((url, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input
                  type="url"
                  className="flex-1 bg-transparent px-0 py-2 border-0 border-b-2 border-b-gray-400 focus:border-b-violet-500 focus:ring-2 focus:ring-violet-500 focus:outline-none transition-all text-white placeholder-gray-400"
                  placeholder="https://przyklad.pl"
                  value={url}
                  onChange={(e) => handleExampleUrlChange(idx, e.target.value)}
                  // no longer required
                />
                {formData.exampleUrls.length > 1 && (
                  <button
                    type="button"
                    className="px-3 py-2 rounded bg-red-600 text-white"
                    onClick={() => handleRemoveExampleUrl(idx)}
                  >
                    Usuń
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="mt-1 px-4 py-2 rounded bg-violet-700 text-white font-semibold"
              onClick={handleAddExampleUrl}
            >
              Dodaj kolejny przykład
            </button>
            {/* No error for exampleUrls since it's optional now */}
          </div>
          <div className="w-full mb-4">
            <label
              className="block text-white font-semibold mb-1"
              htmlFor="description"
            >
              Opis projektu
            </label>
            <div className="relative">
              <textarea
                id="description"
                name="description"
                className="w-full bg-transparent px-3 py-2 border border-gray-400 focus:border-violet-500 focus:outline-none transition-all text-white placeholder-gray-400 rounded-md resize-none"
                placeholder="Opisz w kilku słowach projekt twojej strony i jej funkcjonalności"
                value={formData.description}
                onChange={handleInputChange}
                rows={6}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="w-full mb-4">
            <label className="block text-white font-semibold mb-2">
              Załącz pliki Np. specyfikacja, wytyczne, opis. (opcjonalnie, max 5
              plików, do 5MB każdy)
            </label>
            <div className="flex items-center gap-4">
              <input
                id="file-upload"
                type="file"
                multiple
                accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.odt,.zip,.rar"
                className="hidden"
                onChange={handleFilesChange}
                ref={fileInputRef}
              />
              <label
                htmlFor="file-upload"
                className="px-4 py-2 rounded bg-violet-700 text-white font-semibold cursor-pointer shadow hover:bg-violet-800 transition"
              >
                Wybierz pliki
              </label>
              <span className="text-gray-300 text-sm">
                {formData.files.length > 0
                  ? `${formData.files.length} plik(i) wybrano`
                  : "Brak wybranych plików"}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.files.map((file, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded"
                >
                  <span className="truncate max-w-[120px] text-xs text-white">
                    {file.name}
                  </span>
                  <button
                    type="button"
                    className="text-red-400 ml-1"
                    onClick={() => handleRemoveFile(idx)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-full justify-between mt-8">
            <button
              type="button"
              className="px-8 py-3 rounded-full bg-gray-700 text-white font-bold text-lg shadow-md"
              onClick={handleBack}
            >
              Wróć
            </button>
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-violet-700 text-white font-bold text-lg shadow-md"
            >
              Dalej
            </button>
          </div>
        </form>
      );
    }
    if (step === 3) {
      return (
        <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 flex flex-col items-center">
          <form
            className="w-full my-8 p-4 sm:p-6 bg-gradient-to-br from-[#210235] via-black to-[#210235] rounded-2xl shadow-lg flex flex-col items-center overflow-y-auto"
            onSubmit={handleSubmit}
          >
            <div className="mb-8 text-center">
              <div className="text-sm text-gray-400 mb-2">Krok 3/3</div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Dane kontaktowe
              </h1>
              <p className="text-gray-300">
                Podaj swoje dane, abyśmy mogli się z Tobą skontaktować.
              </p>
            </div>

            {/* Imię i nazwisko */}
            <div className="w-full mb-4">
              <label
                className="block text-white font-semibold mb-1"
                htmlFor="fullName"
              >
                Imię i nazwisko <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  className={`w-full bg-transparent px-0 py-2 border-0 border-b-2 focus:outline-none transition-all text-white placeholder-gray-400
              ${
                errors.fullName
                  ? "border-b-[#e53935] focus:border-b-[#e53935]"
                  : "border-b-gray-400 focus:border-b-violet-500"
              }`}
                  placeholder="Imię i nazwisko"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  autoComplete="off"
                />
                {errors.fullName && (
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[#e53935] text-xl">
                    <FiXCircle />
                  </span>
                )}
              </div>
              {errors.fullName && (
                <div className="mt-1 text-xs font-bold tracking-wide text-[#e53935] uppercase">
                  {errors.fullName}
                </div>
              )}
            </div>

            {/* Email */}
            <div className="w-full mb-4">
              <label
                className="block text-white font-semibold mb-1"
                htmlFor="email"
              >
                Email <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="text" // ← zmiana tutaj
                  name="email"
                  className={`w-full bg-transparent px-0 py-2 border-0 border-b-2 focus:outline-none transition-all text-white placeholder-gray-400
              ${
                errors.email
                  ? "border-b-[#e53935] focus:border-b-[#e53935]"
                  : "border-b-gray-400 focus:border-b-violet-500"
              }`}
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="email" // ← zmiana tutaj
                />
                {errors.email && (
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[#e53935] text-xl">
                    <FiXCircle />
                  </span>
                )}
              </div>
              {errors.email && (
                <div className="mt-1 text-xs font-bold tracking-wide text-[#e53935] uppercase">
                  {errors.email}
                </div>
              )}
            </div>

            {/* Telefon */}
            <div className="w-full mb-4">
              <label
                className="block text-white font-semibold mb-1"
                htmlFor="phone"
              >
                Telefon <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  className={`w-full bg-transparent px-0 py-2 border-0 border-b-2 focus:outline-none transition-all text-white placeholder-gray-400
              ${
                errors.phone
                  ? "border-b-[#e53935] focus:border-b-[#e53935]"
                  : "border-b-gray-400 focus:border-b-violet-500"
              }`}
                  placeholder="Telefon"
                  value={formData.phone}
                  onChange={handleInputChange}
                  autoComplete="tel"
                />
                {errors.phone && (
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[#e53935] text-xl">
                    <FiXCircle />
                  </span>
                )}
              </div>
              {errors.phone && (
                <div className="mt-1 text-xs font-bold tracking-wide text-[#e53935] uppercase">
                  {errors.phone}
                </div>
              )}
            </div>

            {/* Firma */}
            <div className="w-full mb-4">
              <label
                className="block text-white font-semibold mb-1"
                htmlFor="company"
              >
                Nazwa firmy (opcjonalnie)
              </label>
              <div className="relative">
                <input
                  id="company"
                  type="text"
                  name="company"
                  className="w-full bg-transparent px-0 py-2 border-0 border-b-2 border-b-gray-400 focus:border-b-violet-500 focus:outline-none transition-all text-white placeholder-gray-400"
                  placeholder="Nazwa firmy"
                  value={formData.company}
                  onChange={handleInputChange}
                  autoComplete="organization"
                />
              </div>
            </div>

            {/* Dodatkowe informacje */}
            <div className="w-full mb-4">
              <label
                className="block text-white font-semibold mb-1"
                htmlFor="additionalInfo"
              >
                Dodatkowe informacje (opcjonalnie)
              </label>
              <div className="relative">
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  className="w-full bg-transparent px-3 py-2 border border-gray-400 focus:border-violet-500 focus:outline-none transition-all text-white placeholder-gray-400 rounded-md resize-none"
                  placeholder="Dodatkowe informacje..."
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={3}
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="w-full mb-4 flex items-start gap-3">
              <input
                type="checkbox"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleInputChange}
                className={`w-5 h-5 mt-1 accent-violet-700 rounded transition-all shrink-0
      ${
        errors.privacyAccepted
          ? "border-4 border-red-700 bg-red-200 ring-2 ring-red-600"
          : "border-2 border-violet-700"
      }`}
              />
              <p className="text-sm text-white leading-snug">
                Zapoznałam/em się z informacją o
                <br className="block sm:hidden" />
                <button
                  type="button"
                  onClick={() => setShowRodoModal(true)}
                  className="underline text-violet-300 hover:text-violet-400 font-semibold focus:outline-none focus:ring-2 focus:ring-violet-400 rounded transition-all inline"
                  style={{
                    padding: 0,
                    background: "none",
                    border: "none",
                  }}
                >
                  administratorze i przetwarzaniu danych
                </button>
                . <span className="text-red-400">*</span>
              </p>
            </div>

            {/* Modal */}
            {showRodoModal && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto"
                onClick={() => setShowRodoModal(false)}
                style={{ cursor: "pointer" }}
              >
                <div
                  className="bg-white rounded-xl shadow-lg max-w-lg w-full p-8 relative"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    cursor: "default",
                    fontSize: "0.92rem",
                    lineHeight: "1.5",
                  }}
                >
                  <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-violet-700 text-2xl font-bold focus:outline-none"
                    onClick={() => setShowRodoModal(false)}
                    aria-label="Zamknij"
                    tabIndex={0}
                  >
                    ×
                  </button>
                  <div className="text-gray-800 mb-2">
                    Administratorem Twoich danych osobowych jest Sorien. Dane
                    będą przetwarzane w celu kontaktu i realizacji wyceny,
                    zgodnie z obowiązującymi przepisami RODO. Masz prawo dostępu
                    do swoich danych, ich poprawiania, żądania usunięcia lub
                    ograniczenia przetwarzania. Więcej informacji znajdziesz w
                    naszej polityce prywatności.
                  </div>
                </div>
              </div>
            )}

            {submitting && (
              <div className="text-violet-400 mb-2">Wysyłanie...</div>
            )}
            {submitError && (
              <div className="text-red-400 mb-2">{submitError}</div>
            )}
            <div className="flex w-full justify-between mt-8">
              <button
                type="button"
                className="px-8 py-3 rounded-full bg-gray-700 text-white font-bold text-lg shadow-md"
                onClick={handleBack}
              >
                Wróć
              </button>
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-violet-700 text-white font-bold text-lg shadow-md"
                disabled={submitting}
              >
                Wyślij
              </button>
            </div>
          </form>
        </div>
      );
    }
    if (step === 4) {
      return (
        <div className="w-full max-w-2xl mx-auto p-8 my-16 bg-gradient-to-br from-[#210235] via-black to-[#210235] rounded-2xl shadow-lg flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Dziękujemy za wysłanie formularza!
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              Otrzymasz mailowo swoją wycenę w ciągu 24 godzin.
            </p>
            <a
              href="/"
              className="mt-4 inline-block px-8 py-3 rounded-full bg-violet-700 text-white font-bold text-lg shadow-md transition-all"
            >
              Wróć do strony głównej
            </a>
          </div>
        </div>
      );
    }
    return null;
  };

  // Main content area (content is always overlayed, navbar/footer are outside)
  return (
    <div className="w-full flex flex-col items-center">
      {renderOverlay()}

      <section className="w-11/12 max-w-5xl mx-auto  text-center">
        <p className="text-white text-base md:text-lg py-8">
          Jeśli masz dodatkowe pytania, skontaktuj się z nami mailowo:
          <a
            href="mailto:hello@sorien.com"
            className="text-violet-400 font-semibold hover:text-violet-200 transition-colors"
          >
            hello@sorien.com
          </a>
        </p>
      </section>
    </div>
  );
}
