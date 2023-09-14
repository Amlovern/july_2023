PRAGMA foreign_keys = on;
DROP TABLE IF EXISTS anime;
DROP TABLE IF EXISTS production_studios;

-- <column name> <data type> <attributes/constraints>
CREATE TABLE production_studios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL UNIQUE,
    location VARCHAR NOT NULL,
    year_established INTEGER NOT NULL
);

CREATE TABLE anime (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR NOT NULL UNIQUE,
    genre VARCHAR NOT NULL,
    release_year INTEGER,
    num_episodes INTEGER,
    type VARCHAR(10) NOT NULL,
    completed BOOLEAN,
    avg_rating DECIMAL(3,2),
    main_char VARCHAR(100),
    -- studio_id INTEGER,
    -- FOREIGN KEY (studio_id) REFERENCES production_studios(id)
    studio_id INTEGER REFERENCES production_studios(id) ON DELETE SET NULL
);

