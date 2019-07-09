const express = require('express')
// const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')

app.use(express.json())
/*
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
*/

// USERS
app.get('/users/:id', db.getUser)


// TEAM
app.get('/team/:id', db.getTeam)

app.post('/team', db.createTeam)

app.delete('/team/:id', db.deleteTeam)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
  
