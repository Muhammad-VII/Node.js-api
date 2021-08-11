const connection = require("../../../configration/config");

//** Get all users **//
const getAllUsers = (req, res) => {
  connection.query(`SELECT * FROM users`, (err, data) => {
    if (data != null) {
      res.json({ message: `success`, data: data });
    } else {
      res.json({ message: `error`, error: err });
    }
  });
};

//** Add user endpoint **//
const addUser = (req, res) => {
  let { name, email, password } = req.body;
  connection.query(
    `INSERT INTO users( name, email, password) VALUES ('${name}','${email}','${password}')`,
    (err, data) => {
      if (err) {
        res.json({ message: err });
      } else {
        res.json({ message: "Added successfully", data });
      }
    }
  );
};

//** Update user endpoint **//
const updateUser = (req, res) => {
  let { name, email, password } = req.body;
  let id = req.params.id;
  connection.query(
    `UPDATE users SET name = '${name}', email = '${email}', password = '${password}' WHERE id = ${id}`,
    (err, data) => {
      if (err) {
        res.json({ message: "error", err });
      } else {
        res.json({ message: "updated successfully", data });
      }
    }
  );
};

//** Delete user endpoint **//
const deleteUser = (req, res) => {
  let id = req.params.id;
  connection.query(`DELETE FROM users WHERE id = ${id}`, (err, data) => {
    if (err) {
      res.json({ message: "error", err });
    } else {
      res.json({ message: "Deleted successfully", data });
    }
  });
};

module.exports = {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
};
