import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const toggle = () => {
    i18n.changeLanguage(isArabic ? "en" : "ar");
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{isArabic ? "EN" : "عربي"}</span>
    </button>
  );
};

export default LanguageSwitcher;
