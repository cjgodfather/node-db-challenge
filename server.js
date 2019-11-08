const express = require("express");

const projectsRouter = require("./projectsRouter");
const resourcesRouter = require("./resourcesRouter");
const tasksRouter = require("./tasksRouter");
const server = express();

server.use(express.json());

server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter);

server.get("/", (req, res) => {
  res.send("have fun in sprint challenge !");
});

module.exports = server;
