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

-- Tabla de Comercios
CREATE TABLE Comercios (
    ID_comercio BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre_Comercio CHAR(100) NOT NULL,
    direccion CHAR(100) NULL,
    telefono DECIMAL(25) NOT NULL
);
-- Tabla de Libros
CREATE TABLE Libros (
	ID_libros BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    ID_propietario BIGINT UNSIGNED NOT NULL,
    titulo CHAR(100) NOT NULL,
    autor CHAR(50) NOT NULL,
    descripcion CHAR(100) NOT NULL,
    FOREIGN KEY (ID_propietario) REFERENCES Usuarios(ID_Usuario)
);
    -- tabla de intercambios
CREATE TABLE Intercambios (
  ID_intercambios BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  ID_libro_ofrecido BIGINT UNSIGNED NOT NULL,
  ID_Propietario BIGINT UNSIGNED NOT NULL,
  fecha_intercambio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (ID_libro_ofrecido) REFERENCES Libros(ID_libros),
  FOREIGN KEY (ID_Propietario) REFERENCES Usuarios(ID_Usuario)
);

/*Información Comercios*/
INSERT INTO Comercios(nombre_Comercio, direccion, telefono) VALUES
('Bershka', 'Carrer de les Moles, 86', '668751811'),
('El Corte Inglés', 'Passeig de Fabra i Puig, 43', '624175963'),
('Humana', 'Carrer de Cartagena, 63', '640777228'),
('Supermercado Dia', 'Carrer de la Cirera, 39', '678235624'),
('Teatro Nacional Catalan', 'Carrer de València, 92', '622107232'),
('Cosmo Caixa', 'Carrer de Peracamps, 20', '+34627705478'),
('Cine Comedia', 'Carrer de Blanes, 23', '614061282'),
('Restaurante EcoFood', 'La Rambla, 95', '669242220');

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

/*INSERT INTO Libros(titulo,autor,descripcion) VALUES
('Codigo Limpio','Robert C Martin', 'Libro que se divide en 3 partes: patrones y practicas, casos de estudio y problemas de codigo.');
*/

USE LlibreriaUrbana;
SELECT * FROM usuarios;