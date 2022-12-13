DROP TABLE IF EXISTS pets;

CREATE TABLE pets(
    id SERIAL PRIMARY KEY,
    age INTEGER,
    kind TEXT,
    name TEXT
)

INSERT INTO pets