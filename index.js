
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

Mongoclient.connect('mongodb://localhost/test', function(err, database){
    
if(err) {
        return console.dir(err);
    }

    const MyDB = database.db('test');
    var FileProductos = fs.readFileSync('./data/Productos.csv', 'utf8');
    var FileEmpleados = fs.readFileSync('./data/Empleados.txt', 'utf8');
    var FileEmpleadosVec = FileEmpleados.split('\n');
    console.log(FileEmpleadosVec);
})

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