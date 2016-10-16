Create database TutorialNodejs;
use TutorialNodejs;
Create table Productos(
 id_producto  int primary key auto_increment,
 nombre varchar(25	5) not null,
 precio float not null,
 stock int not null,
 fecha_creacion datetime null
);
 insert into Productos (nombre,precio,stock ,fecha_creacion)
 values ('Salsa de tomate',2.5 , 2, '2016-09-27');
 /*--------------------------------------*/
  insert into Productos (nombre,precio,stock ,fecha_creacion)
 values ('yogurt',0.5 , 5, '2016-09-27');
 
 select * from  Productos;