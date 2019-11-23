const express = require("express");
const projectRouter = require("./routes/projects/projectRouter.js");
const resourceRouter = require("./routes/resources/resourceRouter.js");

const server = express();

server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);

module.exports = server;
