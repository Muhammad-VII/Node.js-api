const express = require("express");
const { getAllUsers, addUser, updateUser, deleteUser } = require("../controller/users.controller");
const router = express.Router();

router.get('/users', getAllUsers)
router.post('/addUser', addUser)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)

module.exports = router
