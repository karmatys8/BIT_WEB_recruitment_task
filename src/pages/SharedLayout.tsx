import Container from "@mui/material/Container";
import { Outlet, useLocation } from "react-router-dom";
import MyAppBar from "../components/MyAppBar";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState, useEffect, createContext, useRef } from "react";
import * as locales from "@mui/material/locale";
import languages from "../languages.json";
import { useTranslation } from "react-i18next";
import { SupportedLanguages } from "../types";
import { CssBaseline, Theme, useMediaQuery } from "@mui/material";

export const LocaleContext = createContext<SupportedLanguages>("en");

interface Props {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
export const IsDarkModeContext = createContext<Props | null>(null);

const darkModeTheme: Theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function SharedLayout() {
  let location = useLocation();
  const [locale, setLocale] = useState<SupportedLanguages>("en");
  const theme = useTheme<Theme>();
  const { i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const storagedMode = useRef<string | null>(null);

  useEffect(() => {
    if (storagedMode.current === null)
      storagedMode.current = window.localStorage.getItem("isDarkMode");
    setIsDarkMode(storagedMode.current === "true");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("isDarkMode", isDarkMode + "");
  }, [isDarkMode]);

  const themeWithLocale = React.useMemo(() => {
    i18n.changeLanguage(locale);

    return createTheme(
      isDarkMode ? darkModeTheme : theme,
      locales[
        (languages.languages.find((lng) => lng.name === locale)
          ?.muiImportName || "enUS") as keyof typeof locales
      ]
    );
  }, [locale, i18n, theme, isDarkMode]);

  useEffect(() => {
    setLocale((location.pathname.split("/")[1] as SupportedLanguages) || "en");
  }, [location]);

  return (
    <ThemeProvider theme={themeWithLocale}>
      <LocaleContext.Provider value={locale}>
        <IsDarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
          <CssBaseline>
            <MyAppBar />
            <Container>
              <Outlet />
            </Container>
          </CssBaseline>
        </IsDarkModeContext.Provider>
      </LocaleContext.Provider>
    </ThemeProvider>
  );
}

export default SharedLayout;
