import { Box, AppBar, Container, Toolbar, Typography, Button } from "@mui/material";
import MaterialUISwitch from "./MaterialUISwitch";


function MyAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <MaterialUISwitch />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default MyAppBar;