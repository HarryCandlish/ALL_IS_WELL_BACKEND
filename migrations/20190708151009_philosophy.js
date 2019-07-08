exports.up = function(knex, Promise) {
  return knex.schema.createTable("philosophy", function(table) {
    table.increments("id").primary;
    table.string("title");
    table.string("details");
    table.string("description");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("philosophy");
};
