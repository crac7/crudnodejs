var express = require('express');
var router = express.Router();
var controllers =require('.././controles');
/* GET home page. */
router.get('/', controllers.home.index);

//rutas para productos
router.get('/productos', controllers.productos.getProdcutos);
router.get('/nuevo', controllers.productos.getNuevoProducto);
router.post('/crearproducto', controllers.productos.postNuevoProducto);
router.post('/eliminarproducto', controllers.productos.EliminarProducto);
router.get('/ModificarProducto/:id', controllers.productos.getModificarProducto);
router.post('/editar', controllers.productos.postModificarProducto);
module.exports = router;
