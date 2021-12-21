const { writeFile, readFile, unlink } = require("fs/promises");

const seeAllTasks = async (username) => {
  try {
    const indexArray = null;
    let data = JSON.parse(
      await readFile("./src/database/database.JSON", "utf8")
    );
    let userIndex = data.users.findIndex((user, index) => {
      if (user.username == username) {
        return true;
      }
    });
    if (userIndex == -1) throw new Error("User not found");

    let tasks = await data.users[userIndex].tasks;
    console.log(tasks);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { seeAllTasks };
