const express = require("express");
const router = express.Router();
const { createUser, getAllUsers, updateUser, deleteUser } = require("../controllers/user");

router.post("/create", createUser);
router.get("/getData", getAllUsers);
router.post("/update", updateUser);
router.delete("/delete", deleteUser);

module.exports = router;
