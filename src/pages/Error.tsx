import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Error() {
  let location = useLocation();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const locale = location.pathname.split("/")[1];

    i18n.changeLanguage(locale);
  }, [location, i18n]);

  return <div>{t("errorMessage")}</div>;
}

export default Error;
