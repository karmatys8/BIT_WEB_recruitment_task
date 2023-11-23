import Container from "@mui/material/Container";
import { Outlet, useLocation } from "react-router-dom";
import MyAppBar from "../components/MyAppBar";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState, useEffect, createContext } from "react";
import * as locales from '@mui/material/locale';
import languages from '../languages.json';
import { useTranslation } from 'react-i18next';
import { SupportedLanguages } from "../types";


export const LocaleContext = createContext<SupportedLanguages>("en");

function SharedLayout() {
  let location = useLocation();
  const [locale, setLocale] = useState<SupportedLanguages>("en");
  const theme = useTheme();
  const { i18n } = useTranslation();

  const themeWithLocale = React.useMemo(
    () => {
      i18n.changeLanguage(locale);
      return createTheme(theme, locales[(languages.languages.find(lng => lng.name === locale)?.muiImportName || "enUS") as keyof typeof locales])
    
    }, [locale, i18n, theme],
  );

  useEffect(() => {
    setLocale((location.pathname.split('/')[1] as SupportedLanguages) || "en");
  }, [location])

  
  console.log(location)
  return (
    <ThemeProvider theme={themeWithLocale}>
      <LocaleContext.Provider value={locale}>
        <MyAppBar />
        <Container>
          <Outlet />
        </Container>
      </LocaleContext.Provider>
    </ThemeProvider>
  );
}

export default SharedLayout;