//import productoController from '../app/controllers/productoController'
import empleadosController from '../app/controllers/empleadosController'
import express        from 'express'

const api = express.Router()

//api.get('/producto', productoController.main)
//api.post('/producto', productoController.getProducto)

api.get('/empleado', empleadosController.main)


module.exports = api