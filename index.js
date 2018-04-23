
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/', function(err, database) {
    
    if(err) { return console.dir(err); }
    
    const MyDB = database.db('test');
    var ColecionProductos = MyDB.collection('Productos');
    var FileProductos = fs.readFileSync('./data/Productos.csv', 'utf8');
    var FileEmpleados = fs.readFileSync('./data/Empleados.txt', 'utf8');
})