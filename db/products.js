const connection = require("./connection");
const knex = require("knex");

function getProducts(testDb) {
  const db = testDb || connection;
  return db("products").select();
}

module.exports = {
  getProducts
};
