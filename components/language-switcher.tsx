"use client";

import { useI18n } from "@/lib/i18n/context";

interface LanguageSwitcherProps {
  mobileOnly?: boolean;
}

export default function LanguageSwitcher({ mobileOnly = false }: LanguageSwitcherProps) {
  const { language, setLanguage } = useI18n();

  // Mobile: show only current flag, clicking toggles
  if (mobileOnly) {
    return (
      <button
        onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
        className="transition-all duration-300 hover:scale-110"
        aria-label={language === "pt" ? "Switch to English" : "Mudar para Português"}
      >
        <span className="text-2xl">{language === "pt" ? "🇵🇹" : "🇬🇧"}</span>
      </button>
    );
  }

  // Desktop: show both flags with opacity
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage("pt")}
        className={`transition-all duration-300 hover:scale-110 ${
          language === "pt" ? "opacity-100" : "opacity-50 hover:opacity-75"
        }`}
        aria-label="Português"
      >
        <span className="text-2xl">🇵🇹</span>
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`transition-all duration-300 hover:scale-110 ${
          language === "en" ? "opacity-100" : "opacity-50 hover:opacity-75"
        }`}
        aria-label="English"
      >
        <span className="text-2xl">🇬🇧</span>
      </button>
    </div>
  );
}
