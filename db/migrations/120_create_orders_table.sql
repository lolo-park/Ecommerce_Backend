-- migrate:up
CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    order_number INT NOT NULL,
    status_id INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    quantity INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT orders_order_number_ukey UNIQUE (order_number),
    CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT orders_status_id_fkey FOREIGN KEY (status_id) REFERENCES statuses(id)
)
-- migrate:down
DROP TABLE orders;

