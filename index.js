
import express    from 'express'
import cookie     from 'cookie-parser'
import path       from 'path'
import bodyParser from 'body-parser'
import session    from 'express-session'
import api        from './config/routes'
import mongoose   from 'mongoose'
import Mongoclient from 'mongodb'
import fs from 'fs'
  
const app = express()

mongoose.connect('mongodb://localhost/prueba', function(err, database) {  if(err) throw new Error(err) })



app.set('views', path.join(__dirname, '/app/views'))
app.set('view engine', 'ejs')
app.set('port', (process.env.PORT || 4000))

app.use(cookie())
app.use(session({secret: 'darwin', resave: true, saveUninitialized: true }))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname + "/public")))


app.use('/', api)

app.listen(3000)


module.exports = app