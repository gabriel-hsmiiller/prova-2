CREATE DATABASE IF NOT EXISTS jogos_olimpicos;

USE jogos_olimpicos;

CREATE TABLE IF NOT EXISTS esportes (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `modalidade` VARCHAR(50) NOT NULL,
    `tipo` VARCHAR(50) NOT NULL,
    `distancia` FLOAT(5, 3) NOT NULL,
    `sexo` VARCHAR(15) NOT NULL,
    `local` VARCHAR(50) NOT NULL
);