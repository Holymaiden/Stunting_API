const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

const User = require("./users.route");
const Stunting = require("./stunting.route");

const { login } = require("../controllers/users.controller");

router.post("/login", login);
router.use("/users", User);
router.use("/stunting", Stunting);

module.exports = router;
