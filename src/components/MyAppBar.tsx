import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CottageIcon from '@mui/icons-material/Cottage';

import MaterialUISwitch from "./MaterialUISwitch";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";


function MyAppBar() {
  const { locale = "en" } = useParams();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [])

  
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
              aria-label="menu"
              href="/"
            > {/* maybe add title */}
            <CottageIcon />
          </IconButton>
            </Typography>
            <Box sx={{ flexGrow: 1, textAlign: "left"}}> {/* a bit of a band-aid solution */}
              <MaterialUISwitch/>
            </Box>
            <label>
              {t("appBarChangeLanguageLabel")}
              <Button href={"/en" + window.location.pathname}>
                <img src={process.env.PUBLIC_URL + "/images/flags/en.svg"} alt="England's flag" title={t("englishFlagTitle")}/>
              </Button>
              <Button href={"/no" + window.location.pathname}>
                <img src={process.env.PUBLIC_URL + "/images/flags/no.svg"} alt="Norway's flag" title={t("norwegianFlagTitle")}/>
              </Button>
              <Button href={"/se" + window.location.pathname}>
                <img src={process.env.PUBLIC_URL + "/images/flags/se.svg"} alt="Sweden's flag" title={t("swedishFlagTitle")}/>
              </Button>
            </label>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default MyAppBar;