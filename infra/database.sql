CREATE DATABASE trbv_oidevs;

CREATE TABLE vehicles (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    plate VARCHAR(7) unique not null,
    brand VARCHAR(50) not null,
    model VARCHAR(50)  not null,
    color VARCHAR(50) );

INSERT INTO vehicles (plate, brand, model, color) 
VALUES('123ABC', 'FORD', 'Ka', 'red');

-- SELECT * FROM vehicles