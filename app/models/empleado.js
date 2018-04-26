import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Empleado = new Schema({
	nombre: 		{ type: String }
});


module.exports = mongoose.model('Empleado', Empleado);