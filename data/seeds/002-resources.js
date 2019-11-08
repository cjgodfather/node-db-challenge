exports.seed = function(knex) {
  return knex("resources").insert([
    { name: "Lambda school", resourceDescription: "best online bootcamp" },
    { name: "W3 school", resourceDescription: "open resource tutorial" },
    { name: "Youtube", resourceDescription: "video tutorial" },
    { name: "Home Depot", resourceDescription: "home improvment market" }
  ]);
};
