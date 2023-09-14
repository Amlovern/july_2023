INSERT INTO production_studios (name, location, year_established)
VALUES
('Mappa', 'Japan', 2011),
('Bones', 'Japan', 1998),
('White Fox', 'Japan', 2007),
('Madhouse', 'Japan', 1972),
('A-1 Pictures', 'Japan', 2005),
('Kyoto Animation', 'Japan', 1985),
('ufotable', 'Japan', 2000),
('Sunrise', 'Japan', 1976),
('Studio Gokumi', 'Japan', 2010),
('Studio Ghibli', 'Japan', 1985),
('Pierrot', 'Japan', 1979);

INSERT INTO anime (title, release_year, num_episodes, type, completed, avg_rating, studio_id)
VALUES
('Fullmetal Alchemist: Brotherhood', 2009, 64, 'show', 1, 9.1, 2),
('Steins;Gate', 2011, 24, 'show', 1, 9.07, 3),
('Hunter x Hunter', 2011, 148, 'show', 1, 9.04, 4),
('Love is War: Ultra Romantic', 2022, 13, 'show', 1, 9.04, 5),
('A Silent Voice', 2016, 1, 'movie', 1, 8.94, 6),
('Demon Slayer', 2019, 26, 'show', 1, 8.5, 7),
('Cowboy Bebop', 1998, 26, 'show', 1, 8.75, 8),
('Reborn as a Vending Machine, I Now Wander the Dungeon', 2023, 12, 'show', 0, 6.39, 9),
('Kiki''s Delivery Service', 1989, 1, 'movie', 1, 8.22, 10),
('Black Clover', 2017, 170, 'show', 1, 8.15, 11),
('Chainsaw Man', 2022, 12, 'show', 1, 8.56, 1),
('My Hero Academia', 2016, 12, 'show', 1, 7.88, 2),
('One Punch Man', 2015, 12, 'show', 1, 8.5, 4),
('InuYasha', 2000, 167, 'show', 1, 7.86, 8);

INSERT INTO genres (name)
VALUES
('drama'),
('action'),
('comedy'),
('adventure'),
('fantasy');

INSERT INTO anime_genres (anime_id, genre_id)
VALUES
(1,2),
(2,3),
(3,4),
(4,5),
(1,5),
(2,4),
(3,3);