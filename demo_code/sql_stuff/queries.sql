SELECT title, genre, release_year, avg_rating FROM anime
WHERE release_year < 2010 OR genre = 'action';


DELETE FROM anime WHERE id = 8;

INSERT INTO anime (title, genre, release_year, num_episodes, type, completed, avg_rating, main_char)
VALUES
('Pokemon', 'adventure', 1997, 276, 'show', 1, 7.3, "Ash Ketchum");

UPDATE anime SET num_episodes = num_episodes + 1 WHERE type = 'show';

SELECT * FROM anime
WHERE release_year BETWEEN 2000 AND 2012;

-- All anime that are action, comedy, adventure
SELECT * FROM anime
WHERE genre = 'action' OR genre = 'comedy' OR genre = 'adventure';

SELECT * FROM anime
WHERE genre IN ('action', 'comedy', 'adventure');

SELECT * FROM production_studios
WHERE name LIKE 'stud%io%';

SELECT * FROM anime
ORDER BY avg_rating DESC, release_year
LIMIT 5
OFFSET 5;

-- Title, # episodes, and rating of all anime that were made
-- from 2000 to 2020 ordered by rating with highest on bottom
-- only want a maximum of 4 shows
SELECT title, num_episodes, avg_rating
FROM anime
WHERE release_year BETWEEN 2000 AND 2020 AND type = 'movie'
ORDER BY avg_rating
LIMIT 4;

SELECT title, (avg_rating / 2) AS out_of_five FROM anime;

SELECT title AS name, main_char AS protag FROM anime;

-- I want all the anime that are newer than 2010 
-- but older than 2023 that are not movies 
-- contain the letter r are action or adventure 
-- have more than 50 episodes and a rating greater than 6
SELECT *
FROM anime
WHERE release_year BETWEEN 2011 AND 2022 AND NOT type='movie'
AND title LIKE '%r%' AND genre IN ('action', 'adventure')
AND num_episodes > 50 AND avg_rating > 6
ORDER BY main_char
LIMIT 3
OFFSET 3;

SELECT anime.id AS anime_id, anime.title, production_studios.id, production_studios.name
FROM production_studios
JOIN anime ON (anime.studio_id = production_studios.id);
-- JOIN <table> ON (<table>.id = <other table>.<FK column>)

--How do I get from anime to genres
SELECT anime.title, genres.name
FROM anime
JOIN anime_genres ON (anime_genres.anime_id = anime.id)
JOIN genres ON (anime_genres.genre_id = genres.id);

--All anime that are from a studio that has 'a' in its name
--give me anime title, studio name, and what genre it is
SELECT anime.title, production_studios.name, genres.name
FROM production_studios
JOIN anime ON (anime.studio_id = production_studios.id)
JOIN anime_genres ON (anime_genres.anime_id = anime.id)
JOIN genres ON (anime_genres.genre_id = genres.id)
WHERE production_studios.name LIKE '%a%';


SELECT MIN(num_episodes) FROM anime;

SELECT AVG(avg_rating) FROM anime;

SELECT COUNT(*) FROM anime
WHERE studio_id = 4;

SELECT TOTAL(avg_rating) FROM anime;

SELECT AVG(avg_rating), studio_id FROM anime
GROUP BY studio_id
HAVING AVG(avg_rating) > 8.7;

-- All of the info of all of our anime and their studio
SELECT *
FROM anime
JOIN production_studios ON (anime.studio_id = production_studios.id);

SELECT * FROM anime
WHERE studio_id IN (
    SELECT id FROM production_studios
    WHERE name LIKE 'studio%'
);