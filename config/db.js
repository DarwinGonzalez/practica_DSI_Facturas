import Empleado    from '../app/models/empleado.js'
import Producto    from '../app/models/producto.js'
import mongoose   from 'mongoose'
import fs from 'fs'

mongoose.connect('mongodb://localhost/prueba', async function(err, database){

    if(err) throw new Error(err)
    
    let FileEmpleados = fs.readFileSync('./data/Empleados.txt', 'utf8')
    let FileEmpleadosVec = FileEmpleados.split('\n')
     for (let i = 0; i < FileEmpleadosVec.length; i++ ) {
        let temp = FileEmpleadosVec[i]
        temp = temp.replace(/(?:\\[rn]|[\r\n]+)+/g, '');
        let empleado = new Empleado({ 'nombre': temp })
        let result = await Empleado.findOne({'nombre': FileEmpleadosVec[i] })
        if (result) throw new Error('Empleado ya existe')
        empleado.save()
    }

    let FileProductos = fs.readFileSync('./data/Productos.csv', 'utf8')
    let FileProductosVec = FileProductos.split('\n');
    for (let i = 1; i < FileProductosVec.length; i++ ) {
        let temp = FileProductosVec[i]
        temp = temp.replace(/(?:\\[rn]|[\r\n]+)+/g, '');
        let tempVec = temp.split(';');
        console.log(tempVec[0]);
        let producto = new Producto({ 'producto': tempVec[0], 'precio': tempVec[1] })
        let result = await Producto.findOne({'producto': tempVec[i] })
        if (result) throw new Error('Producto ya existe')
        producto.save()
    }
    
   process.kill(process.pid)
    
})


