--Get all artists 'public side'
SELECT id, name, image_url, extract_url, media_url
FROM artists;

--Create artist 'admin side' 
INSERT INTO artists (name, image_url, extract_url, media_url)
VALUES ($1, $2, $3, $4);

--Get artist by id 'admin side'
SELECT id, name, image_url, extract_url, media_url
FROM artists
WHERE id = $1;

--Update artist 'admin side'
UPDATE artists
SET name = $1, image_url = $2, extract_url = $3, media_url = $4
WHERE id = $5;

--Delete artist 'admin side'
DELETE FROM artists
WHERE id = $1;
