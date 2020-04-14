DELIMETER //

CREATE PROCEDURE prestamo(usuario_id INT, libro_id INT)
BEGIN
    -- cuando aparezca un error, no haga commit, sino rollback
    -- DECLARE accion q se ejecuta cuando ocurra un error
  DECLARE EXIT HANDLER FOR SQLEXCEPTION
  BEGIN
    ROLLBACK;
  END;

  START TRANSACTION;

  INSERT INTO libros_usuarios(libro_id, usuario_id) VALUES(libro_id, usuario_id);
  UPDATE libros SET stock = stock - 1 WHERE libros.libro_id = libro_id;
  
  COMMIT;

END//

DELIMETER ;