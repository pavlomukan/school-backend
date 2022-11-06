const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { sequelize } = require('./sequelize')

const app = express()
const port = 4000


app.use(cors());
app.use(bodyParser.json());


app.get('/teacher', async (req, res) => {
  const [teachers] = await sequelize.query(`select * from teacher;`)
  res.send(teachers);
})

app.get('/teacher/:id', (req, res) => {
  console.log(req.params);
  console.log(req.query);

  res.send('Get')
})

app.post('/teacher', async (req, res) => {
  console.log(req.body)
  const teachers = await sequelize.query(`
    insert into teacher (name, surname, subject) values
    ("${req.body.name}", "${req.body.surname}", "${req.body.subject}");`)


  res.send('created')
})

app.put('/teacher', (req, res) => {
  res.send('Hello World!')
})

app.delete('/teacher/:id', async (req, res) => {
  const teachers = await sequelize.query(`
  DELETE FROM teacher WHERE id = ${req.params.id};
  `)


  console.log(req.params)
  res.send('Delete')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
