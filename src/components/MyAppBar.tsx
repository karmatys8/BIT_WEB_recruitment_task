import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CottageIcon from '@mui/icons-material/Cottage';

import MaterialUISwitch from "./MaterialUISwitch";
import { useTranslation } from "react-i18next";

import languages from "../languages.json"
import { Language, supportedLanguagesArray } from "../types";
import { useLocation } from "react-router-dom";


function MyAppBar() {
  const { t } = useTranslation();
  const location = useLocation();
  const languageRegExp = new RegExp(`\/(${supportedLanguagesArray.join('|')})`);

  console.log(location.pathname)
  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{mr: 2}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="Home"
              title="Home"
              href={location.pathname.match(languageRegExp) !== null ? location.pathname.match(languageRegExp)![0] : "/en"}
            >
            <CottageIcon />
          </IconButton>
            </Typography>
            <Box sx={{ flexGrow: 1, textAlign: "left"}}> {/* a bit of a band-aid solution */}
              <MaterialUISwitch/>
            </Box>
            <label>
              {t("appBarChangeLanguageLabel")}
              {(languages.languages as Language[]).map(lng => 
                <Button
                  href={location.pathname.replace(languageRegExp, `/${lng.name}`
                    )}
                  key={lng.name}
                >
                  <img
                    src={process.env.PUBLIC_URL + lng.relativeImgPath}
                    alt={lng.country + "'s flag"}
                    title={t(lng.extendedName + "FlagTitle")}
                  />
                </Button>
              )}
            </label>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default MyAppBar;