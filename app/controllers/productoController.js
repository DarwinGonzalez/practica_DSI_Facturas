import Producto        from '../models/producto.js'


async function main(req, res) {
    let productos = await Producto.find({})
    res.render('producto', { productos: productos })
}

async function getProducto(req, res) {
    const iproducto = new Producto({ 'producto': req.body.producto, 'precio': req.body.precio })
    let result = await Producto.findOne({'producto':req.body.producto})
    if (result) throw new Error('Producto ya existe')
    item.save()

    res.redirect('/producto')
}

module.exports = { main, getProducto };