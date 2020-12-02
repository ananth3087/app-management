"use strict";
var dbConn = require("./../../config/db.config");
//App object create
var App = function (app, file) {
  this.name = app.name;
  this.description = app.description;
  this.apk_file = file.name;
  this.apk_version = app.apk_version || 2.1;
  this.apk_file_size =
    file.size && (file.size / (1024 * 1024)).toFixed(2) + " MB";
  this.status = app.status ? app.status : 1;
  this.created_at = new Date();
  this.updated_at = new Date();
};
App.create = function (newEmp, result) {
  dbConn.query("INSERT INTO app set ?", newEmp, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
App.findById = function (id, result) {
  dbConn.query("Select * from app where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
App.findAll = function (result) {
  dbConn.query("Select * from app", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("app : ", res);
      result(null, res);
    }
  });
};
App.update = function (id, app, result) {
  dbConn.query(
    "UPDATE app SET name=?,description=?,apk_file=?,apk_version=?,apk_file_size=? WHERE id = ?",
    [
      app.name,
      app.description,
      app.apk_file,
      app.apk_version,
      app.apk_file_size,
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
App.delete = function (id, result) {
  dbConn.query("DELETE FROM app WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = App;
