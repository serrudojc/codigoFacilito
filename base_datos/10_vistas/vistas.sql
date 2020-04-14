
-- vista qe nos permite conocer los usuarios q han prestado libros en la ultima semana y la cantidad
CREATE VIEW prestamos_usuarios_vw AS
SELECT
  usuarios.usuario_id,
  usuarios.nombre,
  usuarios.email,
  usuarios.username,
  COUNT(usuarios.usuario_id) AS total_prestamos

FROM usuarios
INNER JOIN libros_usuarios ON usuarios.usuario_id = libros_usuarios.usuario_id
GROUP BY usuarios.usuario_id;



-- Editar vistas
CREATE OR REPLACE VIEW prestamos_usuarios_vw AS
SELECT
  usuarios.usuario_id,
  usuarios.nombre,
  usuarios.email,
  usuarios.username,
  COUNT(usuarios.usuario_id) AS total_prestamos

FROM usuarios
INNER JOIN libros_usuarios ON usuarios.usuario_id = libros_usuarios.usuario_id
            AND libros_usuarios.fecha_creacion >= CURDATE() - INTERVAL 5 DAY
GROUP BY usuarios.usuario_id;