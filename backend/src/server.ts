const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { Pool, Client} = require('pg')
const { query } = require('express')
const router = express.Router()
const conncetionString = 'postgressql://postgres:united@localhost:5432/v1'


// app.use(bodyParser.json())


router.use(bodyParser.json())



const client = new Client ({
  connectionString:conncetionString
});

client.connect()

let id: number = 1

client.query(`SELECT * from users where id = ${id}`,(err, res)=>{
  console.log(err,res)
})


/* GET home page. */
router.get('/apiv1/home', (req, res) => {
  res.render('index', { title: 'Express' })
  res.sendStatus(200);
})


router.post('/apiv1/user/register', (req, res) => {
  console.log(req.body)
  // res.render('index', { title: 'Hello, GET request at apiv1/user/register' });
  res.render('index', { title: req.body })
  res.sendStatus(200);
})


app.use('/apiv1', router)

module.exports = router;