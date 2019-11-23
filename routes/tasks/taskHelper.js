const db = require("../../data/dbConfig.js");

function getTasks() {
  return db.select("*").from("tasks");
}

function getTaskById(id) {
  return db
    .select("*")
    .from("tasks")
    .where({ id });
}

function addTask(task) {
  return db
    .insert(task)
    .into("tasks")
    .then(res => {
      const id = res[0];
      return db
        .select("*")
        .from("tasks")
        .where({ id });
    });
}

module.exports = {
  getTaskById,
  getTasks,
  addTask
};
