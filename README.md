# Práctica generación de Facturas
Práctica DSI donde hay que confeccionar un conjunto de facturas de prueba para una hipotética aplicación.

Para ejecutar el comando que rellena la base de datos con los datos del fichero y cree las colecciones, es necesario utilizar el siguiente comando:
```
npm run db
```

Por otra parte para desplegar la aplicación en el puerto http://localhost:3000/empleado o http://localhost:3000/producto, ejecutaremos:
```
npm run start
```
Pudiendo de esta manera ver los diferentes registros obtenidos desde los ficheros, e insertados en la base de datos de MongoDB.
Nota: si se desea utilizar de nuevo el comando para crear las colecciones es necesario, de forma previa, eliminar las anteriores, si no dará un fallo ya que los elementos a introducir estarán duplicados. Para ello estando en la consola de mongo ejecutaremos los siguientes comandos:
```
> use prueba
> db.empleados.drop()
> db.productos.drop()
> db.facturas.drop()
```



