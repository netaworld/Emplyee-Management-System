const mysql = require("mysql");
//var inquirer = require("inquirer");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  database: "employee_tracker",
  // Your password
  password: "rootroot"
});
connection.connect(function (err) {
  if (err) throw err;
  mainMenu();
});
const addDepartment = () => {
  inquirer
    .prompt([
    {
      type: "input",
      name: "name",
      message: "Department name?"
    }
  ]).then( answers => {
    connection.query("INSERT INTO departments (name) VALUES (?)", [answers.name], (err, rows) =>{
      if (err) throw err;
      console.log('ADDED ${answers.name} to departments.');
      mainMenu();
    });
  });
};
const addRole = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "salary?",
      name: "title"
    },
    {
      type: "input",
      message: "salary?",
      name: "salary"
    },
    {
      type: "list",
      message: "Departments",
      name: "department",
      choices: function(){
        return rows.map(row =>{
          return { name: row.name, value: row.id, short: row.name };
        })
      }
    },
  ]).then(answers => {
console.log(answers);
  })
};


const addEmployee = () => {
  console.log("Adding employee...");
};
  
//create the connection information for the sql database


// function which prompts the user for what action they should take
const mainMenu = () => {
  
  inquirer.prompt([
     { 
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "Add Department",
        "Add Role",
        "Add Employee"
      ]
    }
  ]).then(answers =>{
    switch(answers.action){
      case "Add Department":
        addDepartment();
        break;
        case "Add Role":
          addRole();
          case "Add Employee":
            addEmployee();
            break;
            default:
              console.log("exiting...");

    
    }
  })
};
