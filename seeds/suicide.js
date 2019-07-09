exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("suicide")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("suicide").insert([
        {
          id: 1,
          label: "Youth Suicide",
          backgroundColor: "black",
          pointBorderColor: "black",
          borderColor: "black",
          data: [1, 3, 4, 5, 7],
          fill: false
        },
        {
          id: 2,
          label: "Adult Suicide",
          backgroundColor: "#3cc47c",
          pointBorderColor: "#3cc47c",
          borderColor: "#3cc47c",
          data: [5, 8, 10, 12, 14],
          fill: false
        }
      ]);
    });
};
