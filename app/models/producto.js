import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Producto = new Schema({
	producto: 		{ type: String },
	precio: 		{ type: Number }
});


module.exports = mongoose.model('Producto', Producto);