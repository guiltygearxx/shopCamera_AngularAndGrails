CREATE TABLE myapp.user_authority
(
    user_id bigint(20) NOT NULL,
    authority_id bigint(20) NOT NULL,
    CONSTRAINT `PRIMARY` PRIMARY KEY (user_id, authority_id),
    CONSTRAINT FKpqlsjpkybgos9w2svcri7j8xy FOREIGN KEY (user_id) REFERENCES user (id),
    CONSTRAINT FKgvxjs381k6f48d5d2yi11uh89 FOREIGN KEY (authority_id) REFERENCES authority (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE INDEX FKgvxjs381k6f48d5d2yi11uh89 ON myapp.user_authority (authority_id);
INSERT INTO myapp.user_authority (user_id, authority_id) VALUES (1, 1);