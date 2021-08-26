const express = require('express')
const app = express()
const port = 5002

app.get('/lab1', (req, res) => {
    //res.send("USER")
    res.sendFile(__dirname + '/html/index.html')
  })

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})