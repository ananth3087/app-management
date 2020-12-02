const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/app.controller");
// Retrieve all app
router.get("/", employeeController.findAll);
// Create a new app
router.post("/", employeeController.create);
// Retrieve a single app with id
router.get("/:id", employeeController.findById);
// Update a app with id
router.put("/:id", employeeController.update);
// Delete a app with id
router.delete("/:id", employeeController.delete);
module.exports = router;
