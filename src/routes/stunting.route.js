const express = require("express");
const router = express.Router();

const {
  getAll,
  create,
  update,
  remove,
} = require("../controllers/stunting.controller");

router.get("/", getAll);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
