import express from "express";
import {
  getEmployees,
  getEmployeeById,
  getRandomEmployee,
  addEmployee,
} from "#db/employees";
const router = express.Router();
export default router;

router.route("/").get((req, res) => {
  res.send(getEmployees());
});

router.route("/").post((req, res) => {
  if (!req.body) {
    return res.status(400).send("Request must have a body.");
  }

  const { name } = req.body;

  if (!name) {
    return res.status(400).send("New employee must have a name.");
  }

  res.status(201).send(addEmployee(name));
});

router.route("/random").get((req, res) => {
  res.send(getRandomEmployee());
});

router.route("/:id").get((req, res) => {
  const id = +req.params.id;

  if (!getEmployeeById(id)) {
    return res.status(404).send("There is no employee by that ID");
  }

  res.status(201).send(getEmployeeById(id));
  //   res.send(`Employee id: ${id}`);
});
