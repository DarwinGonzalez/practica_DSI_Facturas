import Empleado        from '../models/empleado.js'

async function main(req, res) {
    let empleados = await Empleado.find({})
    res.render('empleado', { empleados })
}

module.exports = { main };