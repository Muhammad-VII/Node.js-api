const express = require("express");
const port = 3000;
const app = express();
const usersRoutes = require('./modules/users/routes/users.routes.js')
const notesRoutes = require('./modules/notes/routes/notes.routes.js')

// ** middleware ** //
app.use(express.json());
// ** end** //

app.get("/", (req, res) => { // Default endpoint (GET)
  res.send('express')
});

// ** routes ** //
app.use(usersRoutes)
app.use(notesRoutes)
// ** end ** //

app.listen(port, () => { // ** hosting ** //
  console.log(`listening on http://localhost:${port}`);
});

// let users = [
//   { id: 1, name: "Muhammad Akmal", age: 21 },
//   { id: 2, name: "Ali Mahmoud", age: 23 },
//   { id: 3, name: "Ahmed Magdy", age: 24 },
//   { id: 4, name: "Samar Selim", age: 30 },
//   { id: 5, name: "Heba Ahmed", age: 25 },
// ];

// app.get("/users", (req, res) => { // Get all users endpoint (GET)
//   res.send(users);
// });

// app.post("/addUser", (req, res) => { // Add new user endpoint (POST)
//   users.push(req.body);
//   res.json({ message: "Added successfully" });
// });

// app.post("/updateUser", (req, res) => { // update existing user endpoint (POST)
//   users = users.map((ele) => ele.id == req.body.id ? req.body : ele);
//   res.json({ message: "Updated successfully" });
// });

// app.post("/deleteUser", (req, res) => { // delete existing user endpoint (POST)
//   users = users.filter((ele) => ele.id != req.body.id);
//   res.json({ message: "deleted successfully" });
// });

// app.get('/singleUser/:id/:name', (req,res) => { // params
//   console.log(req.params);
//   let { id } = req.params;
//   let results = users.find((ele) => ele.id == id)
//   if(results) {
//     res.json(results);
//   } else {
//     res.json({message: `Not found`})
//   }
// })

// app.get('/singleUserQuery', (req,res) => { // Query & headers test
//   console.log(req.query); 
//   // console.log(req.headers); 
//   res.json({message: `success`})
// })


