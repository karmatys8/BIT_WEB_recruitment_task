import i18n from "i18next";
import { initReactI18next } from "react-i18next";


i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        appBarChangeLanguageLabel: "Change language",
        englishFlagTitle: "English",
        norwegianFlagTitle: "Norwegian",
        swedishFlagTitle: "Swedish",
        homeHeader: "Nobel prize winners website",
        homeInstructions: "You can easily get access to information about Nobel prize winners by following thwe short guide below.",
        homeFormInstruction: "Pick Nobel prize year:",
        homeInputLabel: "Prize year",
        homeResultsInstruction: "Then click button below to view results.",
        homeSearchForRewardsButton: "Search for Rewards",
        yearHeadCellLabels: ["Prize year", "Category", "Date", "Prize amount"],
        yearTableHeader: "Nobel Prizes",
        yearFilterListTitle: "Filter list",
        yearDensePadding: "Dense padding",
        yearRowsPerPage: "Rows per page:",
        errorMessage: "Error 404 Not Found",
      }
    },
    no: { // note that translations were done by Google translate
      translation: {
        appBarChangeLanguageLabel: "Skifte språk",
        englishFlagTitle: "Engelsk",
        norwegianFlagTitle: "Norsk",
        swedishFlagTitle: "Svensk",
        homeHeader: "Nobelprisvinnernes nettsted",
        homeInstructions: "Du kan enkelt få tilgang til informasjon om nobelprisvinnere ved å følge den korte veiledningen nedenfor.",
        homeFormInstruction: "Velg nobelprisår:",
        homeInputLabel: "Prisår",
        homeResultsInstruction: "Then click button below to view results.",
        homeSearchForRewardsButton: "Klikk deretter på knappen nedenfor for å se resultatene.",
        yearHeadCellLabels: ["Premieår", "Kategori", "Dato", "Premiebeløp"],
        yearTableHeader: "Nobelpriser",
        yearFilterListTitle: "Filterliste",
        yearDensePadding: "Tett polstring",
        yearRowsPerPage: "Rader per side:",
        errorMessage: "Feil 404 ikke funnet",
      }
    },
    se: { // note that translations were done by Google translate
      translation: {
        appBarChangeLanguageLabel: "Ändra språk",
        englishFlagTitle: "Engelsk",
        norwegianFlagTitle: "Norska",
        swedishFlagTitle: "Svenska",
        homeHeader: "Nobelpristagares hemsida",
        homeInstructions: "Du kan enkelt få tillgång till information om Nobelpristagare genom att följa den korta guiden nedan.",
        homeFormInstruction: "Välj Nobelprisår:",
        homeInputLabel: "Prisår",
        homeResultsInstruction: "Klicka sedan på knappen nedan för att se resultaten.",
        homeSearchForRewardsButton: "Sök efter belöningar",
        yearHeadCellLabels: ["Prisår", "Kategori", "Datum", "Prisbelopp"],
        yearTableHeader: "Nobelpriser",
        yearFilterListTitle: "Filterlista",
        yearDensePadding: "Tät stoppning",
        yearRowsPerPage: "Rader per sida:",
        errorMessage: "Fel 404 hittades inte",
      }
    }
  },
});

export default i18n;