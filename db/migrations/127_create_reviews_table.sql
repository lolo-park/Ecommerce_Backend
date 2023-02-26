-- migrate:up
CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_option_id INT NOT NULL,
    review VARCHAR(5000) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT reviews_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT reviews_product_option_id_fkey FOREIGN KEY (product_option_id) REFERENCES product_options(id)
)
-- migrate:down
DROP TABLE reviews;

