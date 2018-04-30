import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Factura = new Schema({
    Empleado: 	{ type: String },
    Detalle:    { type: Array},
    SubTotal:   { type: Number},
    TotalIGIC:  { type: Number},
    TotalFactura: {type: Number}
 
});


module.exports = mongoose.model('Factura', Factura);