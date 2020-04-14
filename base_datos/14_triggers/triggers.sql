-- Creacion de Triggers
DELIMITER //
--5.7.2 <  Máximo 6 triggers
CREATE TRIGGER after_insert_actualizacion_libros --Nombre del trigger tiempo_evento_accion a realizar
AFTER INSERT ON libros -- Definimos tiempo y cuando, asociamos trigger a una tabla
FOR EACH ROW    -- define q se ejecutará c/vez q el trigger sea activado, lo q ocurre una vez por c/registro afectado. En INSERT, UPDATE o DELETE pueden afectar a mas de 1 registro. 
BEGIN
  UPDATE autores SET cantidad_libros = cantidad_libros + 1 WHERE autor_id = NEW.autor_id; -- NEW hace refencia al registro actual, al registro q se ha insertado
END;
//

-- prueba en terminal
-- SELECT * FROM autores;   -- veo q c/uno tiene cero en cantidad_libros
-- INSERT INTO libros(autor_id, titulo, fecha_publicacion) VALUES (1, "Area 81", '2011-04-01'); -- Insertamos un libro
-- SELECT * FROM autores WHERE autor_id =1 /G; -- vemos q cantidad_libros aumentó en 1, Nuestro trigger está funcionando




-- EVENTO DELETE quiero decrecer la columna cantidad_libros siempre q un libro sea eliminado de nuestra DB

DELIMITER //
CREATE TRIGGER after_delete_actualizacion_libros
AFTER DELETE ON libros  -- AFTER + evento + tabla asociada
FOR EACH ROW
BEGIN
  UPDATE autores SET cantidad_libros = cantidad_libros - 1 WHERE autor_id = OLD.autor_id; -- OLD hace referencia al registro eliminado
END;
//


-- en consola creamos el trigger
-- SELECT * FROM autores WHERE autor_id=1; -- tiene 2 libros
-- SELECT libro_id, titulo FROM libros; -- vemos el id del ultimo libro
-- DELETE FROM libros WHERE libro_id=60;
-- SELECT * FROM autores WHERE autor_id=1;  -- vemos que ahora tiene un libro




--EVENTO UPDATE generamos un trigger que se ejecuta cuando se actualice la tabla libros. Si el libro modifica
-- a su autor, entonces el trigger decrece en uno la columna cantidad_libros del viejo autor, y va incrementar
-- en uno la columna cantidad_libros del nuevo autor

DELIMITER //
CREATE TRIGGER after_update_actualizacion_libros
AFTER UPDATE ON libros
FOR EACH ROW
BEGIN
  -- validacion 
  -- si el nuevo registro en autor_id es diferente al viejo registro. el registro despues de la actualizacion != reg antes de la actual
  IF (NEW.autor_id != OLD.autor_id) THEN  -- si hubo un cambio en dicha columna:

    UPDATE autores SET libros = libros - 1 WHERE autor_id = OLD.autor_id;
    UPDATE autores SET libros = libros + 1 WHERE autor_id = NEW.autor_id;

  END IF;

END;//

DELIMITER ;

-- modificamos libro con id 62
-- UPDATE libros SET autor_id = 2 WHERE libro_id = 62;
-- SELECT autor_id, nombre, cantidad_libros FROM autores;



-- LISTADO Y ELIMINACION DE TRGGERS
-- SHOW TRIGGERS; -- se muestran sólo los triggers de la actual DB
-- DROP TRIGGER IF EXISTS baseDeDatos.nombreTrigger;