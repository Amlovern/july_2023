SELECT title, genre, release_year, avg_rating FROM anime
WHERE release_year < 2010 OR genre = 'action';


DELETE FROM anime WHERE id = 8;

INSERT INTO anime (title, genre, release_year, num_episodes, type, completed, avg_rating, main_char)
VALUES
('Pokemon', 'adventure', 1997, 276, 'show', 1, 7.3, "Ash Ketchum");

UPDATE anime SET num_episodes = num_episodes + 1 WHERE type = 'show';