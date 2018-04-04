CREATE TABLE myapp.authentication_token
(
    id bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    token_value varchar(255) NOT NULL,
    username varchar(255) NOT NULL
);
INSERT INTO myapp.authentication_token (token_value, username) VALUES ('ngosakeoqlgv59efb2fs4snblp0kglkh', 'admin');
INSERT INTO myapp.authentication_token (token_value, username) VALUES ('8ijpab946k2etfhpth79b85gi5f03trs', 'admin');
INSERT INTO myapp.authentication_token (token_value, username) VALUES ('n8bhoaq1n9jf5obf94tncj8lpho15se0', 'admin');
INSERT INTO myapp.authentication_token (token_value, username) VALUES ('jtjuvf3ku23i1im3v83mu30qcgpmlmnq', 'admin');
INSERT INTO myapp.authentication_token (token_value, username) VALUES ('6amcpm10n97ie58l8gn34o0jftc9lphk', 'admin');