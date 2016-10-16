var mysql=require('mysql');
var dateFormat = require('dateformat');

//productos controller
module.exports={
	//funciones del controlador
	getProdcutos : function(req, res, next){		
		var config =require('.././database/config');;
	    var db=mysql.createConnection(config);
		db.connect();
		var prodcutos=null;

		db.query('SELECT * FROM  Productos', function(err,rows,fields){
				if(err) throw err;

				prodcutos=rows;
				db.end();

	            res.render('productos/productos',{ListProductos: prodcutos});
		});
	
	},
	 getNuevoProducto : function(req, res, next){			
	    res.render('productos/nuevo');
	},

	 postNuevoProducto : function(req, res, next){			
	  var fechaactual = new Date();
	  var fecha = dateFormat(fechaactual,'yyyy-mm-dd hh:MM:ss');
	  var producto = {
	   	nombre: req.body.nombre,//la variable va de acuerdo como esta   base 
	   	precio: req.body.precio,
	   	stock:  req.body.stock,
	   	fecha_creacion: fecha
	   }
	  var config =require('.././database/config');;
	  var db=mysql.createConnection(config);
	   db.connect();
	  // console.log(producto);
	  db.query('insert into  Productos SET ?' ,producto, function(err,rows,fields){
				if(err) throw err;			
				db.end();
	           
		});
	   res.render('productos/nuevo',{info: 'Se ha Guardado :D'});
	},

	 EliminarProducto : function(req, res, next){			
	   var id = req.body.id;// cuando se envia parametros por post se envia por body
	   var config =require('.././database/config');;
	   var db=mysql.createConnection(config);
	   var respuesta={res:false};
	    db.connect();
	     db.query('delete from Productos where id_producto = ?',id, function(err,rows,fields){
				if(err)throw err; 
				db.end();
				respuesta.res=true;
	           res.json(respuesta);
		});
	},
	 getModificarProducto : function(req, res, next){			
	   var id = req.params.id;// cuando se envia parametros por get se envia por params
	   var config =require('.././database/config');;
	 //  console.log(id);
	    var db=mysql.createConnection(config);
	 
	    db.connect();
	   	var prodcutos=null;
		db.query('SELECT * FROM  Productos where id_producto = ?',id, function(err,rows,fields){
				if(err) throw err;
				prodcutos=rows;
				db.end();
	            res.render('productos/modificar',{ListProductos: prodcutos});
		});
	},
		 postModificarProducto : function(req, res, next){			
		  var fechaactual = new Date();
		  var fecha = dateFormat(fechaactual,'yyyy-mm-dd hh:MM:ss');
		  var producto = {
		   	nombre: req.body.nombre,//la variable va de acuerdo como esta   base 
		   	precio: req.body.precio,
		   	stock:  req.body.stock
		   
		   }
		  var config =require('.././database/config');;
		  var db=mysql.createConnection(config);
		   db.connect();
		  // console.log(producto);
		  db.query('update   Productos SET ? where ?' ,[producto,{id_producto: req.body.id_producto}], function(err,rows,fields){
					if(err) throw err;			
					db.end();
		           
			});
		   res.redirect('/productos');
		}

}