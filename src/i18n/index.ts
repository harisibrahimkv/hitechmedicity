import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

const savedLang = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, ar: { translation: ar } },
  lng: savedLang,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

// Apply dir attribute on init and language change
const applyDir = (lng: string) => {
  const dir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.dir = dir;
  document.documentElement.lang = lng;
};

applyDir(savedLang);
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
  applyDir(lng);
});

export default i18n;
