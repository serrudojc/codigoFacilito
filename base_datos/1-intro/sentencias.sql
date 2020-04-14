DROP DATABASE IF EXISTS libreria_cf;
CREATE DATABASE IF NOT EXISTS libreria_cf;

USE libreria_cf;

CREATE TABLE IF NOT EXISTS autores(
    autor_id INT UNSIGNED NOT NULL,
    nombre VARCHAR(25) NOT NULL,
    apellido VARCHAR(25) NOT NULL,
    seudonimo VARCHAR(50) UNIQUE,
    -- genero CHAR(1) NOT NULL,  -- M o F
    genero ENUM('M','F'),
    fecha_nacimiento DATE NOT NULL,   -- Año mes dia
    pais_origen VARCHAR(40) NOT NULL,
    fecha_creacion DATETIME DEFAULT current_timestamp
);

INSERT INTO autores (autor_id, nombre, apellido, genero, fecha_nacimiento, pais_origen)
VALUES (1, 'Codi', 'Codi', 'M', '2018-01-01', 'Mexico'),
       (2, 'Codi', 'Codi', 'M', '2018-01-01', 'Mexico'),
       (3, 'Codi', 'Codi', 'M', '2018-01-01', 'Mexico'),
       (4, 'Codi', 'Codi', 'M', '2018-01-01', 'Mexico'),
       (5, 'Codi', 'Codi', 'M', '2018-01-01', 'Mexico');

INSERT INTO autores (autor_id, nombre, apellido, seudonimo, genero, fecha_nacimiento, pais_origen)
VALUES (10, 'Stephen', 'King', 'Richard Bachman', 'm', '1947-09-27', 'USA');


SELECT * FROM autores;
