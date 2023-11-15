import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";
import MyAppBar from "../components/MyAppBar";


function SharedLayout() {
  return (
    <>
      <MyAppBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default SharedLayout;