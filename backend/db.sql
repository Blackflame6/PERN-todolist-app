DROP TABLE IF EXISTS todos

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);

INSERT INTO todos (description) VALUES ('I need to wash my car');