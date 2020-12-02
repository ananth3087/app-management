import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Constants from "../../../utils/js/Constants";
import "./Header.css";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
const Header = (props) => {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar>
          <Link to="/" className="header__title">
            <Typography variant="h6">{Constants.HEADER.TITLE}</Typography>
          </Link>
          <div className="header__top-links">
            <Link to="/add-app" className="header__link">
              <Button color="inherit" variant="outlined">
                Add App
              </Button>
            </Link>
            <Link to="/list-app" className="header__link">
              <Button color="inherit" variant="outlined">
                List App
              </Button>
            </Link>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
