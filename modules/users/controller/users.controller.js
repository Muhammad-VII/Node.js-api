const fs = require('fs')
const path = require('path')
// ** DB ** //
// let users = [
//   { id: 1, name: "Muhammad Akmal", age: 21 },
//   { id: 2, name: "Ali Mahmoud", age: 23 },
//   { id: 3, name: "Ahmed Magdy", age: 24 },
//   { id: 4, name: "Samar Selim", age: 30 },
//   { id: 5, name: "Heba Ahmed", age: 25 },
// ];
// ** End ** //

//** Get all users **//
const getAllUsers = (req, res) => {
  let data = fs.readFileSync(path.join(__dirname, "../db/db.json"))
  let parsedData = JSON.parse(data)
  res.json(parsedData);
};

const addUser = (req, res) => {
  users.push(req.body);
  res.json({message: `Success`})
};

module.exports = {
  getAllUsers,
  addUser,
};
