const router = require("express").Router();

const db = require("./data/db-config");

router.get("/", (req, res) => {
  db("projects")
    .then(projects =>
      res.status(200).json(
        projects.map(project => {
          project.completed === 0
            ? (project.completed = false)
            : (project.completed = true);
          return project;
        })
      )
    )
    .catch(err => res.status(500).json({ error: "something wrong" }));
});

router.post("/", (req, res) => {
  db("projects")
    .insert(req.body)
    .then(number => res.status(200).json(number))
    .catch(err => res.status(500).json({ error: "something wrong" }));
});

router.get("/:id", (req, res) => {
  db("projects")
    .where({ "projects.id": req.params.id })
    .then(project =>
      project.map(project => {
        project.completed === 0
          ? (project.completed = false)
          : (project.completed = true);
        return project;
      })
    )
    .then(project => res.status(200).json(project[0]))
    .catch(err => res.status(500).json({ error: "something wrong" }));
});

router.delete("/:id", (req, res) => {
  db("projects")
    .where({ "projects.id": req.params.id })
    .del()
    .then(result => res.status(200).json({ result }))
    .catch(err => res.status(500).json({ error: "something wrong" }));
});

router.put("/:id", (req, res) => {
  db("projects")
    .where({ "projects.id": req.params.id })
    .update(req.body)
    .then(result => res.status(200).json({ result }))
    .catch(err => res.status(500).json({ error: "something wrong" }));
});

router.get("/:id/tasks", (req, res) => {
  db("projects")
    .join("tasks", "tasks.project_id", "=", "projects.id")
    .select(
      "projects.name",
      "projects.projectDescription",
      "tasks.taskDescription",
      "tasks.note",
      "tasks.completed"
    )
    .where({ "projects.id": req.params.id })
    .then(lists =>
      res.status(200).json(
        lists.map(list => {
          list.completed === 0
            ? (list.completed = false)
            : (list.completed = true);
          return list;
        })
      )
    )
    .catch(err => res.status(500).json({ error: "something wrong" }));
});

module.exports = router;
