const term = require("terminal-kit").terminal;
const { userCheck } = require("../user/userCheck");
const { menu } = require("./menu");
const { v4: uuidv4 } = require("uuid");

const userIdentify = async () => {
  term.black.bgGreen("Hello User\n");
  term.black.bgGreen("Please enter your username:\n");

  term.inputField((error, input) => {
    if (input == "") {
      term.red("No username provided\n");
      let invitedUsername = "invited-" + uuidv4();
      input = invitedUsername;
      term.red(`Your unsername will be: ${input}\n`);
    }
    term.red(`\nYour name is: ${input}\n`);
    userCheck(input).then(() => {
      menu(input.toLocaleLowerCase());
    });
    if (error) {
      throw new Error(error);
    }
  });
};

module.exports = { userIdentify };
