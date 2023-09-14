PRAGMA foreign_keys = on;
DROP TABLE IF EXISTS anime_genres;
DROP TABLE IF EXISTS genres;
DROP TABLE IF EXISTS protagonists;
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
    release_year INTEGER,
    num_episodes INTEGER,
    type VARCHAR(10) NOT NULL,
    completed BOOLEAN,
    avg_rating DECIMAL(3,2),
    -- studio_id INTEGER,
    -- FOREIGN KEY (studio_id) REFERENCES production_studios(id)
    studio_id INTEGER REFERENCES production_studios(id) ON DELETE SET NULL
);

CREATE TABLE protagonists (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) UNIQUE NOT NULL,
    voice_actor VARCHAR NOT NULL,
    anime_id INTEGER REFERENCES anime(id) ON DELETE CASCADE
);

CREATE TABLE genres (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR UNIQUE NOT NULL
);

CREATE TABLE anime_genres (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    anime_id INTEGER REFERENCES anime(id) ON DELETE CASCADE,
    genre_id INTEGER REFERENCES genres(id) ON DELETE SET NULL
);
