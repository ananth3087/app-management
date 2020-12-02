import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import "./ListApp.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { fetchApp } from "../../../store/actions/index";
const ListApp = (props) => {
  useEffect(() => {
    props.fetchApp();
  }, []);
  return (
    <section className="app-list">
      <h3 className="app-list__title">App List</h3>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">File Name</TableCell>
              <TableCell align="right">File Size</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.apps &&
              props.apps.length > 0 &&
              props.apps.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="center" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.apk_file}</TableCell>
                  <TableCell align="right">{row.apk_file_size}</TableCell>
                </TableRow>
              ))}
            {props.apps.length == 0 && (
              <TableRow>
                <TableCell
                  colSpan={3}
                  component="th"
                  scope="row"
                  align="center"
                >
                  No Apps found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

const mapDispatchToProps = {
  fetchApp,
};
const mapStateToProps = (state) => {
  return { apps: state.app.apps };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListApp);
