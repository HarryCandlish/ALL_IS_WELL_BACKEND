const connection = require("./connection");
const knex = require("knex");

function getPhilosophy(testDb) {
  const db = testDb || connection;
  return db("philosophy").select();
}

module.exports = {
  getPhilosophy
};
