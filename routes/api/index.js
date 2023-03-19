//
const router = require("express").Router();
const routesThought = require("./routesThought");
const routesUser = require("./routesUser");

//
router.use("/thoughts", routesThought);
router.use("/users", routesUser);

//
module.exports = router;
