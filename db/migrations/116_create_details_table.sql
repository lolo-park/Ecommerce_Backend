-- migrate:up
CREATE TABLE details (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    width VARCHAR(30) NULL, 
    purpose VARCHAR(30) NULL,
    material VARCHAR(100) NULL,
    features VARCHAR(100) NULL
)
-- migrate:down
DROP TABLE details;

