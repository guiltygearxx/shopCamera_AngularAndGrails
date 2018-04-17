CREATE TABLE myapp.authentication_token
(
    id bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    token_value varchar(255) NOT NULL,
    username varchar(255) NOT NULL
);
