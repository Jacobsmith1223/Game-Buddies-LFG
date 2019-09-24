-- SELECT post_id, message
-- FROM chatroom
-- WHERE post_id = $1


SELECT c.post_id, c.message, u.username
FROM chatroom c
JOIN users u on c.users_id = u.id
WHERE c.post_id = $1