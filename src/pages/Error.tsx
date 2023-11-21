import { useTranslation } from "react-i18next";
import {useEffect} from 'react';

function Error() {
  const { i18n, t } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage("se");
  }, [])
  
  return(<div>{t("errorMessage")}</div>)
}

export default Error;