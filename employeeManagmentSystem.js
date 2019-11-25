var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "rootroot",
  database: "employeeManagmentSystem_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "WhatDoYouWantToDO",
      type: "list",
      message: "What do you want to do?",
      choices: ["VIEW", "REMOVE", "ADD", "UPDATE"]
    })
    .then(function(answer) {
      // based on their answer, either call the view or the remove functions
      if (answer.WhatDoYouWantToDO === "VIEW") {
        viewResults();
      }
      else if(answer.WhatDoYouWantToDO === "REMOVE") {
        removeResuslts();
      } else{
        connection.end();
      }
    });
    .then(function(answer) {
        // based on their answer, either call the add or the update functions
        if (answer.WhatDoYouWantToDO === "ADD") {
          viewResults();
        }
        else if(answer.WhatDoYouWantToDO === "UPDATE") {
          removeResuslts();
        } else{
          connection.end();
        }
      });


}

// function to handle posting new info about employees
function viewResults() {
  
  inquirer
    .prompt([
      {
        name: "employee",
        type: "input",
        message: "What would you like to do?"
      },
      {
        name: "category",
        type: "input",
        message: "Which employee would you like to remove?"
      },
      {
        name: "choise",
        type: "input",
        message: "Whatr is Employees name?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function(answer) {
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "INSERT INTO employee SET ?",
        {
          employee_name: answer.item,
          category: answer.category,
         
        },
        function(err) {
          if (err) throw err;
          console.log("Check list!");
          // re-prompt the user for if they want check list
          start();
        }
      );
    });
}

function viewResults() {
  // query the database for all items being auctioned
  connection.query("SELECT * FROM employees", function(err, results) {
    if (err) throw err;
    
   

  
  function queryAllEmployees() {
    connection.query("SELECT * FROM employees", function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].title + " | " + res[i].salary + ");
     );
  }
    // logs the actual query being run
    console.log(query.sql);
    connection.end();
  }