require('dotenv').config();
const express = require('express'),
cors = require('cors'),
massive = require('massive'),
session = require('express-session'),
chalk = require('chalk')

// controller functions
const authCTRL = require('./controllers/auth_controller')

// ENV Variables 
const {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET
} = process.env;


// App instance
const app = express()

// TLM
app.use(express.json())
app.use(cors())
app.use(session({
    resave:false,
    saveUninitialized:true,
    secret: SESSION_SECRET,
    cookie:{
        maxAge:60000
    }
}))

// DB CONNECTED
massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    console.log(chalk.cyan('database is databasing'))
}).catch(error => {console.log(error)})


// Auth Endpoints
app.post('/auth/register', authCTRL.register)

app.post('/auth/login', authCTRL.login)

app.delete('/auth/logout')


// Server is listening 
app.listen(SERVER_PORT,() => {
    console.log(chalk.cyan('server is serving'))
})