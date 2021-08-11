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