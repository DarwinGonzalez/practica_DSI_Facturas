import Empleado        from '../models/empleado.js'
import fs from 'fs'

async function main(req, res) {
    let empleado = await Empleado.find({})
    res.render('empleado', { empleado: empleado })
}

async function getEmpleado(req, res) {

    var FileEmpleados = fs.readFileSync('./data/Empleados.txt', 'utf8');
    console.log(FileEmpleados);
    var FileEmpleadosVec = FileEmpleados.split('\n');

    for (i = 0; i < FileEmpleadosVec.length; i++ ) {
        const empleado = new Empleado({ 'nombre': FileEmpleadosVec[i] })
        let result = await Empleado.findOne({'nombre': FileEmpleadosVec[i] })
        if (result) throw new Error('Empleado ya existe')
        item.save()
    }
    res.redirect('/empleado')
}

module.exports = { main, getEmpleado };