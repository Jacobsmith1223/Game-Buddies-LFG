DELETE 
FROM chatroom 
WHERE post_id = $1;

DELETE 
FROM posts
WHERE id = $1;