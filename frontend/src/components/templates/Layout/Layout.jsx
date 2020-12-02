import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../../pages/Home/Home";
import { Container } from "@material-ui/core";
const Layout = (props) => {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="md">{props.children}</Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
