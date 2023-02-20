-- migrate:up
CREATE TABLE wishlists (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_option_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT wishlists_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT wishlists_product_option_id_fkey FOREIGN KEY (product_option_id) REFERENCES product_options(id)
)
-- migrate:down
DROP TABLE wishlists;

