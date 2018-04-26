import Producto        from '../models/producto.js'

async function main(req, res) {
    let productos = await Producto.find({})
    res.render('producto', { productos: productos })
}

module.exports = { main };