import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-http-backend";

import ptTranslation from "./locales/pt.json";
import enTranslation from "./locales/en.json";
import esTranslation from "./locales/es.json";

const resources = {
  pt: { common: ptTranslation },
  en: { common: enTranslation },
  es: { common: esTranslation },
};

const options = {
  order: ["querystring", "navigator"],
  lookupQuerystring: "lng",
};

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    resources,
    ns: ["common"],
    defaultNS: "common",
    fallbackLng: "en",
    supportedLngs: ["pt", "en", "es"],
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });

export default i18n;
