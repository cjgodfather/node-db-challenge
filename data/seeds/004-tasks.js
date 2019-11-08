exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      taskDescription: "preview TK",
      note: "very beneficial",
      completed: false,
      project_id: 1
    },
    {
      taskDescription: "do daily projects",
      note: "practice, practice, pratice",
      completed: false,
      project_id: 1
    },
    {
      taskDescription: "pass sprint",
      note: "it's a must",
      completed: false,
      project_id: 1
    },
    {
      taskDescription: "do the exercies on W3 school",
      note: "good practice",
      completed: false,
      project_id: 2
    },
    {
      taskDescription: "check the answer",
      note: "learn from mistakes",
      completed: false,
      project_id: 2
    },
    {
      taskDescription: "buy the hardware",
      note: "cheaper the better",
      completed: false,
      project_id: 3
    },
    {
      taskDescription: "watch DIY on Youtube",
      note: "learn form others",
      completed: false,
      project_id: 3
    }
  ]);
};
