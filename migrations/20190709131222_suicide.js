exports.up = function(knex, Promise) {
  return knex.schema.createTable("suicide", function(table) {
    table.increments("id").primary;
    table.string("label");
    table.string("backgroundColor");
    table.string("pointBorderColor");
    table.string("borderColor");
    table.integer("data");
    table.boolean("fill");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("suicide");
};
