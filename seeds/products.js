exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("products").insert([
        {
          id: 1,
          type: "T-Shirt",
          color: "Black",
          price: "$20",
          size: "M, L, S",
          image: "./tshirt.jpg"
        },
        {
          id: 2,
          type: "Longsleeve",
          color: "White",
          price: "$20",
          size: "M, L, S",
          image: "./tshirt.jpg"
        },
        {
          id: 3,
          type: "T-Shirt",
          color: "Red",
          price: "$20",
          size: "M, L, S",
          image: "./tshirt.jpg"
        },
        {
          id: 4,
          type: "T-Shirt",
          color: "White",
          price: "$20",
          size: "M, L, S",
          image: "./tshirt.jpg"
        },
        {
          id: 5,
          type: "T-Shirt",
          color: "Blue",
          price: "$20",
          size: "M, L, S",
          image: "./tshirt.jpg"
        },
        {
          id: 6,
          type: "Longsleeve",
          color: "Black",
          price: "$20",
          size: "M, L, S",
          image: "./tshirt.jpg"
        }
      ]);
    });
};
