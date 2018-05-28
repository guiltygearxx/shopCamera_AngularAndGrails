CREATE TABLE myapp.authority
(
    id bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    version bigint(20) NOT NULL,
    authority varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE UNIQUE INDEX UK_nrgoi6sdvipfsloa7ykxwlslf ON myapp.authority (authority);
INSERT INTO myapp.authority (version, authority) VALUES (0, 'ROLE_ADMIN');