"use strict";
const App = require("../models/app.model");
exports.findAll = function (req, res) {
  App.findAll(function (err, app) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", app);
    res.send(app);
  });
};
exports.create = function (req, res) {
  const new_employee = new App(req.body, req.files.apk_file);
  //handles null error
  if (!req.files) {
    return res.status(500).send({ error: true, message: "file is not found" });
  }

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    const myFile = req.files.apk_file;
    //  mv() method places the file inside public directory
    myFile.mv(`${process.cwd()}/public/apk/${myFile.name}`, function (err) {
      if (err) {
        console.log(err);
        return res.status(500).send({ error: true, message: "Error occured" });
      }
      // returing the response with file path and name
      App.create(new_employee, function (err, app) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "App added successfully!",
          data: app,
        });
      });
    });
  }
};
exports.findById = function (req, res) {
  App.findById(req.params.id, function (err, app) {
    if (err) res.send(err);
    res.json(app);
  });
};
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    App.update(req.params.id, new App(req.body), function (err, app) {
      if (err) res.send(err);
      res.json({ error: false, message: "App successfully updated" });
    });
  }
};
exports.delete = function (req, res) {
  App.delete(req.params.id, function (err, app) {
    if (err) res.send(err);
    res.json({ error: false, message: "App successfully deleted" });
  });
};
