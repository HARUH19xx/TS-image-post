CREATE USER IF NOT EXISTS do IDENTIFIED BY 'adeerafemaledeer';
CREATE DATABASE IF NOT EXISTS cdur CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE cdur;
CREATE TABLE user (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(24) NOT NULL,
    profile text,
    date_of_birth date DEFAULT NULL,
    password varchar(255) NOT NULL,
    created_at timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY name (name)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COLLATE utf8mb4_unicode_ci;
CREATE TABLE posts (
    id int NOT NULL AUTO_INCREMENT,
    user_id int DEFAULT NULL,
    image_url varchar(255) NOT NULL,
    comment varchar(100) DEFAULT NULL,
    created_at timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    KEY user_id (user_id),
    CONSTRAINT posts_ibfk_1 FOREIGN KEY (user_id) REFERENCES user (id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COLLATE utf8mb4_unicode_ci;