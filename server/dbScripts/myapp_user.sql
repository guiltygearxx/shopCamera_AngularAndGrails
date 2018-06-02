CREATE TABLE myapp.user
(
    id bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    version bigint(20) NOT NULL,
    password_expired bit(1) NOT NULL,
    username varchar(255) NOT NULL,
    account_locked bit(1) NOT NULL,
    password varchar(255) NOT NULL,
    account_expired bit(1) NOT NULL,
    enabled bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE UNIQUE INDEX UK_sb8bbouer5wak8vyiiy4pf2bx ON myapp.user (username);
INSERT INTO myapp.user (version, password_expired, username, account_locked, password, account_expired, enabled) VALUES (0, false, 'admin', false, '$2a$10$Vl7n8UMqCWonjc2HP9y2W.6gH2fhtYZuLD1TctBtpr6eV6RPFQ2da', false, true);