$(function(){
	$('.form-nuevoproducto form').form({
		nombre: {
			identifier : 'nombre',
			rules : [
				{
					type:'empty',
					prompt:'Por favor ingres un nombre'
				}
			]
		},
		 precio :{
		 	identifier : 'precio',
			rules : [
				{
					type:'empty',
					prompt:'Por favor ingres un precio'
				},
				{
					type:'number',
					prompt:'El precio debe ser numerico'					
				}
			]

		 },
		  stock :{
		 	identifier : 'stock',
			rules : [
				{
					type:'empty',
					prompt:'Por favor ingres un stock'
				},
				{
					type:'integer',
					prompt:'El precio debe ser numerico'					
				}
			]

		 }
	});
});