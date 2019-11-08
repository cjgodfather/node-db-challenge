const router = require("express").Router();

const db = require("./data/db-config");

router.get("/", (req, res) => {
  db("resources")
    .then(resources => res.status(200).json(resources))
    .catch(err => res.status(500).json({ error: "something wrong" }));
});

router.post("/", (req, res) => {
  db("resources")
    .insert(req.body)
    .then(number => res.status(200).json(number))
    .catch(err => res.status(500).json({ error: "something wrong" }));
});

router.get("/:id", (req, res) => {
  db("resources")
    .where({ "resources.id": req.params.id })
    .then(task => res.status(200).json(task[0]))
    .catch(err => res.status(500).json({ error: "something wrong" }));
});

router.delete("/:id", (req, res) => {
  db("resources")
    .where({ "resources.id": req.params.id })
    .del()
    .then(task => res.status(200).json(task))
    .catch(err => res.status(500).json({ error: "something wrong" }));
});

module.exports = router;
