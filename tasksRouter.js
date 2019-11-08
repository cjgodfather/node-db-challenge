const router = require("express").Router();

const db = require("./data/db-config");

router.get("/", (req, res) => {
  db("tasks")
    .join("projects", "tasks.project_id", "=", "projects.id")
    .select(
      "projects.name",
      "projects.projectDescription",
      "tasks.taskDescription",
      "tasks.note",
      "tasks.completed"
    )
    .then(tasks =>
      res.status(200).json(
        tasks.map(task => {
          task.completed === 0
            ? (task.completed = false)
            : (task.completed = true);
          return task;
        })
      )
    )
    .catch(err => res.status(500).json({ error: "something wrong" }));
});

router.post("/", (req, res) => {
  db("tasks")
    .insert(req.body)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({ error: "something wrong" }));
});

router.get("/:id", (req, res) => {
  db("tasks")
    .where({ "tasks.id": req.params.id })
    .then(task =>
      task.map(task => {
        task.completed === 0
          ? (task.completed = false)
          : (task.completed = true);
        return task;
      })
    )
    .then(task => res.status(200).json(task[0]))
    .catch(err => res.status(500).json({ error: "something wrong" }));
});

router.put("/:id", (req, res) => {
  db("tasks")
    .where({ "tasks.id": req.params.id })
    .update(req.body)
    .then(task => res.status(200).json(task))
    .catch(err => res.status(500).json({ error: "something wrong" }));
});

router.delete("/:id", (req, res) => {
  db("tasks")
    .where({ "tasks.id": req.params.id })
    .del()
    .then(task => res.status(200).json(task))
    .catch(err => res.status(500).json({ error: "something wrong" }));
});

module.exports = router;
