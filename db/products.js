const connection = require("./connection");
const knex = require("knex");

function getProducts(testDb) {
  const db = testDb || connection;
  return db("products").select();
}

function getOneProduct(id, testDb) {
  const db = testDb || connection;
  return db("products")
    .where("id", id)
    .first();
}

module.exports = {
  getProducts,
  getOneProduct
};
