const term = require("terminal-kit").terminal;
const { createTask } = require("../task/createTask");
const { updateTask } = require("../task/updateTask");

// Menu: crear tasca, actualitzar tasca, esborrar tasca, llistar totes les tasques o llistar una tasca específica

const menu = async (username) => {
  term.green("Select one option from the menu: \n");
  const items = [
    "1. Create Task", // createTask()
    "2. Update Task", // updateTask()
    "3. Delete Task", // deleteTask()
    "4. See all Tasks", // seeAllTasks()
    "5. See specific Task", // seeOneTask()
    "6. Exit",
  ];

  // Callback
  term.singleColumnMenu(items, (error, response) => {
    term("\n").eraseLineAfter.red(
      "#%s selected: %s \n",
      response.selectedIndex + 1,
      response.selectedText
    );

    switch (response.selectedIndex + 1) {
      case 1:
        term.black.bgGreen("Please enter Task description:\n");
        term.inputField((error, input) => {
          createTask(username, input)
            .then(() => {
              process.exit();
            })
            .catch((error) => console.log(error));
        });
        break;
      case 2:
        term.black.bgGreen(
          "Please enter the Task description that you want to update:\n"
        );
        term.inputField((error, input) => {
          term.black.bgGreen(
            "\nPlease enter the new Task:\n"
          );
          term.inputField((error, input2) => {
            updateTask(username, input, input2)
              .then(() => {
                process.exit();
              })
              .catch((error) => console.log(error));
          });
        });
        break;
      case 3:
        console.log("Option3");
        break;
      case 4:
        console.log("Option4");
        break;
      case 5:
        console.log("Option5");
        break;
      case 6:
        console.log("Good Bye!");
        process.exit();
    }

    if (error) {
      throw new Error(error);
    }
  });
};

module.exports = { menu };
