const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// middle ware
app.use(express.static("public")); //to access the files in public folder
app.use(cors()); // it enables all cors requests
app.use(fileUpload());
// define a root route
app.get("/", (req, res) => {
  res.send("Hello World");
});
// Require app routes
const appRoutes = require("./src/routes/app.routes");
// using as middleware
app.use("/api/v1/app", appRoutes);

// file upload api
app.post("/upload", (req, res) => {
  if (!req.files) {
    return res.status(500).send({ msg: "file is not found" });
  }
  console.log(req);
  // accessing the file
  const myFile = req.files.apk_file;
  //  mv() method places the file inside public directory
  myFile.mv(`${__dirname}/public/apk/${myFile.name}`, function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send({ msg: "Error occured" });
    }
    // returing the response with file path and name
    return res.send({ name: myFile.name, path: `/${myFile.name}` });
  });
});
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
