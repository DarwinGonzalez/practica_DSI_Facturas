import Empleado    from '../app/models/empleado.js'
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
    
   process.kill(process.pid)
    
})


