import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/shared/ui/select";
import { languages, type Language } from "~/shared/i18n";
import { cn } from "~/shared/utils";
import { FlagEn, FlagJa, FlagRu } from "./flags";

const flagClassName = "h-3.5 w-5 rounded-[2px]";

const LANGUAGE_FLAGS = {
  en: <FlagEn className={flagClassName} />,
  ru: <FlagRu className={flagClassName} />,
  ja: <FlagJa className={flagClassName} />,
} satisfies Record<Language, ReactNode>;

const LANGUAGE_LABELS: Record<Language, string> = {
  en: "English",
  ru: "Русский",
  ja: "日本語",
};

interface LanguagePickerProps {
  className?: string;
}

export const LanguagePicker = ({ className }: LanguagePickerProps) => {
  const { i18n } = useTranslation();

  const currentLanguage = (
    languages.includes(i18n.language as Language) ? i18n.language : "en"
  ) as Language;

  return (
    <Select
      value={currentLanguage}
      onValueChange={(value) => {
        if (value) {
          void i18n.changeLanguage(value);
        }
      }}
      items={LANGUAGE_FLAGS}
    >
      <SelectTrigger
        className={cn("min-w-0 px-2", className)}
        size="sm"
        aria-label={LANGUAGE_LABELS[currentLanguage]}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end" className="min-w-0">
        {languages.map((language) => (
          <SelectItem
            key={language}
            value={language}
            aria-label={LANGUAGE_LABELS[language]}
          >
            {LANGUAGE_FLAGS[language]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
