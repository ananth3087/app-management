import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import "./AddApp.css";
import Constants from "../../../utils/js/Constants";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import { fetchApp, addApp } from "../../../store/actions/index";
const AddApp = (props) => {
  const formRef = useRef();
  const nameRef = useRef();
  const descriptionRef = useRef();
  const [file, setFile] = useState(""); // storing the uploaded file    // storing the recived file from backend
  const [data, getFile] = useState({ name: "", path: "" });
  const [progress, setProgess] = useState(0); // progess bar
  const [error, setError] = useState(""); // progess bar
  const [appList, setAppList] = useState([]);
  const el = useRef(); // accesing input element
  const handleFileUpload = (e) => {
    setProgess(0);
    const file = e.target.files[0]; // accesing file
    console.log(file);
    setFile(file); // storing file
  };
  useEffect(() => {
    props.fetchApp();
  }, []);
  const uploadFile = () => {
    const formData = new FormData();
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;

    formData.append("name", name); // appending file
    formData.append("description", description); // appending file
    formData.append("apk_file", file); // appending file

    axios
      .post(Constants.URLs.API.ADD_APP, formData, {
        onUploadProgress: (ProgressEvent) => {
          let progress =
            Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
            "%";
          setProgess(progress);
        },
      })
      .then((res) => {
        props.fetchApp();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    uploadFile();
    setOpen(true);
    formRef.current.reset();
  };
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <section className="add-app">
        <h2 className="add-app__title">Add App</h2>
        <Paper>
          {!!progress && (
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={open}
              onClose={handleClose}
              autoHideDuration={6000}
            >
              <Alert severity="info">
                Form is submitted. File Uploaded Progress Percentage is{" "}
                {progress}
              </Alert>
            </Snackbar>
          )}

          {!!error && (
            <Snackbar
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={open}
              onClose={handleClose}
              autoHideDuration={6000}
            >
              <Alert severity="error">{error}</Alert>
            </Snackbar>
          )}

          <form
            name="add_app"
            className="add-app__form"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <div className="field-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                ref={nameRef}
                required
                name="name"
                className="field-input"
                id="name"
              />
            </div>
            <div className="field-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                ref={descriptionRef}
                required
                name="description"
                className="field-input"
              />
            </div>
            <div className="field-group">
              <label htmlFor="apk-file">Upload APK file</label>
              <input
                type="file"
                id="apk-file"
                name="apk-file"
                onChange={handleFileUpload}
                className="field-input"
                required
              />
            </div>
            <div className="field-group">
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Paper>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  addApp,
  fetchApp,
};
const mapStateToProps = (state) => {
  console.log(state);
  return { apps: state.app.apps };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddApp);
