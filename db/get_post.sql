SELECT p.title, p.content, p.id, p.thread_id
FROM posts p
JOIN threads t on p.thread_id = t.id
WHERE p.thread_id = $1