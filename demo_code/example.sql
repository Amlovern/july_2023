-- Table anime {
--   id INTEGER
--   title VARCHAR
--   genre VARCHAR
--   release_year INTEGER
--   num_episodes INTEGER
--   type VARCHAR(10)
--   completed BOOLEAN
--   avg_rating DECIMAL(3,1)
--   main_char VARCHAR(100)
-- }

DROP TABLE IF EXISTS anime;

-- <column name> <data type> <attributes/constraints>
CREATE TABLE anime (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR NOT NULL UNIQUE,
    genre VARCHAR NOT NULL,
    release_year INTEGER,
    num_episodes INTEGER,
    type VARCHAR(10) NOT NULL,
    completed BOOLEAN,
    avg_rating DECIMAL(3,1),
    main_char VARCHAR(100)
);

INSERT INTO anime (title, genre, release_year, num_episodes, type, completed, avg_rating, main_char)
VALUES
('Fullmetal Alchemist: Brotherhood', 'action', 2009, 64, 'show', 1, 9.1, 'Edward Elric'),
('Steins;Gate', 'drama', 2011, 24, 'show', 1, 9.07, 'Rintarou Okabe'),
('Hunter x Hunter', 'action', 2011, 148, 'show', 1, 9.04, 'Gon Freecss'),
('Love is War: Ultra Romantic', 'comedy', 2022, 13, 'show', 1, 9.04, 'Kaguya Shinomiya'),
('A Silent Voice', 'drama', 2016, 1, 'movie', 1, 8.94, 'Shouko Nishimiya'),
('Demon Slayer', 'action', 2019, 26, 'show', 1, 8.5, 'Tanjiro Kamado'),
('Cowboy Bebop', 'sci-fi', 1998, 26, 'show', 1, 8.75, 'Spike Spiegel'),
('Reborn as a Vending Machine, I Now Wander the Dungeon', 'fantasy', 2023, 12, 'show', 0, 6.39, 'Boxxo'),
('Kiki''s Delivery Service', 'adventure', 1989, 1, 'movie', 1, 8.22, 'Kiki'),
('Black Clover', 'action', 2017, 170, 'show', 1, 8.15, 'Asta');