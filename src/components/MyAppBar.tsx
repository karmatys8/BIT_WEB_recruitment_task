import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import MaterialUISwitch from "./MaterialUISwitch";


function MyAppBar() {
  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{mr: 2}}>
              Home
            </Typography>
            <Box sx={{ flexGrow: 1, textAlign: "left"}}> {/* a bit of a band-aid solution */}
              <MaterialUISwitch/>
            </Box>
            <label>Change language:
            <Button>
              <img src={process.env.PUBLIC_URL + "/images/flags/en.svg"} alt="England's flag" title="England"/>
            </Button>
            <Button>
              <img src={process.env.PUBLIC_URL + "/images/flags/no.svg"} alt="Norway's flag" title="Norway"/>
            </Button>
            <Button>
              <img src={process.env.PUBLIC_URL + "/images/flags/se.svg"} alt="Sweden's flag" title="Sweden"/>
            </Button></label>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default MyAppBar;