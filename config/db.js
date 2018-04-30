import Empleado    from '../app/models/empleado.js'
import Producto    from '../app/models/producto.js'
import Factura    from '../app/models/factura.js'
import mongoose, { Collection }   from 'mongoose'
import fs from 'fs'

mongoose.connect('mongodb://localhost/prueba', async function(err, database){

    if(err) throw new Error(err)
    
    let FileEmpleados = fs.readFileSync('./data/Empleados.txt', 'utf8')
    let FileEmpleadosVec = FileEmpleados.split('\r\n')
     for (let i = 0; i < FileEmpleadosVec.length; i++ ) {
        let temp1 = FileEmpleadosVec[i]
        temp1 = temp1.replace(/(?:\\[rn]|[\r\n]+)+/g, '');
        let empleado = new Empleado({ 'nombre': temp1 })
        let result = await Empleado.findOne({'nombre': FileEmpleadosVec[i] })
        if (result) throw new Error('Empleado ya existe')
        empleado.save()
    }

    let FileProductos = fs.readFileSync('./data/Productos.csv', 'utf8')
    let FileProductosVec = FileProductos.split('\r\n');
    for (let i = 1; i < FileProductosVec.length; i++ ) {
        let temp = FileProductosVec[i]
        temp = temp.replace(/(?:\\[rn]|[\r\n]+)+/g, '');
        let tempVec = temp.split(';');
        console.log(tempVec[0]);
        let producto = new Producto({ 'producto': tempVec[0], 'precio': tempVec[1] })
        let result = await Producto.findOne({'producto': tempVec[i] })
        if (result) throw new Error('Producto ya existe')
        producto.save()
    }
    
    function Aleatorio(max){
        return Math.floor(Math.random() * (max - 1) + 1);
    }

    function get_Empleado(temp1){
        var aleatorio = Aleatorio(temp1.length);
        return temp1[aleatorio];
    }


    for(var i = 0; i < 1000; i++){

        var Detalle = [];
        var SubTotal = 0;
        var TotalIGIC = 0;
        var TotalFactura = 0;

        for(var P = 1; P <= Aleatorio(5); P ++){ 

            var Cantidad = Aleatorio(10); 

            var tempVec = FileProductosVec[Aleatorio(FileProductosVec.length)].split(';');
               
            var Subtotal_producto = Cantidad * tempVec[1]; //Cantidad * Importe
            var IGIC_producto = Subtotal_producto * 0.07; // subtotal * IGIC
            var Total_producto = Subtotal_producto + IGIC_producto; // subtotal + IGIC

            Detalle.push({ 
                'Cantidad': Cantidad, 
                'Producto': tempVec[0], 
                'Subtotal':Subtotal_producto, 
                'Importe':tempVec[1], 
                'IGIC':IGIC_producto, 
                'Total': Total_producto
            });

                
                SubTotal += Subtotal_producto;
                TotalIGIC += IGIC_producto;
                TotalFactura += Total_producto; 
        }
        
        let factura = new Factura({ 'Empleado': get_Empleado(FileEmpleadosVec),'Detalle': Detalle ,'SubTotal': Subtotal_producto,'TotalIGIC': IGIC_producto, 'TotalFactura': Total_producto});
        console.log(factura);
        factura.save()

    }
    
   //process.kill(process.pid)
    
})


