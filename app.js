import express from "express";
const app = express();
export default app;
app.use(express.json());

// import employees from "#db/employees";
import employeeRoutes from "./api/employeesApi.js";

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.use("/employees", employeeRoutes);

// Note: this middleware has to come first! Otherwise, Express will treat
// "random" as the argument to the `id` parameter of /employees/:id.

app.use("/random", employeeRoutes);

// Catch-all error-handling middleware
app.use((err, req, res, next) => {
  res.status(500).send("Sorry! Something went wrong here t('-'t)");
});

// app.route("/employees/random").get((req, res) => {
//   const randomIndex = Math.floor(Math.random() * employees.length);
//   res.send(employees[randomIndex]);
// });

// app.route("/employees").get((req, res) => {
//   res.send(employees);
// });

// app.route("/employees/:id").get((req, res) => {
//   const { id } = req.params;

//   // req.params are always strings, so we need to convert `id` into a number
//   // before we can use it to find the employee
//   const employee = employees.find((e) => e.id === +id);

//   if (!employee) {
//     return res.status(404).send("Employee not found");
//   }

//   res.send(employee);
// });
