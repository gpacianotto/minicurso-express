const express = require('express')
const app = express()
const port = 3000
const user = require("./src/models/Users.ts")

app.get('/', async (req, res) => {
  
  const test = {
    name: "xandao",
    login: "xandaounesp"
  }

  const users = await user.findAll();
  res.json(users);
  
  res.json(test);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})