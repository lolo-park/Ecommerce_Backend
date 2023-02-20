-- migrate:up
CREATE TABLE product_options (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    size_id INT NOT NULL ,
    color_id INT NOT NULL,
    type_id INT NOT NULL,
    price DECIMAL (10,2),
    CONSTRAINT product_options_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id),
    CONSTRAINT product_options_size_id_fkey FOREIGN KEY (size_id) REFERENCES sizes(id),
    CONSTRAINT product_options_color_id_fkey FOREIGN KEY (color_id) REFERENCES colors(id),
    CONSTRAINT product_options_type_id_fkey FOREIGN KEY (type_id) REFERENCES types(id)
)
-- migrate:down
DROP TABLE product_options;

