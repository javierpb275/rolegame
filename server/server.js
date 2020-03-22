const express = require('express');
const app = express();
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
//const registerClass = require('./controllers/registerClass');
const signin = require('./controllers/signin');
//const profile = require('./controllers/profile');


const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'postgres',
    database : 'rolegame'
  }
});

app.use(express.json());
app.use(cors());

//app.get('/home', (req, res) => { res.send(database.users) })
app.post('/signin', (req, res) => {signin.handleSignin(req, res, db, bcrypt)})
app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt)})
//app.post('/register/class', (req, res) => {registerClass.handleRegisterClass(req, res, db)})
//app.get('/profile/:id', (req, res) => {profile.handleProfileGet(req, res, db)})

app.listen(3001, () => {
    console.log('app is running on port 3001');
})