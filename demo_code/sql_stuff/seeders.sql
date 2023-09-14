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

INSERT INTO anime (title, genre, release_year, num_episodes, type, completed, avg_rating, main_char, studio_id)
VALUES
('Fullmetal Alchemist: Brotherhood', 'action', 2009, 64, 'show', 1, 9.1, 'Edward Elric', 2),
('Steins;Gate', 'drama', 2011, 24, 'show', 1, 9.07, 'Rintarou Okabe', 3),
('Hunter x Hunter', 'action', 2011, 148, 'show', 1, 9.04, 'Gon Freecss', 4),
('Love is War: Ultra Romantic', 'comedy', 2022, 13, 'show', 1, 9.04, 'Kaguya Shinomiya', 5),
('A Silent Voice', 'drama', 2016, 1, 'movie', 1, 8.94, 'Shouko Nishimiya', 6),
('Demon Slayer', 'action', 2019, 26, 'show', 1, 8.5, 'Tanjiro Kamado', 7),
('Cowboy Bebop', 'sci-fi', 1998, 26, 'show', 1, 8.75, 'Spike Spiegel', 8),
('Reborn as a Vending Machine, I Now Wander the Dungeon', 'fantasy', 2023, 12, 'show', 0, 6.39, 'Boxxo', 9),
('Kiki''s Delivery Service', 'adventure', 1989, 1, 'movie', 1, 8.22, 'Kiki', 10),
('Black Clover', 'action', 2017, 170, 'show', 1, 8.15, 'Asta', 11),
('Chainsaw Man', 'fantasy', 2022, 12, 'show', 1, 8.56, 'Denji', 1),
('My Hero Academia', 'action', 2016, 12, 'show', 1, 7.88, 'Deku', 2),
('One Punch Man', 'comedy', 2015, 12, 'show', 1, 8.5, 'Saitama', 4),
('InuYasha', 'adventure', 2000, 167, 'show', 1, 7.86, 'Inuyasha', 8);