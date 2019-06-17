const express = require("express");
const app = express();
const graphqlRouter = require("./src/router/graphql");

function loggingMiddleware(req, res, next) {
  console.log("ip:", req.ip);
  next();
}

app.use(loggingMiddleware);
app.use("/graphql", graphqlRouter);
app.listen(4000);
console.log("Running a  GraphQL API server at localhost:4000/graphql");
