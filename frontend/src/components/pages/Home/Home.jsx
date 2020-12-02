import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Constants from "../../../utils/js/Constants";
import "./Home.css";
import {} from "./../../../store/actions/index";
import AddApp from "../../organisms/AddApp/AddApp";
import ListApp from "../../organisms/ListApp/ListApp";

const Home = (props) => {
  return (
    <div className="home">
      <AddApp />
      <ListApp />
    </div>
  );
};

const mapDispatchToProps = {};
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
