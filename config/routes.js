import empleadosController from '../app/controllers/empleadosController'
import productoController from '../app/controllers/productoController'
import express        from 'express'

const api = express.Router()


api.get('/empleado', empleadosController.main)
api.get('/producto', productoController.main)


module.exports = api