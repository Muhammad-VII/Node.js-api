const express = require("express");
const { getAllUsers } = require("../controller/users.controller");
const router = express.Router();

router.get('/users', getAllUsers)

router.post("/addUser", (req, res) => {
  users.push(req.body);
  res.send({message: `added successfully`})
});

module.exports = router
