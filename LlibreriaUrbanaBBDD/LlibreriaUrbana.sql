DROP SCHEMA IF EXISTS `LlibreriaUrbana`;
CREATE SCHEMA IF NOT EXISTS `LlibreriaUrbana`;
USE LlibreriaUrbana;

-- Tabla de Usuarios
CREATE TABLE Usuarios (
    ID_Usuario BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nickname CHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email CHAR(100) NOT NULL
);

-- Tabla de Libros
CREATE TABLE Libros (
	ID_libros Integer PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    autor VARCHAR(50) NOT NULL,
    imagenes VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL
);

/*Información Uusarios*/
INSERT INTO Usuarios(nickname, password, email) VALUES
('Maribel', ('HSUOnX9b8'), 'maribelecheverria@gmail.com'),
('Aitana', ('aitanaperez@gmail.com'), 'aitanaperez@gmail.com'),
('Angeles', ('TTNSzTdSJreeKUl'), 'angelesandren@gmail.com'),
('Adrian', ('aRwfe7F'), 'adrianperis@gmail.com'),
('Rebeca', ('rebecaverdugo@gmail.com'), 'rebecaverdugo@gmail.com'),
('Jesús', ('jesúsrosa@gmail.com'), 'jesúsrosa@gmail.com'),
('Marina', ('marinalloret@gmail.com'), 'marinalloret@gmail.com'),
('Paula', ('paulahermol@gmail.com'), 'paulahermol@gmail.com'),
('Miquel', ('miquelriera@gmail.com'), 'miquelriera@gmail.com'),
('Admin', ('Admin'), 'admin@gmail.com');

DELETE FROM LIBROS WHERE ID_libros = 2;

USE LlibreriaUrbana;
SELECT * FROM usuarios;
SELECT * FROM libros;