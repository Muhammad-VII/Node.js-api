const router = require("express").Router();
const { getAllUsers, addUser, updateUser, deleteUser } = require("../controller/users.controller");

router.get('/users', getAllUsers)
router.post('/addUser', addUser)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)

module.exports = router
