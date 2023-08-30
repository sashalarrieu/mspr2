-- Création des tables
CREATE TABLE customer (
    id BIGINT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
);

CREATE TABLE order (
    id BIGINT PRIMARY KEY,
    customer_id BIGINT,
    order_number VARCHAR(255),
    FOREIGN KEY (customer_id) REFERENCES customer(id)
);

-- Insertion des données
INSERT INTO customer (id, name, email) VALUES (1, 'John Doe', 'john.doe@example.com');
INSERT INTO customer (id, name, email) VALUES (2, 'Jane Smith', 'jane.smith@example.com');

INSERT INTO order (id, customer_id, order_number) VALUES (1, 1, 'ORD123');
INSERT INTO order (id, customer_id, order_number) VALUES (2, 1, 'ORD124');
INSERT INTO order (id, customer_id, order_number) VALUES (3, 2, 'ORD125');
