const connection = require("./connection");
const knex = require("knex");

function getSuicide(testDb) {
  const db = testDb || connection;
  return db("suicide").select();
}

module.exports = {
  getSuicide
};
