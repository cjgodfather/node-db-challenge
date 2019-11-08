exports.seed = function(knex) {
  return knex("projects").insert([
    {
      name: "Learn React",
      projectDescription: "one of the most popular library",
      completed: false
    },
    {
      name: "Learn Node",
      projectDescription: "Javascript run time tool",
      completed: false
    },
    {
      name: "Home Improvement",
      projectDescription: "Remodel my house",
      completed: false
    }
  ]);
};
