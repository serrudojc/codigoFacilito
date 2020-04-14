-- Crear store procedures
-- Prestar libros


-- usuario_id a quien presto, libro_id q libro vmos a prestar, OUT es para q el parametro pueda ser obtenido luego de ejecutarse el storeprocedure
-- insertar registro en la tabla libros_usuarios y restar en 1 el stock de libros (default=10)
DELIMITER //

CREATE PROCEDURE prestamo(usuario_id INT, libro_id INT, OUT cantidad INT)
BEGIN
    -- esto es lo que vamos a obtener del store procedure. En la consola creamos una var @cantidad y la pasamos como parametro.
  SET cantidad = (SELECT stock FROM libros WHERE libros.libro_id = libro_id);


  IF cantidad > 0 THEN
    -- insertamos y actualizamos. En el WHERE, hay ambieguedad, ponemos libros.libro_id
    INSERT INTO libros_usuarios(libro_id, usuario_id) VALUES(libro_id, usuario_id);
    UPDATE libros SET stock = stock - 1 WHERE libros.libro_id = libro_id;
    -- SET cantidad = cantidad -1;

  --ELSEIF condición THEN

  ELSE

    SELECT "No es posible realizar el prestamo" AS mensaje;

  END IF;
END//

-- -----------------------------------------------------------------------------
-- CASOS
-- Dependiendo de cuantos prestamos hizo el usuario, mensajes diferentes.

CREATE PROCEDURE tipo_lector(usuario_id INT)
BEGIN
    --cantidad de libros prestados por el usuario, lo guardamos en una variable
  SET @cantidad = (SELECT COUNT(*) FROM libros_usuarios WHERE libros_usuarios.usuario_id = usuario_id);

  CASE
    WHEN @cantidad > 20 THEN
      SELECT "Fanatico" AS mensaje;
    WHEN @cantidad > 10 AND @cantidad < 20 THEN
      SELECT "Afionado" AS mensaje;
    WHEN @cantidad > 5 AND @cantidad < 10 THEN
      SELECT "Promedio" AS mensaje;
    ELSE
      SELECT "Nuevo" AS mensaje;
  END CASE;
END//

-- -----------------------------------------------------------------------------
-- ciclos
-- 

CREATE PROCEDURE libros_azar_1()
BEGIN
  SET @iteraciones= 0;

  WHILE @iteraciones < 5 DO
    SELECT libro_id, titulo FROM libros ORDER BY RAND() LIMIT 1;
    SET @iteraciones = @iteraciones + 1;
  END WHILE;

END//

CREATE PROCEDURE libros_azar_2()
BEGIN
  SET @iteraciones= 0;

  REPEAT
    SELECT libro_id, titulo FROM libros ORDER BY RAND() LIMIT 1;
    SET @iteraciones = @iteraciones + 1;

    UNTIL @iteraciones >= 5
  END REPEAT;

END//

DELIMITER ;