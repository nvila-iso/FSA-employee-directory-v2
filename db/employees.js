const employees = [
  { id: 1, name: "Carolynn McGinlay" },
  { id: 2, name: "Lodovico Filon" },
  { id: 3, name: "Jefferey Wahlberg" },
  { id: 4, name: "Kayley Tures" },
  { id: 5, name: "Rickard Carver" },
  { id: 6, name: "Michael Stryde" },
  { id: 7, name: "Averell Santino" },
  { id: 8, name: "Constantina Connue" },
  { id: 9, name: "Verile Bondesen" },
  { id: 10, name: "Gwen Grollmann" },
];

// console.log(employees);

// Get all employees
export function getEmployees() {
  return employees;
}

export function getRandomEmployee() {
  const randomIndex = Math.floor(Math.random() * employees.length + 1);
  // return typeof randomIndex;
  const randomEmployee = employees.find(
    (employee) => employee.id === randomIndex
  );
  return randomEmployee;
}

export function getEmployeeById(id) {
  return employees.find((employee) => employee.id === id);
}

export function addEmployee(name) {
  const newID = employees.length + 1;
  const newEmployee = { id: newID, name };
  employees.push(newEmployee);
  return newEmployee;
}

/* WARNING: this must remain the default export in order for the tests to work! */
export default employees;

// console.log(getRandomEmployee());
// console.log(getEmployeeById(1));

// addEmployee("nick");
// console.log(employees);
