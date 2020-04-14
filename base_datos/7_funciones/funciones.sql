-- Estas funciones las copio y pego en la terminal
-- si uso SOURCE, puede haber error, ver https://stackoverflow.com/questions/26015160/deterministic-no-sql-or-reads-sql-data-in-its-declaration-and-binary-logging-i

-- cambio el ; por un signo cualquiera
DELIMETER //

CREATE FUNCTION agregar_dias(fecha DATE, dias INT)
RETURNS DATE
BEGIN
    RETURN fecha + INTERVAL dias DAY;
END//
-- cOmo queremos que todo se mande como una sola sentencia, cambiamos el ; por un signo cualquiera

-- vuelvo a poner ; 
-- DELIMETER ;


CREATE FUNCTION obtener_paginas()
RETURNS INT
BEGIN
  SET @paginas = (SELECT (ROUND( RAND() * 100 ) * 4 ));
  RETURN @paginas;
END//

CREATE FUNCTION obtener_ventas()
RETURNS INT
BEGIN
  SET @paginas = (SELECT (ROUND( RAND() * 100 ) * 6 ));
  RETURN @paginas;
END//

DELIMITER ;

-- actualizamos las paginas de los libros, de manera random
UPDATE libros SET paginas = obtener_paginas();
UPDATE libros SET ventas = obtener_ventas();