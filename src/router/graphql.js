const express = require("express");
const router = express.Router();
const Graphql = require("../controller/graphql");

router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.use("/", Graphql.graphql());

module.exports = router;
